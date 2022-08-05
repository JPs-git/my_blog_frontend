<template>
  <div class="comments">
    <div class="wrapper">
      <h1>发表评论</h1>
      <textarea v-model="context"></textarea>
      <h2>昵称</h2>
      <input type="text" class="name" v-model="nickName"> <br>
      <h2>邮箱</h2>
      <input type="text" class="e-mail" v-model="email"> <br>
      <h2>链接</h2>
      <input type="text" class="link" v-model="linkURL">
      <a href="javascript:;"  class="submit" @click="submitComment">
        发表评论
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'Comments',
  data(){
      return{
        nickName:'',
        email:'',
        linkURL:'',
        context:''
      }
  },
  methods:{
    submitComment(){
      
    }
  }
}
</script>

<style lang="less" scoped>
  .comments {
    width: 100%;
    font-size: 20px;
    .wrapper{
      margin: 0 auto;
      width: 800px;
      h1 {
        color: rgb(173,181,189);
        margin: 20px 0;
      }
      textarea {
        width: 100%;
        height: 300px;
        border-radius: 5px;
        font-size: 20px;
        background-color: rgb(28, 31, 47);
        color: rgb(173,181,189);
      }
      input {
        background-color: rgb(28, 31, 47);
        border-radius: 5px;
        width: 100%;
        height: 50px;
        font-size: 18px;
        color: rgb(173,181,189);
        // border: 1px solid white;
        border: 1px solid rgb(118,118,118);
       
      }
      h2{
        margin-top: 20px;
        margin-bottom: 10px;
        color: rgb(173,181,189);
        font-size: 16px;
      }
      .submit{
        display: block;
        width: 100%;
        height: 40px;
        font-size: 16px;
        color: white;
        text-align: center;
        line-height: 40px;
        border-radius: 5px;
        margin-top: 10px;
        background-color: rgb(13,110,253);
        &:hover {
          background-color: rgb(11,94,215);
        }
      }
    }
    
  }
</style>