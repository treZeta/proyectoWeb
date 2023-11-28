<template>
  <n-space style="padding-top: 2em" justify="center">
    <n-p> Aqui puedes administrar los aviones de la flota </n-p>
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
    id: 'HK9816',
    modelo: 'Boeing 737-400'
  },
  {
    id: 'HK1523X',
    modelo: 'Boeing 737-400'
  },
  {
    id: 'HK2208P',
    modelo: 'Boeing 737-400'
  },
  {
    id: 'HK0912',
    modelo: 'Embraer 195-E2'
  },
  {
    id: 'HK0471',
    modelo: 'Embraer 195-E2'
  },
  {
    id: 'HK1323',
    modelo: 'Boeing 737-400'
  }
]

const pagination = {
  pageSize: 10
}

const createPlane = () => {
  router.push('/backoffice/flota/aviones/crear')
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
      title: 'Identificador',
      key: 'id'
    },
    {
      title: 'Modelo',
      key: 'modelo'
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
