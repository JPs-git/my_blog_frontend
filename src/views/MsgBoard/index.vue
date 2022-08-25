<template>
  <div>
    <div class="wrapper">
      <div class="title">留言</div>
      <div class="msgList">
        <ul>
          <li>
            <div class="first">
              <div class="avatar"></div>
              <div class="nickname">jack:</div>
            </div>
            <div class="content">
              afadfasdfsdfasenmlliw
              <div class="date">
                2022-08-23 20:20
              </div>
            </div>
          </li>
          <li>
            <div class="first">
              <div class="avatar"></div>
              <div class="nickname">jack:</div>
            </div>
            <div class="content">
              afadfasdfsdfasenmlliw
              <div class="date">
                2022-08-23 20:20
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <Comments />
  </div>
</template>

<script>
import Comments from '@/components/Comments/index.vue'

export default {
  components: { Comments },
}
</script>

<style lang="less" scoped>
  .wrapper{
    width: 800px;
    margin: 0 auto;
    .title {
      color: rgb(173, 181, 189);
      font-size: 20px;
      margin-top: 20px;
    }
    .msgList{
      .first{
        .nickname{
          font-size: 18px;
          color: rgb(189, 195, 202);
          margin-top: 10px;
        }
      }
      .content{
        font-size: 18px;
        color: rgb(189, 195, 202);
        border-bottom: 1px solid rgba(142, 148, 154, .3);
        margin-top: 20px;
        padding-bottom: 20px;
        .date{
          font-size: 14px;
          color:rgb(149, 153, 156);
          margin-top: 10px;
        }
      }
    }
  }

</style>
