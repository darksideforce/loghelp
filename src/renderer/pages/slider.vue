<template>
  <div class="content">
    <div class="title">
      <symboldev icon-class="tv" width='50px' height="50px"></symboldev>
      <div class="title-left">
        <span class="title-text">卡片开发工具</span>
        <small class="title-text-small">日志查看</small>
      </div>
    </div>
    <list :title="title" :lists="lists" @list-item-click="listItemClcik"></list>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import list from '../components/list/index.vue'
import listType from "../components/list/type";
const title = ref('卡片开发工具')
const lists = ref([
  {
    id: 1,
    value: '当前命令行',
    choosen: false
  },
  {
    id: 2,
    value: '当前命令行',
    choosen: false
  },
  {
    id: 3,
    value: '当前命令行',
    choosen: false
  },
  {
    id: 4,
    value: '当前命令行',
    choosen: false
  },
  {
    id: 5,
    value: '当前命令行',
    choosen: false
  },
  {
    id: 6,
    value: '当前命令行',
    choosen: false
  }
])
const listItemClcik = (item: listType) => {

  try {
    for (let i = 0; i < lists.value.length; i++) {
      if (lists.value[i].id === item.id) {
        lists.value[i].choosen = true
      }
      else {
        lists.value[i].choosen = false
      }
    }
    console.log(lists.value)
  }
  catch (e) {
    console.log(e)
  }
}
</script>
<style scoped lang="less">
.content {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f2f2f2;
  color: black;
  align-items: center;

  .title {
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;

    .title-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 10px;

      .title-text {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}</style>
