<template>
  <n-space style="padding-top: 2em" justify="center">
    <n-p> Aqui puedes administrar los vuelos activos </n-p>
  </n-space>
  <n-space style="padding: 24px" justify="end">
    <n-button @click="createFlight" type="primary"> + Crear </n-button>
  </n-space>
  <n-layout embedded content-style="padding: 24px;">
    <n-card>
      <n-data-table
        style="margin-top: 2em"
        :theme-overrides="paginationOverrides"
        bordered
        :single-line="false"
        :columns="columns"
        :data="store.flights"
        :pagination="pagination"
      />
    </n-card>
  </n-layout>
</template>

<script setup>
import { h } from 'vue'
import { useRouter } from 'vue-router'
import { NButton, NDataTable, NSpace, NCard, NLayout } from 'naive-ui'
import { useCounterStore } from '@/stores/planesStore.js'

const router = useRouter()

const store = useCounterStore();

const pagination = {
  pageSize: 10
}

const createFlight = () => {
  // router.push('/backoffice/aeropuertos/crear')
  store.createFlight({
      id: '230',
      origin: 'MDE',
      destination: 'BAQ',
      departure: '22/11/23 - 23:39',
      arrival: '22/11/23 - 01:57'
    })
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
      title: 'Origen',
      key: 'origin'
    },
    {
      title: 'Destino',
      key: 'destination'
    },
    {
      title: 'Hora salida',
      key: 'departure'
    },
    {
      title: 'Hora llegada',
      key: 'arrival'
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render(row) {
        return [
          h(
            NButton,
            {
              type: 'warning',
              style: {
                'margin-right': '1em'
              },
              onClick: () => deletePlane(row)
            },
            { default: () => 'Posponer' }
          ),
          h(
            NButton,
            {
              type: 'primary',
              onClick: () => deletePlane(row)
            },
            { default: () => 'Cancelar' }
          )
        ]
      }
    }
  ]
}
const columns = createColumns({ editPlane, deletePlane })
</script>

<style></style>
