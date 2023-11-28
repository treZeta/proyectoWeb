<template>
  <n-space style="padding-top: 2em;" justify="center">
    <n-p> Aqui puedes administrar los modelos de aviones de la flota </n-p>
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
import { h } from 'vue';
import { RouterLink, useRouter } from 'vue-router'
import { NButton, NDataTable, NSpace, NCard, NLayout, NImage } from 'naive-ui'

const router = useRouter();

const data = [
  {
    nombre: 'Boeing 737-400',
    asientos: '90',
    imagen:
      'https://images.aircharterservice.com/global/aircraft-guide/group-charter/boeing-b737-400-800-900-1.jpg'
  },
  {
    nombre: 'Embraer 195-E2',
    asientos: '40',
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wider%C3%B8e%2C_LN-WEA%2C_Embraer_E190-E2_%40_HEL.jpg/1200px-Wider%C3%B8e%2C_LN-WEA%2C_Embraer_E190-E2_%40_HEL.jpg'
  }
]

const pagination = {
  pageSize: 10
}

const createPlane = () => {
  router.push('/backoffice/flota/modelos/crear')
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
      title: 'Nombre',
      key: 'nombre'
    },
    {
      title: 'Asientos',
      key: 'asientos'
    },
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
      title: 'Acciones',
      key: 'acciones',
      render(row) {
        return [
          h(
            RouterLink,
            {
              to: 'backoffice/flota/modelos/crear'
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
