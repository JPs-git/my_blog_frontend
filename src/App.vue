<template>
  <div id="app">
    <div class="wrap">
      <SideBar class="left"/>
      <div class="right">
        <TopBar class="top"/>
        <div class="banner">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar/index.vue'
import TopBar from '@/components/TopBar/index.vue'

export default {
    components: { SideBar, TopBar }
}
</script>
<style lang="less" scoped>
.wrap{
  display: flex;
  height: 100%;
  background-color: rgb(36,39,59);
  .left{
    display: fixed;
  }
  .right{
    flex-grow: 1;
    .top{
      align-self: start;
    }

  }
}
  
</style>
