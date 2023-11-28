<template>
  <n-card embedded style="margin: 24px">
    <n-form ref="formRef" :model="plane" :rules="rules">
      <n-form-item path="nombre" label="Nombre">
        <n-input v-model:value="plane.nombre" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="capacidad" label="Capacidad">
        <n-input v-model:value="plane.capacidad" type="number" @keydown.enter.prevent />
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
        <n-button type="primary">Guardar</n-button>
      </n-space>
    </n-form>
  </n-card>
</template>

<script setup>
import {
  NForm,
  NGrid,
  NButton,
  NInput,
  NFormItem,
  NRow,
  NCol,
  NCard,
  NImage,
  NSkeleton,
  NSpace
} from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()

const plane = ref({
  nombre: '',
  capacidad: null,
  imagen: ''
})

if (route.name.includes('update')) {
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
