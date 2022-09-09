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
      <span class="pub-date"> 发布于 {{ pubDate }} </span>
    </div>
    <div
      class="main markdown-body"
      v-html="mainContent(article.mainContent)"
    ></div>

    <div class="btns">
      &nbsp;&nbsp;&nbsp;
      <i class="fas fa-eye"></i> {{ article.views }}&nbsp;&nbsp;&nbsp;
      <a href="javascript:;" @click="clickLike" :title="likes_title"
        ><i class="fas fa-thumbs-up"></i
      ></a>
      {{ likes }}&nbsp;&nbsp;&nbsp;
      <a href="javascript:;" @click="goToComment" title="评论"
        ><i class="fas fa-comment-dots"></i
      ></a>
      {{ article.comments }}
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { mapState } from 'vuex'
import dateFomat from '@/utils/dateFomat'
export default {
  data() {
    return {
      is_like_active: false,
    }
  },
  computed: {
    // 文章数据
    ...mapState('article', ['article']),
    pubDate() {
      // 日期格式化
      const date = dateFomat(this.$store.state.article.article.pubDate).fullDate
      const time = dateFomat(this.$store.state.article.article.pubDate).fullTime
      return date + ' ' + time
    },
    likes() {
      return this.is_like_active ? this.article.likes + 1 : this.article.likes
    },
    // 点赞按钮的提示
    likes_title(){
      return this.is_like_active ? '取消点赞': '点个赞！'
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
    // 刷新页面
    refreshPage() {
      this.$store.dispatch('article/getArticleById', this.$route.query.id)
    },
    // 跳转窗口至评论
    goToComment() {
      this.$bus.$emit('goToComment')
    },
    // 点赞
    clickLike(e) {
      const el = e.target.parentNode
      // 未激活
      el.classList.toggle('active')
      // 取消点赞
      if (el.className.indexOf('active') === -1) {
        this.$store.dispatch('article/toggleLike', {
          id: this.$route.query.id,
          like: false,
        })
        this.is_like_active = false
      } else {
        // 点赞
        this.$store.dispatch('article/toggleLike', {
          id: this.$route.query.id,
          like: true,
        })
        this.is_like_active = true
      }
    },
  },
  beforeMount() {
    // 清除上次数据 否则会闪一下上次的内容
    this.$store.state.article.article = {}
  },
  mounted() {
    this.refreshPage()
    this.$bus.$on('refresh_article_content', this.refreshPage)
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
    &.active {
      color: rgb(131, 132, 141);
    }
  }
}
</style>
