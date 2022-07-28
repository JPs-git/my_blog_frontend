<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="info">
      <i class="fas fa-eye"></i> {{ info.views}}&nbsp;&nbsp;&nbsp;
      <i class="fas fa-thumbs-up"></i> {{ info.likes}}&nbsp;&nbsp;&nbsp;
      <i class="fas fa-comment-dots"></i> {{ info.comments}}&nbsp;&nbsp;&nbsp;
      <span class="pub-date">{{ info.pubDate}}</span>
    </div>
    <div class="main markdown-body" v-html="mainContent">
    </div>

    

    <div class="btns">
      &nbsp;&nbsp;&nbsp;
      <i class="fas fa-eye"></i>  {{ info.views}}&nbsp;&nbsp;&nbsp;
      <a href=""><i class="fas fa-thumbs-up"></i></a> {{ info.likes}}&nbsp;&nbsp;&nbsp;
      <a href=""><i class="fas fa-comment-dots"></i></a> {{ info.comments}}
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  data() {
    return {
      title: '如何搭建自己的博客',
      info: {
        views: 0,
        likes: 0,
        comments: 0,
        pubDate:'2022-7-27'
      },
      // Markdown字符串
      markdownStr:'## This is h2'
    }
  },
  computed:{
    mainContent(){
      const md = new MarkdownIt()
      return  md.render(this.markdownStr)
    }
  },
}
</script>


<style lang="less">
  @import url(./css/markdown.less);

  .title{
    padding: 30px;
    h1 {
      font-size: 36px;
      text-align: center;
      color: rgb(202, 199, 219);
    }
  }
  .info{
    text-align: center;
    color: rgba(155, 155, 171, 0.5);
  }
  .main{
    padding: 20px;
    font-size: 20px;
    color: rgb(187, 187, 197);
    
  }
.btns{
  color:rgb(96,97,115);
  height: 100px;
  font-size: 20px;
  line-height: 100px;
  box-shadow: 0 0 5px rgba(96,97,115, .3);

  a {
    color:rgb(96,97,115);
    &:hover{
      color: rgb(131, 132, 141);
    }
  }
}
 
  
</style>

