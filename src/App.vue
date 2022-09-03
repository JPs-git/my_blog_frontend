<template>
  <div id="app">
    <div class="app-wrap">
      <SideBar class="app-left" />
      <div class="app-right">
        <TopBar class="app-top" />
        <div class="app-router" ref="router">
          <router-view />
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
  methods:{
    goTop(){
      this.$refs.router.scrollTop = 0
    }
  },
  mounted(){
    this.$bus.$on('goTop',this.goTop)
  }
}
</script>
<style lang="less">
html,
body,
#app {
  height: 100%;
  background-color: rgb(36, 39, 59);
}
.app-wrap {
  display: flex;
  height: 100%;
  align-items: start;

  .app-left {
    width: 300px;
  }
  .app-right {
    flex-grow: 1;
  }
  .app-router {
    height: 630px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
      // height: 10px;
      background-color: rgb(21, 23, 40);
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: black;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #b5b1b1;
    }
  }
}
</style>
