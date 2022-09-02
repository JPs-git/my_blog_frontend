<template>
  <div class="article-content">
    <div class="content-title">
      <h1>{{ article.title }}</h1>
    </div>
    <div class="info">
      <i class="fas fa-eye"></i> {{ article.views }}&nbsp;&nbsp;&nbsp;
      <i class="fas fa-thumbs-up"></i> {{ article.likes }}&nbsp;&nbsp;&nbsp;
      <i class="fas fa-comment-dots"></i>
      {{ article.comments }}&nbsp;&nbsp;&nbsp;
      <span class="pub-date">
        发布于 {{ pubDate }}
        </span>
    </div>
    <div
      class="main markdown-body"
      v-html="mainContent(article.mainContent)"
    ></div>

    <div class="btns">
      &nbsp;&nbsp;&nbsp;
      <i class="fas fa-eye"></i> {{ article.views }}&nbsp;&nbsp;&nbsp;
      <a href=""><i class="fas fa-thumbs-up"></i></a>
      {{ article.likes }}&nbsp;&nbsp;&nbsp;
      <a href=""><i class="fas fa-comment-dots"></i></a> {{ article.comments }}
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { mapState } from 'vuex'
import dateFomat from '@/utils/dateFomat'
export default {
  // data() {
  //   return {
  //     title: '如何搭建自己的博客',
  //     info: {
  //       views: 0,
  //       likes: 0,
  //       comments: 0,
  //       pubDate:'2022-7-27'
  //     },
  //     // Markdown字符串
  //     markdownStr:'# This is h1 \n ## This is h2 \n '
  //   }
  // },
  computed: {
    // 文章数据
    ...mapState('article', ['article']),
    pubDate(){
      // 日期格式化
      const date = dateFomat(this.$store.state.article.article.pubDate).fullDate
      const time = dateFomat(this.$store.state.article.article.pubDate).fullTime
      return date + ' ' + time
    }

  },
  methods: {
    // 渲染Markdown
    mainContent(markdown_str) {
      const md = new MarkdownIt()
      if (markdown_str) {
        return md.render(markdown_str)
      }
    },
  },
  beforeMount() {
    // 清除上次数据 否则会闪一下上次的内容
    this.$store.state.article.article = {}
  },
  mounted() {
    this.$store.dispatch('article/getArticleById', this.$route.query.id)
  },
}
</script>

<style lang="less">
@import url(./css/markdown.less);
</style>
<style lang="less" scoped>
.article-content {
  // width: 1000px;
  flex-grow: 1;
}
.content-title {
  padding: 30px;
  h1 {
    font-size: 36px;
    text-align: center;
    color: rgb(202, 199, 219);
  }
}
.info {
  text-align: center;
  color: rgba(155, 155, 171, 0.5);
}
.main {
  height: 380px;
  padding: 20px;
  font-size: 20px;
  color: rgb(187, 187, 197);
}
.btns {
  color: rgb(96, 97, 115);
  height: 100px;
  font-size: 20px;
  line-height: 100px;
  box-shadow: 0 0 5px rgba(96, 97, 115, 0.3);

  a {
    color: rgb(96, 97, 115);
    &:hover {
      color: rgb(131, 132, 141);
    }
  }
}
</style>
