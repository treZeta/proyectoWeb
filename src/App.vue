<template>
  <n-config-provider :theme="lightTheme">
    <n-layout style="height: 100vh;">
      <n-layout-header :theme-overrides="headerThemeOverrides" bordered>
        <header-component></header-component>
      </n-layout-header>
      <n-layout style="height: 100%;" has-sider>
        <n-layout-sider :theme-overrides="siderThemeOverrides" bordered>
          <side-menu-component></side-menu-component>
        </n-layout-sider>
        <n-layout-content>
          <RouterView />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NConfigProvider } from 'naive-ui'
import { lightTheme } from 'naive-ui'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SideMenuComponent from './components/SideMenuComponent.vue';

const headerThemeOverrides = {
  headerBorderColor: '#271960'
}
const siderThemeOverrides = {
  siderBorderColor: '#271960'
}
</script>

<style scoped>
</style>
