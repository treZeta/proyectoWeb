<template>
    <div id="layout-heada">
        <n-space justify="space-around">
            <n-image style="margin-top: 0.70em;" width="200" src="https://s.latamairlines.com/icons/design-system/logos/panamericanos2023.svg"></n-image>
            <n-button style="margin-top: 0.7em" strong secondary round>Iniciar Sesion</n-button>
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
    headerColor: '#10004f'
}

const buttonThemeOverrides = { 
    colorPrimary: '#e8114b'
}

const menuOptions = [
  
]
</script>

<style lang="scss" scoped>
#layout-heada {
    background: #10004f;
}
</style>>