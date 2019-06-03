<template>
  <Demo>
    <div class="effect">
      <h1>底部垂直层叠效果</h1>
      <div class="paper-bottom"></div>
    </div>

    <div class="effect">
      <h1>顶部垂直层叠效果</h1>
      <div class="paper-top"></div>
    </div>

    <div class="effect">
      <h1>斜角层叠效果</h1>
      <div class="paper-diag"></div>
    </div>

    <div class="effect">
      <h1>紊乱层叠效果</h1>
      <div class="paper-disor"></div>
    </div>

  </Demo>

</template>

<script>
  // 参考文档： https://css-tricks.com/snippets/css/stack-of-paper/ 

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

  .paper-bottom {
    background: $paper-bg-color;
    width: 200px;
    height: 100px;
    margin: 0.5vh auto;

    box-shadow:
      /* The top layer shadow */
      0 1px 1px rgba(0, 0, 0, 0.15),

      /* The second layer */
      0 10px 0 -5px $paper-stack-color,
      /* The second layer shadow */
      0 10px 1px -4px rgba(0, 0, 0, 0.15),

      /* The third layer */
      0 20px 0 -10px $paper-stack-color,
      /* The third layer shadow */
      0 20px 1px -9px rgba(0, 0, 0, 0.15);

    /* Padding for demo purposes */
    padding: 30px;
  }

  .paper-top {
    background: $paper-bg-color;
    width: 200px;
    height: 100px;
    margin: 0.5vh auto;

    box-shadow:
      /* The top layer shadow */
      0 -1px 1px rgba(0, 0, 0, 0.15),
      /* The second layer */
      0 -10px 0 -5px $paper-stack-color,
      /* The second layer shadow */
      0 -10px 1px -4px rgba(0, 0, 0, 0.15),
      /* The third layer */
      0 -20px 0 -10px $paper-stack-color,
      /* The third layer shadow */
      0 -20px 1px -9px rgba(0, 0, 0, 0.15);
    /* Padding for demo purposes */
    padding: 30px;
  }

  /* Diagonal stacked paper effect */
  .paper-diag {
    background: $paper-bg-color;
    width: 200px;
    height: 100px;
    margin: 0.5vh auto;
    /* Need position to allow stacking of pseudo-elements */
    position: relative;
    /* Padding for demo purposes */
    padding: 30px;

    box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);

    // z-index 似乎不生效
    z-index: 0;
    
    &::before,
    &::after {
      /* Add shadow to distinguish sheets from one another */
      box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);

      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $paper-stack-color;
    }

    &::before {
      left: 7px;
      top: 5px;
      z-index: -1;
    }

    &::after {
      left: 12px;
      top: 10px;
      z-index: -2;
    }
  }

  .paper-disor {
    background: $paper-bg-color;
    width: 200px;
    height: 100px;
    margin: 0.5vh auto;
    /* Need position to allow stacking of pseudo-elements */
    position: relative;
    /* Padding for demo purposes */
    padding: 30px;

    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    border: 1px solid #bbb;

    // z-index 似乎不生效
    z-index: 0;

    &::before,
    &::after {
      /* Styles to distinguish sheets from one another */
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
      border: 1px solid #bbb;

      content: "";
      position: absolute;
      height: 95%;
      width: 99%;
      background-color: #eee;
    }

    &::before {
      right: 15px;
      top: 0;
      transform: rotate(-1deg);
      z-index: -1;
    }

    &::after {
      top: 5px;
      right: -5px;
      transform: rotate(1deg);
      z-index: -2;
    }
  }
</style>