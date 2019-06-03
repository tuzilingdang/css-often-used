<template>
  <Demo>
    <div class="radio">
      <h1>复选框</h1>
      <span class="check_box">
        <input type="checkbox" id="check_1">
        <label for="check_1"></label>
        <em>选项1</em>
      </span>

      <br><br>

      <span class="check_box">
        <input type="checkbox" id="check_2">
        <label for="check_2"></label>
        <em>选项2</em>
      </span>

      <br><br>

      <h1>单选框</h1>
      <span class="radio_box">
        <input type="radio" id="radio_1" name="radio" checked>
        <label for="radio_1"></label>
        <em>选项1</em>
      </span>

      <br><br>

      <span class="radio_box">
        <input type="radio" id="radio_2" name="radio">
        <label for="radio_2"></label>
        <em>选项2</em>
      </span>

    </div>

  </Demo>

</template>

<script>
  import Demo from '../layouts/Demo.vue'

  export default {
    components: {
      Demo
    }
  }
</script>

<style lang="scss" scoped>
  $mid-pink: #e28293;

  .radio {
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  em {
    font-style: normal;
  }

  /*复选*/
  .check_box {
    display: inline-block;
    position: relative;
  }

  .check_box label {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid #cacaca;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  .check_box label:hover {
    border: 2px solid $mid-pink;
  }

  .check_box label:after {
    content: '';
    width: 8px;
    height: 4px;
    position: absolute;
    top: 4px;
    left: 3px;
    border: 2px solid #cacaca;
    border-top: none;
    border-right: none;
    opacity: 0.4;
    transform: rotate(-45deg);
    /*-webkit-transform:rotate(-45deg);*/
  }

  .check_box label:hover:after {
    border: 2px solid $mid-pink;
    border-top: none;
    border-right: none;
  }

  .check_box input:checked+label {
    border: 2px solid $mid-pink;
  }

  .check_box input:checked+label:after {
    opacity: 1;
    border: 2px solid $mid-pink;
    border-top: none;
    border-right: none;
  }

  .check_box em {
    margin: 0 0 0 5px;
  }

  /*单选*/
  .radio_box {
    display: inline-block;
    position: relative;
  }

  .radio_box label {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid $mid-pink;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  .radio_box input:checked+label:after {
    content: '';
    width: 9px;
    height: 9px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: $mid-pink;
    border-radius: 50%;
  }

  .check_box em {
    margin: 0 0 0 5px;
  }
</style>