<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="lightTheme">
    <RouterView />
  </n-config-provider>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NConfigProvider } from 'naive-ui'
import { lightTheme } from 'naive-ui'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SideMenuComponent from './components/SideMenuComponent.vue'

const headerThemeOverrides = {
  headerBorderColor: '#271960'
}
const siderThemeOverrides = {
  siderBorderColor: '#271960'
}

const themeOverrides = {
  Pagination: {
    itemTextColorActive: '#e8114b',
    itemBorderActive: '1px solid #e8114b'
  },
  "Button": {
    "colorPrimary": "#e8114bFF",
    "colorHoverPrimary": "#FB0245FF",
    "colorPressedPrimary": "#B80C3AFF",
    "colorFocusPrimary": "#e8114bFF",
    "colorDisabledPrimary": "#D56080FF",
    "textColorTextPrimary": "#e8114bFF",
    "textColorTextHoverPrimary": "#D06481FF",
    "textColorTextPressedPrimary": "#BF506EFF",
    "textColorTextFocusPrimary": "#E07793FF",
    "textColorGhostPrimary": "#e8114bFF",
    "textColorGhostHoverPrimary": "#DA6E8BFF",
    "textColorGhostPressedPrimary": "#CC5C7AFF",
    "textColorGhostFocusPrimary": "#DD6485FF",
    "textColorGhostDisabledPrimary": "#e8114bFF",
    "rippleColorPrimary": "#e8114bFF",
    "borderPrimary": "1px solid #e8114b",
    "borderHoverPrimary": "1px solid #FB0245FF",
    "borderPressedPrimary": "1px solid #B80C3AFF",
    "borderFocusPrimary": "1px solid #E8114BFF",
    "borderDisabledPrimary": "1px solid #D56080FF"
  }
}
</script>

<style scoped></style>
