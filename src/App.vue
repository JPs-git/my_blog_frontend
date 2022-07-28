<template>
  <div id="app">
    <div class="app-wrap">
      <SideBar class="app-left"/>
      <div class="app-right">
        <TopBar class="app-top"/>
        <div class="app-router">
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
    components: { SideBar, TopBar },   
}
</script>
<style lang="less">
html, body, #app{
  height: 100%;
  background-color: rgb(36,39,59);

}
.app-wrap{
  display: flex;
  height: 100%;
  align-items: start;
 
  .app-left{
    width: 300px;
  }
  .app-right{
    flex-grow: 1;
  }

}
  
</style>
