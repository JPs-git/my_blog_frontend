<template>
  <div>
    <ArticleContent/>
    <Comments/>
  </div>
</template>

<script>
import ArticleContent from '@/components/ArticleContent/index.vue'
import Comments from '@/components/Comments/index.vue'
export default {
  components:{
    ArticleContent,
    Comments,
}
}
</script>
