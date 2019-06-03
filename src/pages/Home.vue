<template>
    <ul class="sl">
        <li>
            <router-link to="/paper">层叠书页</router-link>
        </li>
        <li>
            <router-link to="/loading">Loading</router-link>
        </li>
        <li>
            <router-link to="/radio">单选框和复选框</router-link>
        </li>
        <li></li>
    </ul>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'

    export default {
        components: {
            MainLayout
        }
    }
</script>

<style lang="scss" scoped>
    $bg-color: #eeeeee;
    $mid-pink: #e28293;
    $font-color-white: whitesmoke;

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

            border-radius: 5px;
            margin: 0.6rem auto;

            a {
                color: $font-color-white;
                text-decoration: none;
            }
        }
    }
</style>