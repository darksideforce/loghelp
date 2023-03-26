<template>
  <svg class="icon" aria-hidden="true" :style="`width:${width};height:${height}`">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script setup lang="ts">
import { computed, defineProps, } from 'vue'

const props = defineProps({
  iconClass: {
    type: String,
    required: true
  },
  width:{
    type:String,
    required:true,
    default:'1em'
  },
  height:{
    type:String,
    required:true,
    default:'1em'
  }
})
const iconName = computed(function () {
  return `#icon-${props.iconClass}`
})

</script>
<style scoped lang="less">
.icon {

  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
