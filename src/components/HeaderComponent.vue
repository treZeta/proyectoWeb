<template>
    <div id="layout-heada">
        <n-space style="height: 100%;" justify="space-around" align="center">
            <n-image width="200" src="https://s.latamairlines.com/icons/design-system/logos/panamericanos2023.svg"></n-image>
            <n-button :theme-overrides="buttonThemeOverrides" strong secondary type="primary" round>Iniciar Sesion</n-button>
        </n-space>
    </div>
</template>

<script setup>
import { NMenu, NImage, NIcon, NButton, NSpace } from 'naive-ui'
import { h } from 'vue'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuThemeOverrides = {
    color: '#10004f',
    headerColor: '#10004f',
    itemTextColor: '#f1f1f1'
}

const buttonThemeOverrides = { 
    textColor: '#f1f1f1',
    colorPrimary: '#e8114b',
    textColorPrimary: '#f1f1f1'
}

const menuOptions = [
  
]
</script>

<style lang="scss" scoped>
#layout-heada {
    height: 100%;
    background: #10004f;
}
</style>>