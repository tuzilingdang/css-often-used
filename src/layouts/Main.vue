<template>
  <div class="main">
    <ul>
      <li>
        <div @click="jump('/')">Home</div>
        <div @click="jump('/demo')">Demo</div>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>

  export default {
    methods: {
      jump(path) {
        this.$router.go(path)
      }
    }
  }
</script>

<style scoped>
  .main {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
