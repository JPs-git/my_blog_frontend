<template>
  <div class="Home">
    <div class="main">
      <Banner/>
      <div class="recommend">
        <Recommend/>
      </div>
    </div>
    <div class="right">
      <RightBar/>
    </div>
    
  </div>
</template>

<script>
import Banner from '@/components/Banner/index.vue'
import Recommend from '@/components/Recommend/index.vue'
import RightBar from '@/components/RightBar/index.vue'

export default {
  components:{
    Banner, Recommend, RightBar
  }
}
</script>

<style lang="less" scoped>
  .Home{
    display: flex;
    justify-content: space-between;
 
    .main{
      margin-top: 30px;
      margin-left: 30px;
      // width: 1000px;
      .recommend{
        margin-top: 30px;
      }
    }
  }
</style>