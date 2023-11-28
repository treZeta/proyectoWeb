<template>
  <n-space style="padding-top: 2em" justify="center">
    <n-p> Aqui puedes administrar los aeropuertos de operación de la aerolinea </n-p>
  </n-space>
  <n-space style="padding: 24px" justify="end">
    <n-button @click="createPlane" type="primary"> + Crear </n-button>
  </n-space>
  <n-layout embedded content-style="padding: 24px;">
    <n-card>
      <n-data-table
        style="margin-top: 2em"
        :theme-overrides="paginationOverrides"
        bordered
        :single-line="false"
        :columns="columns"
        :data="data"
        :pagination="pagination"
      />
    </n-card>
  </n-layout>
</template>

<script setup>
import { h } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { NButton, NDataTable, NSpace, NCard, NLayout, NImage } from 'naive-ui'

const router = useRouter()

const data = [
  {
    id: 'MDE',
    nombre: 'Jose Maria Cordova',
    ubicacion: 'Colombia, Antioquia, Medellín',
    imagen: 'https://s28477.pcdn.co/wp-content/uploads/2020/05/MDE_1-984x554.jpg'
  },
  {
    id: 'BOG',
    nombre: 'El dorado',
    ubicacion: 'Colombia, Cundinamarca, Bogota',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/96/El-dorado-from-air.jpg'
  },
  {
    id: 'BAQ',
    nombre: 'Ernesto Cortissoz',
    ubicacion: 'Colombia, Atlantico, Barranquilla',
    imagen: 'https://files.rcnradio.com/public/2021-10/whatsapp_image_2021-10-06_at_10.48.39_am_1_0.jpeg?VersionId=yzkFcs32yOgd8wCIg_WfSYcjIoeaeHJm'
  }
]

const pagination = {
  pageSize: 10
}

const createPlane = () => {
  router.push('/backoffice/aeropuertos/crear')
}

const deletePlane = (row) => {
  console.log(`deleting.. ${row}`)
  //wa
}
const editPlane = (row) => {
  console.log(`editing.. ${row}`)
  //wa
}
const createColumns = ({ updatePlane, deletePlane }) => {
  return [
    {
      title: 'Imagen',
      key: 'imagen',
      render(row) {
        return h(NImage, {
          width: 100,
          src: row.imagen
        })
      }
    },
    {
      title: 'Identificador',
      key: 'id'
    },
    {
      title: 'Nombre',
      key: 'nombre'
    },
    {
      title: 'Ubicacion',
      key: 'ubicacion'
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render(row) {
        return [
          h(
            RouterLink,
            {
              to: '/flota/aviones/crear'
            },
            [
              h(
                NButton,
                {
                  type: 'primary',
                  secondary: 'true',
                  onClick: () => editPlane(row),
                  style: {
                    'margin-right': '1em'
                  }
                },
                { default: () => 'Editar' }
              )
            ]
          ),
          h(
            NButton,
            {
              type: 'primary',
              ghost: 'true',
              onClick: () => deletePlane(row)
            },
            { default: () => 'Eliminar' }
          )
        ]
      }
    }
  ]
}
const columns = createColumns({ editPlane, deletePlane })
</script>

<style></style>
