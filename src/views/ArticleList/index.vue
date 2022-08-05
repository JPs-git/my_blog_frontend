<template>
  <div class="list">
    <ul class="outer">
      <li>
        <div class="title">2 0 2 2</div>
        <ul class="inner">
          <li>
            <a href="javascript:;">2022年秋招记录</a>
            <span class="date">2022-8-4</span>
          </li>
           <li>
            <a href="javascript:;">2022年秋招记录</a>
            <span class="date">2022-8-4</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .list{
    text-align: center;
    font-size: 26px;
    .title{
      font-size: 36px;
      font-weight: bold;
      padding:30px;
      color: #fff
    }
    .inner{
      li {
        height: 60px;

      }
      a {
       color: rgb(147,151,142);
       line-height: 60px;
      }
      .date{
        font-size: 16px;
        color: rgb(100,103,122);
        margin-left: 50px;
      }
    }
    
  }
</style>