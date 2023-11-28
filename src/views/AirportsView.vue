<template>
  <n-space justify="center">
    <n-h2>Aeropuertos</n-h2>
  </n-space>
  <router-view></router-view>
</template>

<script setup>
import { NH2, NP, NDataTable, NImage, NSpace, NLayout, NButton } from 'naive-ui'
import { RouterLink, RouterView } from 'vue-router'
import { h } from 'vue'
</script>

<style lang="scss" scoped></style>
