<template>
  <n-card embedded style="margin: 24px">
    <n-form ref="formRef" :model="airport" :rules="rules">
      <n-form-item path="id" label="Id">
        <n-input v-model:value="flight.id" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="nombre" label="Origen">
        <n-select v-model:value="flight.origin" :options="store.airports" />
      </n-form-item>
      <n-form-item path="nombre" label="Destino">
        <n-select v-model:value="flight.destination" :options="store.airports" />
      </n-form-item>
      <n-form-item path="ubicacion" label="Hora salida">
        <n-date-picker
          v-model:formatted-value="flight.departure"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          clearable
        />
      </n-form-item>
      <n-form-item path="imagen" label="Hora llegada">
        <n-date-picker
          v-model:formatted-value="flight.arrival"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          clearable
        />
      </n-form-item>
      <n-space style="margin-top: 2em" justify="end">
        <n-button type="primary" @click="goBack()">Regresar</n-button>
        <n-button type="success" @click="saveFlight()">Guardar</n-button>
      </n-space>
    </n-form>
  </n-card>
</template>

<script setup>
import { NForm, NButton, NInput, NFormItem, NCard, NSpace, NDatePicker } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { usePlanesStore } from '../../stores/planesStore'

const store = usePlanesStore()
let processModified = false

const router = useRouter()
const flight = ref({
  id: '',
  origin: '',
  destination: '',
  departure: '2007-06-30 12:08:55',
  arrival: '2007-06-30 12:08:55'
})
const goBack = () => {
  router.go(-1)
}

const rules = {
  airport: {
    id: [
      {
        required: true,
        message: 'Ingrese el identificador del aeropuerto',
        trigger: ['input', 'blur']
      }
    ],
    nombre: [
      {
        required: true,
        message: 'Ingresa el nombre del aeropuerto',
        trigger: ['input', 'blur']
      }
    ],
    ubicacion: [
      {
        required: true,
        message: 'Ingresa la ubicación del aeropuerto',
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
  }
}

const saveAirport = () => {
  const newAirport = {
    id: { valor: airport.value.id },
    nombre: airport.value.nombre,
    ubicacion: airport.value.ubicacion,
    imagen: airport.value.imagen
  }
  if (processModified) {
    Store.editAirport(newAirport)
  } else {
    Store.addAirport(newAirport)
  }
  airport.value.id = ''
  airport.value.nombre = ''
  airport.value.ubicacion = ''
  airport.value.imagen = ''
}
</script>

<style></style>
