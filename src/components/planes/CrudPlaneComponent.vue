<template>
  <n-card embedded style="margin: 24px">
    <n-form ref="formRef" :model="plane" :rules="rules">
      <n-form-item path="id" label="Identificador">
        <n-input type="text" v-model:value="plane.id" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="modelo" label="Modelo">
        <n-select v-model:value="plane.modelo" :options="store.planesModels" />
      </n-form-item>
      <n-space style="margin-top: 2em" justify="end">
        <n-button secondary type="primary" @click="goBack()">Cancelar</n-button>
        <n-button @click="createPlane" type="primary">Guardar</n-button>
      </n-space>
    </n-form>
  </n-card>
</template>

<script setup>
import { NForm, NButton, NInput, NFormItem, NCard, NSpace, NSelect } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { usePlanesStore } from '@/stores/planesStore.js'

const store = usePlanesStore()

const router = useRouter()

const plane = ref({
  id: '',
  modelo: 'Selecciona un modelo'
})

const createPlane = () => {
  store.createPlane(plane.value)
  router.push('/backoffice/flota/aviones/lista')
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
    capacidad: [
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
