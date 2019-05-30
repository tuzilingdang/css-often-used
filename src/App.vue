<template>
    <div class="container">
        <router-link to="/home">Home</router-link>
        <router-link to="/demo">Demo</router-link>

        <router-view></router-view>
        <ul class="sl">
            <li>层叠书页效果</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    // import Screen from './components/screen/Screen.vue'
    // import KeyBoard from './components/keyboard/KeyBoard.vue'
    import Home from './pages/Home.vue'
    import Demo from './pages/Demo.vue'

    export default {
        name: 'app',
        components: {
            Home,
            Demo
        }
    }
</script>

<style lang="scss" scoped>
    $bg-color: #eeeeee;
    $mid-pink: #e28293;
    $font-color-white: whitesmoke;

    .container {
        width: 94%;
        height: 98vh;
        margin: 1vh auto;
        background: $bg-color;

        .sl {
            width: 100%;
            height: auto;
            padding: 0;
            list-style: none;
            text-align: center;

            li {
                width: 100%;
                height: 2.5rem;
                line-height: 2.5rem;
                background: $mid-pink;
                color: $font-color-white;
                border-radius: 5px;
                margin: 0.6rem auto;
            }
        }
    }
</style>