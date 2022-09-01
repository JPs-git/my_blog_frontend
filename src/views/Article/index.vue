<template>
  <div class="article">
    <ArticleContent/>
  </div>
</template>

<script>
import ArticleContent from '@/components/ArticleContent/index.vue'
import Comments from '@/components/Comments/index.vue'

export default {
  name:'Article',
  components:{
    ArticleContent,
    Comments,
}
}
</script>

<style lang="less" scoped>
  .article{
    display: flex;
  }
</style>