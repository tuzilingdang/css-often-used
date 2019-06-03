import _ from 'lodash';
import Vue from 'vue'
import './styles.scss';
import VueRouter from 'vue-router';
import app from './App.vue'

import Home from './pages/Home.vue'
import Demo from './layouts/Demo.vue'
import Paper from './components/Paper.vue'
import Loading from './components/Loading.vue'
import Radio from './components/Radio.vue'
import Typewriter from './components/Typewriter.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/paper',
            component: Paper
        },
        {
            path: '/loading',
            component: Loading
        },
        {
            path: '/radio',
            component: Radio
        },
        {
            path: '/typewriter',
            component: Typewriter
        }
    ]
});

new Vue({
    router,
    render: h => h(app)
}).$mount('#app')