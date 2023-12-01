<template>
    <n-card embedded style="margin: 24px">
      <n-form ref="formRef" :model="plane" :rules="rules">
        <n-form-item path="id" label="Identificador">
          <n-input v-model:value="plane.id.valor" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="modelo" label="Modelo">
          <n-select v-model:value="plane.modelo" :options="options" />
        </n-form-item>
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
    NButton,
    NInput,
    NFormItem,
    NCard,
    NSpace
  } from 'naive-ui'
  import { useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue'
  
  const route = useRoute()
  const router = useRouter()
  
  const plane = ref({
    id: '',
    modelo: { valor: '' }
  })
  
  if (route.name.includes('/editar')) {
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
  