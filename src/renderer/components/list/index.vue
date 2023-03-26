<template>
  <div class="wrap">
    <div v-for="item in lists" :class="choosen ? 'list-wrap choosen' : 'list-wrap'" :ref="setItemRef"
      :style="{ '--xPos': x, '--yPos': y }" @click="handleClickListItem">
      <symboldev icon-class="tv" width='30px' height="30px" class="symbol"></symboldev>
      <span :key="item.id" class="list-item-text">{{ item.value }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import listType from './type'

import { ref, defineProps, PropType, onMounted, onBeforeUpdate, onUpdated, computed } from 'vue'
defineProps({
  title: String,
  lists: Array as PropType<listType[]>,
  choosen: Boolean
})
let x = ref('50%')
let y = ref('50%')
let itemRefs: any = []
 
//给每个元素都添加上一个鼠标移动监听事件
onMounted(() => {
  for (let i in itemRefs) {
    itemRefs[i].addEventListener('mouseover', (event: any) => {
        x.value = (event.pageX - itemRefs[i].offsetLeft) + 'px'
        y.value = (event.pageY - itemRefs[i].offsetTop) + 'px'
    })
  }
})
function handleClickListItem() {

}
const setItemRef = (el: any) => {
  itemRefs.push(el)
}
const beforeSize = computed(() => {
  return {

  }
})
</script>
<style scoped lang="less">
.wrap {
  width: 100%;
}

.list-wrap {
  padding: 10px 20px;
  display: flex;
  border-radius: 10px;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  width: calc(100% - 40px);
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background: linear-gradient(90deg, #0162c8; #55e7fc);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  color: black;
  transition: 0.5s;

  .list-item-text {
    position: relative;
    padding-left: 10px;
    z-index: 999;
  }

  .symbol {
    z-index: 999;
  }
}

.list-wrap::before {
  position: absolute;
  content: '';
  left: var(--xPos);
  top: var(--yPos);
  transform: translate(-50%, -50%);
  width: 0px;
  height: 0px;
  background: linear-gradient(90deg, #755bea; #ff72c0);
  border-radius: 50%;
  transition: all 1s;
}

@keyframes animate {
  0% {
    width: 0px;
    height: 0px;
  }

  100% {
    height: 400px;
    width: 400px;
    z-index: 10;
    opacity: 1;
  }
}

.list-wrap:hover::before {
  // animation: animate 0.5s linear;
  height: 400px;
  width: 400px;
  z-index: 10;
}

.list-wrap:hover {
  color: #ffff;
  text-decoration: underline;
}

.choosen {}
</style>
