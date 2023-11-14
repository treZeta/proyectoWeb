<template>
  <div id="layout-saida">
    <n-menu style="height: 100%;" :theme-overrides="menuThemeOverrides" :options="menuOptions"></n-menu>
  </div>
</template>

<script setup>
import { NMenu, NIcon } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { Airport01 } from '@vicons/carbon'
import { FlightTakeoffOutlined } from '@vicons/material'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
    {
        label: () =>
        h(
            RouterLink,
            {
            to: {
                name: 'aeropuertos',
                params: {
                lang: 'en-US'
                }
            }
            },
            { default: () => 'Aeropuertos' }
        ),
        key: 'airports',
        icon: renderIcon(Airport01)
    },
    {
        label: () =>
        h(
            RouterLink,
            {
            to: {
                name: 'vuelos',
                params: {
                lang: 'en-US'
                }
            }
            },
            { default: () => 'Vuelos' }
        ),
        key: 'flights',
        icon: renderIcon(FlightTakeoffOutlined)
    },
]

const menuThemeOverrides = {
    color: '#10004f',
}
</script>

<style lang="scss" scoped>
#layout-saida {
    height: 100%;
}
</style>