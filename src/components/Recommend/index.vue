<template>
  <div class="reco">
    <div class="re" v-for="(re, index) in recommends" :key="index">
      <!-- 文章标题 -->
      <div class="title">
        <i class="fas fa-heart"></i> <a href="">{{ re.title }}</a>
      </div>
      <!-- 文章预览 -->
      <div class="preview">
        <p>
          <a href="">{{ re.preview }}</a>
        </p>
      </div>
      <!-- 底部按钮 -->
      <div class="btns">
        <a href="">
          <i class="fas fa-eye"></i>
          {{ re.views }}
        </a>
        <a href="">
          <i class="fas fa-thumbs-up"></i>
          {{ re.likes }}
        </a>
        <a href="">
          <i class="fas fa-comment-dots"></i>
          {{ re.comments }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommends: [
        {
          title: '秋招投递记录',
          preview:
            'Separating paragraphs with blank lines is easiest for readers to scan, but they can also be separated by indenting their first lines. This is often used to take up less space, such as to save paper in print.',
          likes: 0,
          views: 0,
          comments: 0,
        },
        {
          title: 'js重要面试题总结',
          preview:
            'Separating paragraphs with blank lines is easiest for readers to scan, but they can also be separated by indenting their first lines. This is often used to take up less space, such as to save paper in print.',
          likes: 0,
          views: 0,
          comments: 0,
        },
        {
          title: '面试记录-百度提前批',
          preview:
            'Separating paragraphs with blank lines is easiest for readers to scan, but they can also be separated by indenting their first lines. This is often used to take up less space, such as to save paper in print.',
          likes: 0,
          views: 0,
          comments: 0,
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.reco {
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  .re {
    width: 250px;
    background-color: rgb(21, 23, 40);
    border-radius: 5px;

    .title {
      font-size: 18px;
      font-weight: bold;
      color: rgb(202, 199, 219);
      height: 50px;
      line-height: 50px;
      margin-left: 20px;
      a {
        color: rgb(202, 199, 219);
      }
    }
    .preview {
      height: 180px;
      line-height: 20px;
      margin-left: 20px;
      margin-right: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      a {
        color: rgba(155, 155, 171, 0.5);
      }
    }
    .btns {
      height: 40px;
      line-height: 40px;
      border-top: 1px solid rgba(155, 155, 171, 0.5);

      a {
        text-decoration: none;
        color: rgb(202, 199, 219);
        margin-left: 10px;
      }
    }
  }
}
</style>
