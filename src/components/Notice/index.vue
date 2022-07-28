<template>
  <div class="notice">
    <div class="wrapper">
      <div class="cover">
        <img src="@/assets/img/cover.jpg" />
      </div>
      <div class="title">
        <h1><i class="fas fa-bullhorn"></i> {{ notice.title }}</h1>
      </div>
      <div class="abstract">
        <a href="">{{ notice.content }}</a>
      </div>
      <div class="pub-date">
        <span>{{ notice.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice: {
        title: '有一条新公告！',
        content:
          'Separating paragraphs with blank lines is easiest for readers to scan, but they can also be separated by indenting their first lines. This is often used to take up less space, such as to save paper in print.',
        date: '2022-7-27',
      },
    }
  },
}
</script>

<style lang="less" scoped>
.notice {
  width: 250px;
  padding: 30px;
  background-color: rgb(21, 23, 40);
  border-bottom: 1px solid rgba(155, 155, 171, 0.3);
  .cover img {
    width: 250px;
  }
  .wrapper{
    border-radius: 5px;
    overflow:  hidden;
    background-color: rgb(32, 34, 52);
  

    .title {
      padding: 20px;
      color: rgb(202, 199, 219);
      text-shadow: 0 0 5px black;
    }
    .abstract {
      padding: 20px;
      height: 94px;
      overflow: hidden;
      word-break: break-all;
      a {
        color: rgba(155, 155, 171, 0.5);
      }
    }
    .pub-date {
      padding: 20px 30px;
      color: rgba(155, 155, 171, 0.5);
      text-align: right;
    }
  }
}
</style>
