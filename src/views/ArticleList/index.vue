<template>
  <div class="list">
    <ul class="outer">
      <li>
        <div class="title">2 0 2 2</div>
        <ul class="inner">
          <li v-for="(article, index) in articleList" :key="index">
            <a href="javascript:;" @click="goDetail(article._id)">{{ article.title }}</a>
            <span class="date">{{ article.pubDate.slice(0, 10) }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'ArticleList',
  data() {
    return {
    }
  },
  computed:{
    // articleList(){
    //   return this.$store.state.article.articleList
    // },
    ...mapState('article', ['articleList'])
  },
  methods:{
    goDetail(id){
      this.$router.push({path:'/article', query:{ id }})
    }
  },
  mounted() {
    this.$store.dispatch('article/getArticleList')
  },
}
</script>

<style lang="less" scoped>
.list {
  text-align: center;
  font-size: 26px;
  .title {
    font-size: 36px;
    font-weight: bold;
    padding: 30px;
    color: #fff;
  }
  .inner {
    li {
      height: 60px;
    }
    a {
      color: rgb(147, 151, 142);
      line-height: 60px;
    }
    .date {
      font-size: 16px;
      color: rgb(100, 103, 122);
      margin-left: 50px;
    }
  }
}
</style>
