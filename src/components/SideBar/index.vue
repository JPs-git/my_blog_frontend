<template>
  <div class="left-bar">
      <a href="#" class="logo">C N B L O G</a>

      <div class="menu">
        <div class="menu-title">MENU</div>
        <ul>
          <li><a href=""><i class="fas fa-home"></i> 首页</a></li>
          <li><a href=""><i class="fas fa-book"></i> 新随笔</a></li>
          <li><a href=""><i class="fas fa-mail-bulk"></i> 联系</a></li>
          <li><a href=""><i class="fas fa-wifi"></i> 订阅</a></li>
          <li><a href=""><i class="fas fa-cog"></i> 管理</a></li>
        </ul>
      </div>
      <div class="favorite">
        <div class="favorite-title">
          FAVORITE
        </div>
        <ul>
          <li><a href="">友链</a></li>
          <li><a href="">留言板</a></li>
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
    background-color: rgb(@main-color);
    color: rgb(@content-color);
    .logo{
      display: block;
      height: 100px;
      text-align: center;
      line-height: 100px;
      font-size: 20px;
      font-weight: bold;
      color: white;
    }
    .menu, .favorite{
      margin-left: 30px;
    }
    .menu .menu-title{
      margin-bottom: 50px;
    }
    .favorite{
      margin-top: 80px;
    }
    .my-git{
      // height: 30px;
      margin-top: 180px;
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