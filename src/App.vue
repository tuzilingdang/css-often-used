<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    // import Screen from './components/screen/Screen.vue'
    // import KeyBoard from './components/keyboard/KeyBoard.vue'
    import Home from './pages/Home.vue'
    import Demo from './layouts/Demo.vue'
    import Paper from './components/Paper.vue'

    export default {
        name: 'app',
        components: {
            Home,
            Demo,
            Paper
        }
    }
</script>

<style lang="scss">
    $bg-color: #eeeeee;
    $font-color-white: whitesmoke;

    .container {
        width: 94%;
        height: 98vh;
        margin: 1vh auto;
        background: $bg-color;
    }
</style>