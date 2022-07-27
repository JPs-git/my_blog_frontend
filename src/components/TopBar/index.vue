<template>
  <div class="top-bar">
    <i class="fas fa-search"></i>
    <input type="text" placeholder="Search by pressing Enter">
    <a href="">
      <i class="fas fa-mail-bulk"></i>
    </a>
    <a href="">
      <i class="fas fa-bell"></i>
    </a>
    <a href="">
      <i class="fas fa-wifi"></i>
    </a>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  
  .top-bar{
    color: rgb(100,103,122);
    background-color: rgb(21,23,40);
    display: flex;
    align-items: center;
    border-left: 1px solid rgb(100,103,122);
    i {
      font-size: 25px;
      margin-left: 15px;
      margin-right: 10px;
    }
    input {
      height: 80px;
      font-size: 20px;
      border: none;
      outline: none;
      flex-grow: 1;
      background-color: rgb(21,23,40);
      color: rgb(100,103,122);
    }
    a {
      color: rgb(100,103,122);
    }
  }

</style>