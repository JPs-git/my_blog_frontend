<template>
  <div id="root">
    <div class="wrapper">
      <div class="title">留言</div>
      <div class="msgList">
        <ul>
          <li v-for="comment in MsgBoard" :key="comment._id">
            <div class="first">
              <div class="avatar"></div>
              <div class="nickname">
                <a href="javascript:;" @click="goOuterSite(comment.linkURL)">{{
                  comment.nickname
                }}</a
                >:
              </div>
            </div>
            <div class="content">
              {{ comment.context }}
              <div class="date">
                {{ pubTime(comment.pub_date) }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 分页器 -->
          <div class="fr page">
            <div class="sui-pagination clearfix">
              <ul>
                <li class="prev disabled">
                  <a href="#">«上一页</a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li class="dotted"><span>...</span></li>
                <li class="next">
                  <a href="#">下一页»</a>
                </li>
              </ul>
              <div><span>共10页&nbsp;</span></div>
            </div>
          </div>
    <Comments />
  </div>
</template>

<script>
import Comments from '@/components/Comments/index.vue'
import { mapState } from 'vuex'
import dateFomat from '@/utils/dateFomat'
export default {
  name: 'MsgBoard',
  components: { Comments },
  computed: {
    ...mapState('comment', ['MsgBoard']),
  },
  methods: {
    // 发布时间
    pubTime(timestamp) {
      return (
        dateFomat(timestamp).fullDate +
        ' ' +
        dateFomat(timestamp).h +
        ':' +
        dateFomat(timestamp).min
      )
    },
    // 确认前往外部网站
    goOuterSite(linkURL){
      if(confirm(`您即将前往外部网站http://${linkURL}，可能存在风险!`)){
        window.open('http://' + linkURL)
      }
    },
    // 刷新页面 并回到顶部
    refreshPage() {
      this.$store.dispatch('comment/getMsgboard')
      this.$bus.$emit('goTop')
    },
  },
  mounted() {
    this.$store.dispatch('comment/getMsgboard')
    this.$bus.$on('refresh_comment', this.refreshPage)
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 800px;
  margin: 0 auto;
  .title {
    color: rgb(173, 181, 189);
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .msgList {
    .first {
      .nickname {
        font-size: 14px;
        color: rgb(108, 110, 112);
        margin-top: 10px;
        a {
          color: rgb(108, 110, 112);
          &:hover{
            text-decoration: underline;
            text-shadow: 0 0 2px rgb(108, 110, 112);
          }
        }
      }
    }
    .content {
      font-size: 18px;
      color: rgb(189, 195, 202);
      border-bottom: 1px solid rgba(142, 148, 154, 0.3);
      margin-top: 20px;
      padding-bottom: 20px;
      .date {
        font-size: 14px;
        color: rgb(149, 153, 156);
        margin-top: 10px;
      }
    }
  }
}
</style>
