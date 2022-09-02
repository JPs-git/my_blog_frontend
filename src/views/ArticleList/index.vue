<template>
  <div class="list">
    <ul class="outer">
      <li v-for="(year, index) in classifiedArticleList" :key="index">
        <div class="title" v-text="getYear(year[0].pubDate)"></div>
        <ul class="inner">
          <li v-for="(article, index) in year" :key="index">
            <a href="javascript:;" @click="goDetail(article._id)">{{
              article.title
            }}</a>
            <span class="date" v-text="fullDate(article.pubDate)"></span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dateFomat from '@/utils/dateFomat'
export default {
  name: 'ArticleList',
  data() {
    return {}
  },
  computed: {
    ...mapState('article', ['articleList']),

    // 根据文章发布年份分类的二维数组
    classifiedArticleList() {
      let list = this.articleList
      let res = []
      let cru_year
      let arr
      // 此处需要后端返回发布时间按照由近及远的有序数据
      if (list.length) {
        list.forEach((article) => {
          if (dateFomat(article.pubDate).y === cru_year) {
            arr.push(article)
          } else {
            // 与当前年份不同
            res.push((arr = [article]))
            cru_year = dateFomat(article.pubDate).y
          }
        })
      }
      return res
    },
  },
  methods: {
    goDetail(id) {
      this.$router.push({ path: '/article', query: { id } })
    },
    // 输入时间戳 返回格式化日期
    fullDate(timestamp) {
      return dateFomat(timestamp).fullDate
    },
    // 输入时间戳 返回年份
    getYear(timestamp){
      return dateFomat(timestamp).y
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
