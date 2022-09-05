<template>
  <div class="comments clearfix">
    <div class="wrapper">
      <h1>
        发表评论 <span>{{ errs.context }}</span>
      </h1>
      <textarea
        v-model="commentData.context"
        maxlength="200"
        @input="showLimit"
        ref="textarea"
      ></textarea><div class="limit">还可以输入{{ wordsLimit }}/200个字符</div>
      <h2>
        昵称 <span>{{ errs.nickname }}</span>
      </h2>
      <input
        type="text"
        class="name"
        v-model="commentData.nickname"
        @blur="checkNickName"
      />
      <br />
      <h2>
        邮箱 <span>{{ errs.email }}</span>
      </h2>
      <input
        type="text"
        class="e-mail"
        v-model="commentData.email"
        @blur="checkEmail"
      />
      <br />
      <h2>
        链接 <span>{{ errs.linkURL }}</span>
      </h2>
      <input
        type="text"
        class="link"
        v-model="commentData.linkURL"
        @blur="checkURL"
      />
      <a href="javascript:;" class="submit" @click="submitComment">
        发表评论
      </a>
    </div>
  </div>
</template>

<script>
import validator from '@/utils/validator'
export default {
  name: 'Comments',
  data() {
    return {
      commentData: {
        nickname: '',
        email: '',
        linkURL: '',
        context: '',
        comment_type: '',
        article_id: '',
      },
      errs: {
        nickname: '',
        email: '',
        linkURL: '',
        context: '',
      },
      // 文本域剩余可输入字符 初始200
      wordsLimit:200
    }
  },
  methods: {
    async submitComment() {
      // 检查合法性
      await this.checkNickName()
      await this.checkEmail()
      await this.checkURL()
      await validator
        .isNotEmpty(this.commentData.context)
        .then(() => (this.errs.context = ''))
        .catch((reason) => (this.errs.context = reason))
      if (
        this.errs.nickname === '' &&
        this.errs.email === '' &&
        this.errs.linkURL === '' &&
        this.errs.context === ''
      ) {
        // 发请求
        // 设置评论类型
        if (this.$route.path === '/msgboard') {
          this.commentData.comment_type = 'msgboard'
        } else {
          this.commentData.comment_type = 'article'
          this.commentData.article_id = this.$route.query.id
        }
        await this.$store.dispatch('comment/newComment', this.commentData)
        // 同时更新页面 并回到第一页
        this.$bus.$emit('refresh_comment')
        // 刷新评论数
        this.$bus.$emit('refresh_article_content')
      }
    },
    checkNickName() {
      Promise.all([
        validator.isNotEmpty(this.commentData.nickname),
        validator.checkChar(this.commentData.nickname),
        validator.checkLength(this.commentData.nickname, 3, 10), // 最小3个字符最长10个字符
      ])
        .then(() => {
          this.errs.nickname = ''
        })
        .catch((reason) => (this.errs.nickname = reason))
    },
    checkEmail() {
      Promise.all([
        validator.isNotEmpty(this.commentData.email),
        validator.checkEmail(this.commentData.email),
      ])
        .then((this.errs.email = ''))
        .catch((reason) => (this.errs.email = reason))
    },
    checkURL() {
      Promise.all([
        validator.isNotEmpty(this.commentData.linkURL),
        validator.checkUrl(this.commentData.linkURL),
      ])
        .then((this.errs.linkURL = ''))
        .catch((reason) => (this.errs.linkURL = reason))
    },
    // 展示文本域字数限制
    showLimit() {
      let input = this.$refs.textarea.value
      let max_length = 200

      this.wordsLimit = max_length - input.length
    },
    // 将窗口移动至评论
    goToComment(){
      this.$refs.textarea.focus()
    }
  },
  mounted(){
    this.$bus.$on('goToComment', this.goToComment)
  }
}
</script>

<style lang="less" scoped>
.comments {
  width: 100%;
  font-size: 20px;
  .wrapper {
    margin: 0 auto;
    width: 800px;
    h1 {
      color: rgb(173, 181, 189);
      margin: 20px 0;
      span {
        color: red;
        font-size: 16px;
      }
    }
    textarea {
      width: 100%;
      height: 300px;
      border-radius: 5px;
      font-size: 20px;
      background-color: rgb(28, 31, 47);
      color: rgb(173, 181, 189);
    }
    .limit{
      float: right;
      font-size: 13px;
      color: rgba(173, 181, 189, .3);
    }
    input {
      background-color: rgb(28, 31, 47);
      border-radius: 5px;
      width: 100%;
      height: 50px;
      font-size: 18px;
      color: rgb(173, 181, 189);
      // border: 1px solid white;
      border: 1px solid rgb(118, 118, 118);
    }
    h2 {
      margin-top: 20px;
      margin-bottom: 10px;
      color: rgb(173, 181, 189);
      font-size: 16px;
      span {
        color: red;
      }
    }
    .submit {
      display: block;
      width: 100%;
      height: 40px;
      font-size: 16px;
      color: white;
      text-align: center;
      line-height: 40px;
      border-radius: 5px;
      margin-top: 10px;
      background-color: rgb(13, 110, 253);
      &:hover {
        background-color: rgb(11, 94, 215);
      }
    }
  }
}
</style>
