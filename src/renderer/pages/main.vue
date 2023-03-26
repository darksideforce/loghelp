<template>
  <div>
    <div class="content">
      <slider class="slider"></slider>
    </div>
  </div>
</template>
<script setup lang="ts">
import slider from './slider.vue'
</script>
<style scoped lang="less">
.content{
  width: 100%;
  height: 100vh;
  margin: 0;
  .slider{
    width: 200px;
    height: 100%;
    float: left;
  }
}
</style>
