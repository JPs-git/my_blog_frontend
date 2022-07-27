<template>
  <div class="banner">
    <div class="top-img"></div>
    <div class="btm"></div>
    <div class="avatar-wrapper">
      <div class="avatar">
        <img src="@/assets/img/avatar.jpg" alt="头像">
      </div>
      <div class="Id">
        Dante
        <div class="sign">
          {{ sign }}
        </div>
      </div>
    </div>
    
  </div>  
</template>

<script>
export default {
  data(){
      return{
          sign:'这是我的个性签名~',
      }
  },

}
</script>

<style lang="less" scoped>
  .banner{
    // width: 100%;
    position: relative;
    .top-img{
      height: 280px;
      background: url(@/assets/img/background_01.jpg) ;
      background-size: cover;
    }
    .btm{
      height: 100px;
      background-color: rgb(21,23,40);
    }
    .avatar-wrapper{
      position: absolute;
      bottom: 30px;
      left: 20px;
      display: flex;
      align-items: start;
      .avatar{
        width: 150px;
        height: 150px;
        border: 2px solid rgb(21,23,40);
        border-radius: 100px;
        overflow: hidden;
        img{
          width: 150px;
          height: 150px;
        }
      }
      .Id{
        color: white;
        font-size: 25px;
        margin-top: 30px;
        margin-left: 30px;
        text-shadow: 0 0 5px black;
        .sign{
          font-size: 14px;
          color: rgb(178, 181, 176);
          margin-top: 10px;
        }
      }
    }
  }
</style>