<template>
    <n-card embedded style="margin: 24px">
      <n-form ref="formRef" :model="airport" :rules="rules">
        <n-form-item path="id" label="Id">
          <n-input v-model:value="airport.id" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="nombre" label="Nombre">
          <n-input v-model:value="airport.nombre" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="ubicacion" label="Ubicacion">
          <n-input type="text" v-model:value="airport.ubicacion"></n-input>
        </n-form-item>
        <n-form-item path="imagen" label="Imagen">
          <n-input type="text" v-model:value="airport.imagen"></n-input>
        </n-form-item>
        <n-space justify="center">
          <n-image width="600" height="300" alt="imagen de referencia no carga/ingresada" lazy :src="airport.imagen">
          </n-image>
        </n-space>
        <n-space style="margin-top: 2em" justify="end">
          <n-button type="primary" @click="goBack()">Regresar</n-button>
          <n-button type="success" @click="saveAirport()">Guardar</n-button>
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
  import {ref} from 'vue'
  import {usePlanesStore} from "../../stores/planesStore"

  const Store = usePlanesStore();
  const route = useRoute()
  let processModified = false;
  
  const router = useRouter()
  const airport = ref({
    id: "",
    nombre: "",
    ubicacion: "",
    imagen: ""
  })
  const goBack = () => {
    router.go(-1)
  }
  
  if (route.name.includes('editar')) {
    const airportId = route.params.id
    const editAirport = Store.findAirport(airportId);
    airport.value.id = editAirport.id.valor
    airport.value.nombre = editAirport.nombre
    airport.value.ubicacion = editAirport.ubicacion
    airport.value.imagen = editAirport.imagen
    processModified = true;
  }

  const rules = {
    airport: {
      id: [
        {
          required: true,
          message: 'Ingrese el identificador del aeropuerto',
          trigger:  ['input', 'blur']
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

  const saveAirport = () =>{
    const newAirport = {id: {valor: airport.value.id},
      nombre: airport.value.nombre,
      ubicacion: airport.value.ubicacion,
      imagen: airport.value.imagen
    };
    if(processModified){
      Store.editAirport(newAirport)
    }else{
      Store.addAirport(newAirport)
    }
    airport.value.id = ""
    airport.value.nombre = ""
    airport.value.ubicacion = ""
    airport.value.imagen = ""
   
  }
  </script>
  
  <style></style>