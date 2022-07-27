<template>
  <div class="classification">
    <div class="title">文章分类</div>
    <div class="classes">
      <ul>
        <li v-for="(cls, index) in classes" :key="index">
          <a href="">
            {{cls.className}}·············（{{cls.total}}）
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          classes:[
            {
              className:'我的随笔',
              total:0
            },
            {
              className:'我的随笔',
              total:0
            },
            {
              className:'我的随笔',
              total:0
            },
            {
              className:'我的随笔',
              total:0
            },
            {
              className:'我的随笔',
              total:0
            },
            {
              className:'我的随笔',
              total:0
            },
            {
              className:'我的随笔',
              total:0
            },
            
          ]
      }
  },
}
</script>

<style lang="less" scoped>
  .classification{
    width: 250px;
    height: 235px;
    padding: 30px;
    background-color: rgb(21, 23, 40);
    overflow: auto;
    &::-webkit-scrollbar{
      width: 5px;
      // height: 10px;
      background-color: rgb(21, 23, 40);
    }
    &::-webkit-scrollbar-track{
       box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
      border-radius: 10px; 
      background-color:black;  
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;  
      box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
      background-color:#b5b1b1;
    }
    a{
      text-decoration: none;
      color: rgba(155, 155, 171, 0.5);
    }
    .title{
      font-size: 16px;
      font-weight: bold;
      color:rgb(202, 199, 219);
      height: 50px;
    }
      li {
        margin-top: 20px;
      }
  }
</style>