<template>
  <div class="right-bar">
    <Notice/>
    <Classification/>
  </div>
</template>

<script>
import Classification from '@/components/Classification/index.vue'
import Notice from '@/components/Notice/index.vue'
export default {
  components:{
    Classification, Notice
  }
}
</script>

<style lang="less" scoped>
  
</style>