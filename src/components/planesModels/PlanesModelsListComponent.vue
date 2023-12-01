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
        :data="store.planesModels"
        :pagination="pagination"
      />
    </n-card>
  </n-layout>
</template>

<script setup>
import { h } from 'vue';
import { RouterLink, useRouter } from 'vue-router'
import { NButton, NDataTable, NSpace, NCard, NLayout, NImage } from 'naive-ui'
import { usePlanesStore } from '@/stores/planesStore.js'

const store = usePlanesStore();

const router = useRouter();

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
const createColumns = () => {
  return [
    {
      title: 'Nombre',
      key: 'nombre.valor'
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
              to: `/backoffice/flota/modelos/editar/${row.nombre.valor}`
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
          ]
      }
    }
  ]
}
const columns = createColumns({ editPlane, deletePlane })
</script>

<style></style>
