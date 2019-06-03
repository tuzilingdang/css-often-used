<template>
  <Demo>
    <div class="effect">
      <h1>loading 1</h1>
      <div class="loading-1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </Demo>

</template>

<script>
  // 参考文档： https://css-tricks.com/snippets/css/bouncy-animated-loading-animation/

  import Demo from '../layouts/Demo.vue'

  export default {
    components: {
      Demo
    }
  }
</script>

<style lang="scss" scoped>
  $paper-bg-color: #f1e8d7;
  $paper-stack-color: #fdeed4ab;

  .loading-1 {
    text-align: center;
  }

  .loading-1 span {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    margin: 50px auto;
    background: black;
    border-radius: 50px;
    -webkit-animation: loading-1 0.9s infinite alternate;
    -moz-animation: loading-1 0.9s infinite alternate;
  }

  .loading-1 span:nth-of-type(2) {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
  }

  .loading-1 span:nth-of-type(3) {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
  }

  @-webkit-keyframes loading-1 {
    0% {
      width: 10px;
      height: 10px;
      opacity: 0.9;
      -webkit-transform: translateY(0);
    }

    100% {
      width: 24px;
      height: 24px;
      opacity: 0.1;
      -webkit-transform: translateY(-21px);
    }
  }

  @-moz-keyframes loading-1 {
    0% {
      width: 10px;
      height: 10px;
      opacity: 0.9;
      -moz-transform: translateY(0);
    }

    100% {
      width: 24px;
      height: 24px;
      opacity: 0.1;
      -moz-transform: translateY(-21px);
    }
  }
</style>