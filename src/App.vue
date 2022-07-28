<template>
  <div id="app">
    <div class="wrap">
      <SideBar class="left"/>
      <div class="right">
        <TopBar class="top"/>
        <div class="router">
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
    // beforeCreate(){
    //   const body = document.querySelector('body')
    //   console.log(body.style.height)
    // }
    
}
</script>
<style lang="less">
html, body, #app{
  height: 100%;
  background-color: rgb(36,39,59);

}
.wrap{
  display: flex;
  height: 100%;
  align-items: start;
 
  
  .right{
    flex-grow: 1;
  }

}
  
</style>
