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
              <p>
                {{ comment.context }}
              </p>
              <div class="date">
                {{ pubTime(comment.pub_date) }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 分页器 -->
      <div class="fr page clearfix">
        <div class="sui-pagination clearfix">
          <ul @click="switchPage">
            <li class="prev disabled" ref="prev">
              <a href="javascript:;">«上一页</a>
            </li>
            <li
              v-for="(page, index) in total > 5 ? 5 : total"
              :key="index"
              :class="{active: skip  === index}"
            >
              <a href="javascript:;">{{ page }}</a>
            </li>

            <li class="dotted" v-if="total > 5"><span>...</span></li>
            <li class="next" ref="next">
              <a href="javascript:;" >下一页»</a>
            </li>
          </ul>
          <div>
            <span>共{{ total }}页&nbsp;</span>
          </div>
        </div>
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
  name: 'FullComment',
  components: { Comments },
  data(){
    return {
      skip:0
    }
  },
  computed: {
    ...mapState('comment', ['MsgBoard', 'total']),
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
    goOuterSite(linkURL) {
      if (confirm(`您即将前往外部网站http://${linkURL}，可能存在风险!`)) {
        window.open('http://' + linkURL)
      }
    },
    // 刷新页面 并回到顶部
    refreshPage() {
      this.$store.dispatch('comment/getMsgboard', this.skip)
      this.$bus.$emit('goTop')
    },
    // 刷新页面同时返回第一页
    refreshAndGoPageOne(){
      this.skip = 0
      this.refreshPage()
    },
    // 切换分页
    switchPage(e){
      const el = e.target.parentNode
      
      // 修改参数重发请求
      // 点击的是上一页
      if(el.className.indexOf('prev') !== -1 ){
        // 没有禁用
        if(el.className.indexOf('disabled') === -1){
          this.skip --
          this.refreshPage()
        }
      // 点击的是下一页
      }else if(el.className.indexOf('next') !== -1){
        // 没有禁用
        if(el.className.indexOf('disabled') === -1){
          this.skip ++
          this.refreshPage()
        }
      // 点击的是页码
      }else if(e.target){
        // 不是当前活动项
        if(el.className.indexOf('active') === -1){
          this.skip = Number(e.target.innerHTML) - 1
          this.refreshPage()
        }
      }

      // 判断是否禁用上一页/下一页
      //先清除
      this.$refs.prev.classList.remove('disabled')
      this.$refs.next.classList.remove('disabled')
      
      // 已经是第一页则禁用上一页
      if(this.skip === 0){
        this.$refs.prev.classList.add('disabled')
      }
      // 已经是最后一页则禁用下一页
      if(this.skip === this.total  - 1){
        this.$refs.next.classList.add('disabled')
      }
    }
  },
  mounted() {
    this.refreshPage()
    this.$bus.$on('refresh_comment', this.refreshAndGoPageOne)
  },
}
</script>

<style lang="less" scoped>
@deep_backgrd_color:rgb(28,31,47);
@light_backgrd_color:rgb(36,39,59);
@light_font_color:rgb(149, 153, 156);
@light_border_color:rgba(142, 148, 154, 0.3);
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
          &:hover {
            text-decoration: underline;
            text-shadow: 0 0 2px rgb(108, 110, 112);
          }
        }
      }
    }
    .content {
      p{
        word-wrap: break-word;
        word-break: break-all;
      }
      font-size: 18px;
      color: rgb(189, 195, 202);
      border-bottom: 1px solid rgba(142, 148, 154, 0.3);
      margin-top: 20px;
      padding-bottom: 20px;
      overflow:wrap;
      .date {
        font-size: 14px;
        color: rgb(149, 153, 156);
        margin-top: 10px;
      }
    }
  }
  .page {
    width: 733px;
    height: 66px;
    overflow: hidden;
    margin: 0 auto;
    .sui-pagination {
      margin: 18px 0;

      ul {
        margin-left: 0;
        margin-bottom: 0;
        vertical-align: middle;
        // width: 490px;
        float: left;

        li {
          line-height: 18px;
          display: inline-block;

          a {
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: @deep_backgrd_color;
            border: 1px solid rgba(142, 148, 154, 0.3);
            margin-left: -1px;
            font-size: 14px;
            padding: 9px 18px;
            color: @light_font_color;
          }

          &.active {
            a {
              background-color: @deep_backgrd_color;
              color: #fff;
              border-color: rgba(142, 148, 154, 0.3);
              cursor: default;
            }
          }

          &.prev {
            a {
              background-color: @deep_backgrd_color;
            }
          }

          &.disabled {
            a {
              color: #999;
              cursor: default;
            }
          }

          &.dotted {
            span {
              margin-left: -1px;
              position: relative;
              float: left;
              line-height: 18px;
              text-decoration: none;
              background-color: @light_backgrd_color;
              font-size: 14px;
              border-left: 1px solid @light_border_color;
              border-right: 1px solid @light_border_color;
              padding: 9px 18px;
              color: @light_font_color;
            }
          }

          &.next {
            a {
              background-color: @deep_backgrd_color;
            }
          }
        }
      }
      div {
        color: @light_font_color;
        line-height: 14px;
        font-size: 14px;
        float: right;
        width: 241px;
        span {
          display: block;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
