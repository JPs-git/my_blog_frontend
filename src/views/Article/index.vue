<template>
  <div>
    <div class="article">
    <ArticleContent/>
    </div>
    <FullComment/>
  </div>
 
</template>

<script>
import ArticleContent from '@/components/ArticleContent/index.vue'
import FullComment from '@/components/FullComment/index.vue'

export default {
  name:'Article',
  components:{
    ArticleContent,
    FullComment,
}
}
</script>

<style lang="less" scoped>
  .article{
    display: flex;
  }
</style>