<template>
  <div id="layout-saida">
    <n-menu
      style="height: 100%"
      :theme-overrides="menuThemeOverrides"
      :options="menuOptions"
    ></n-menu>
  </div>
</template>

<script setup>
import { NMenu, NIcon } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { Airport01 } from '@vicons/carbon'
import {
  FlightTakeoffOutlined,
  AirplaneTicketSharp,
  AirplanemodeActiveSharp
} from '@vicons/material'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: 'Flota',
    key: 'fleet',
    icon: renderIcon(AirplanemodeActiveSharp),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'backoffice/flota/modelos',
                params: {
                  lang: 'en-US'
                }
              }
            },
            { default: () => 'Modelos' }
          ),
        key: ''
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'backoffice/flota/aviones',
                params: {
                  lang: 'en-US'
                }
              }
            },
            { default: () => 'Aviones' }
          ),
        key: 'braise'
      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'backoffice/aeropuertos',
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
            name: 'backoffice/vuelos',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => 'Vuelos' }
      ),
    key: 'flights',
    icon: renderIcon(AirplaneTicketSharp)
  }
]

const menuThemeOverrides = {
  color: '#10004f',
  itemTextColor: '#f1f1f1',
  itemIconColor: '#f1f1f1',
  itemTextColorActive: '#e8114b',
  itemIconColorActive: '#e8114b',
  itemTextColorHover: '#e8114b',
  itemIconColorHover: '#e8114b',
  itemIconColorActiveHover: '#e8114b',
  itemTextColorActiveHover: '#e8114b',
  itemColorActive: 'rgba(167, 61, 63, 0.15)',
  itemTextColorChildActive: '#e8114b',
  itemIconColorChildActive: '#e8114b',
  arrowColorChildActive: '#e8114b',
  arrowColor: '#f1f1f1',
  arrowColorHover: '#e8114b',
  arrowColorChildActiveHover: '#e8114b',
  itemIconColorChildActiveHover: '#e8114b',
  itemTextColorChildActiveHover: '#e8114b'
}
</script>

<style lang="scss" scoped>
#layout-saida {
  height: 100%;
}
</style>
