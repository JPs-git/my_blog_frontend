<template>
  <div class="comments">
    <div class="wrapper">
      <h1>
        发表评论 <span>{{ errs.context }}</span>
      </h1>
      <textarea v-model="context"></textarea>
      <h2>
        昵称 <span>{{ errs.nickName }}</span>
      </h2>
      <input
        type="text"
        class="name"
        v-model="nickName"
        @blur="checkNickName"
      />
      <br />
      <h2>
        邮箱 <span>{{ errs.email }}</span>
      </h2>
      <input type="text" class="e-mail" v-model="email" @blur="checkEmail" />
      <br />
      <h2>
        链接 <span>{{ errs.linkURL }}</span>
      </h2>
      <input type="text" class="link" v-model="linkURL" @blur="checkURL" />
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
      nickName: '',
      email: '',
      linkURL: '',
      context: '',
      errs: {
        nickName: '',
        email: '',
        linkURL: '',
        context: '',
      },
    }
  },
  methods: {
    async submitComment() {
      // 检查合法性
      await this.checkNickName()
      await this.checkEmail()
      await this.checkURL()
      await validator
        .isNotEmpty(this.context)
        .then(() => (this.errs.context = ''))
        .catch((reason) => (this.errs.context = reason))
      if (
        this.errs.nickName === '' &&
        this.errs.email === '' &&
        this.errs.linkURL === ''
      ) {
        // 发请求
        console.log('ok')
      }
    },
    checkNickName() {
      Promise.all([
        validator.isNotEmpty(this.nickName),
        validator.checkChar(this.nickName),
        validator.checkLength(this.nickName, 3, 10), // 最小3个字符最长10个字符
      ])
        .then(() => {
          this.errs.nickName = ''
        })
        .catch((reason) => (this.errs.nickName = reason))
    },
    checkEmail() {
      Promise.all([
        validator.isNotEmpty(this.email),
        validator.checkEmail(this.email),
      ])
        .then((this.errs.email = ''))
        .catch((reason) => (this.errs.email = reason))
    },
    checkURL() {
      Promise.all([
        validator.isNotEmpty(this.linkURL),
        validator.checkUrl(this.linkURL),
      ])
        .then((this.errs.linkURL = ''))
        .catch((reason) => (this.errs.linkURL = reason))
    },
  },
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
