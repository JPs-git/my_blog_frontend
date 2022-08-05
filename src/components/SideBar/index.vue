<template>
  <div class="left-bar">
      <a href="javascript:;" class="logo" @click="goIndex"><h1>C N B L O G</h1></a>

      <div class="menu">
        <div class="menu-title">MENU</div>
        <ul>
          <li><a href="javascript:;" @click="switchRoute('/')"><i class="fas fa-home"></i> 首页</a></li>
          <li><a href="javascript:;" @click="switchRoute('list')"><i class="fas fa-book"></i> 文章</a></li>
          <li><a href="javascript:;" @click="switchRoute('contact')"><i class="fas fa-mail-bulk"></i> 联系</a></li>
          <li><a href="javascript:;" @click="switchRoute('subscribe')"><i class="fas fa-wifi"></i> 订阅</a></li>
          <!-- <li><a href="javascript:;"><i class="fas fa-cog"></i> 管理</a></li> -->
        </ul>
      </div>
      <div class="favorite">
        <div class="favorite-title">
          FAVORITE
        </div>
        <ul>
          <li><a href="javascript:;">友链</a></li>
          <li><a href="javascript:;" @click="switchRoute('msgboard')">留言板</a></li>
        </ul>
      </div>
      <div class="my-git">
        <i class="fas fa-github"></i>
        <a href="">Fork me on GitHub</a> 
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    switchRoute(path){
      this.$router.push(path)
    },
    goList(){
      this.$router.push({path:'/list'})
    },
    goIndex(){
      this.$router.push('/')
    },
    goContact(){
      this.$router
    }
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
@main-color:21,23,40;
@content-color: 92,94,110;

  .left-bar{
    width: 300px;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(@main-color);
    color: rgb(@content-color);
    .logo{
      // width: 300px;
      display: block;
      height: 100px;
      text-align: center;
      line-height: 100px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      &:hover h1{
        text-shadow: 0 0 10px white;
      }
    }
    .menu, .favorite{
      margin-left: 30px;
    }
    .menu{
      height: 400px;
    }
    .my-git{
      // margin-top: 180px;
      margin-top: 140px;
      height: 50px;
      padding: 20px;
      border-top: 1px solid rgb(@content-color);
    }
    li{
      margin-top: 30px;
      font-size: 14px;
    }
    a {
      color: rgb(147,151,142);
    }
    i {
      margin-right: 5px;
    }
    .fa-home{
      color: rgb(0,209,178);
    }
    .fa-book{
      color: rgb(231,51,159);
    }
    .fa-mail-bulk{
      color: rgb(72,199,116);
    }
    .fa-wifi{
      color: rgb(255,210,87);
    }
    .fa-cog{
      color: rgb(0,209,178);
    }
  }

</style>