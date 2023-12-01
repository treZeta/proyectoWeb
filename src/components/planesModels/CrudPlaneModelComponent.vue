<template>
  <n-card embedded style="margin: 24px">
    <n-form ref="formRef" :model="plane" :rules="rules">
      <n-form-item path="nombre" label="Nombre">
        <n-input :disabled="editing" v-model:value="plane.nombre.valor" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="asientos" label="Asientos">
        <n-input v-model:value="plane.asientos" type="number" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="imagen" label="Imagen">
        <n-input type="text" v-model:value="plane.imagen"></n-input>
      </n-form-item>
      <n-space justify="center">
        <n-image width="600" height="300" lazy :src="plane.imagen">
        </n-image>
      </n-space>
      <n-space style="margin-top: 2em" justify="end">
        <n-button secondary type="primary" @click="goBack()">Cancelar</n-button>
        <n-button @click="savePlaneModel" type="primary">Guardar</n-button>
      </n-space>
    </n-form>
  </n-card>
</template>

<script setup>
import {
  NForm,
  NButton,
  NInput,
  NFormItem,
  NCard,
  NImage,
  NSpace
} from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { usePlanesStore } from '@/stores/planesStore.js'

const store = usePlanesStore();

const route = useRoute()
const router = useRouter()

const plane = ref({
  nombre: { valor: '' },
  asientos: null,
  imagen: ''
})

const editing = ref(false)

const savePlaneModel = () => {
  if (!editing.value) {
    store.createPlaneModel(plane.value)
    router.push("/backoffice/flota/modelos/lista")
    return
  }
  store.editPlaneModel(plane.value)
  router.push("/backoffice/flota/modelos/lista")

}


if (route.name.includes('/editar')) {
  editing.value = true

  let planeModel = store.findPlaneModel(route.params.id)
  console.log(planeModel);
  plane.value.nombre = planeModel.nombre
  plane.value.asientos = planeModel.asientos
  plane.value.imagen = planeModel.imagen
}

const goBack = () => {
  router.go(-1)
}

const rules = {
  plane: {
    nombre: [
      {
        required: true,
        message: 'Ingresa un nombre para el modelo de avión',
        trigger: 'blur'
      }
    ],
    asientos: [
      {
        required: true,
        message: 'Ingresa la capacidad del modelo',
        trigger: ['input', 'blur']
      }
    ],
    imagen: [
      {
        required: true,
        message: 'Agrega la ruta a una imagen de referencia',
        trigger: ['input', 'blur']
      }
    ]
  },
  phone: {
    required: true,
    message: 'Please input your number',
    trigger: ['input']
  }
}
</script>

<style></style>
