<template>
    <Demo>
        <div class="typewriter">
            <div class="line">The Typewriter.</div>
        </div>
    </Demo>

</template>

<script>
    // https://css-tricks.com/snippets/css/typewriter-effect/
    import Demo from '../layouts/Demo.vue'

    export default {
        components: {
            Demo
        }
    }
</script>

<style lang="scss" scoped>
    .typewriter {
        width: 60%;
        margin: 5vh auto;
    }

    .typewriter .line {
        overflow: hidden;
        /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange;
        /* The typwriter cursor */
        white-space: nowrap;
        /* Keeps the content on a single line */
        margin: 0 auto;
        /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em;
        /* Adjust as needed */
        animation:
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
        from {
            width: 0
        }

        to {
            width: 100%
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {

        from,
        to {
            border-color: transparent
        }

        50% {
            border-color: orange;
        }
    }
</style>