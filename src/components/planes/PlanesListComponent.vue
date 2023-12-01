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
        :data="store.planes"
        :pagination="pagination"
      />
    </n-card>
  </n-layout>
</template>

<script setup>
import { h } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { NButton, NDataTable, NSpace, NCard, NLayout } from 'naive-ui'
import { usePlanesStore } from '@/stores/planesStore.js'

const store = usePlanesStore();

const router = useRouter()

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
const createColumns = () => {
  return [
    {
      title: 'Identificador',
      key: 'id'
    },
    {
      title: 'Modelo',
      key: 'modelo.valor'
    }
  ]
}
const columns = createColumns({ editPlane, deletePlane })
</script>

<style></style>
