<template>
  <div class="demo">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .effect {
    margin-bottom: 5vh;
  }
  
  .demo {
    width: 100%;
    height: 100%;
    background: whitesmoke;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    .wrapper {
      padding: 5vh 0;
    }
  }
</style>