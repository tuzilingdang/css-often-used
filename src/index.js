import _ from 'lodash';
import Vue from 'vue'
import './styles.scss';
import VueRouter from 'vue-router';
import app from './App.vue'

import Home from './pages/Home.vue'
import Demo from './layouts/Demo.vue'
import Paper from './components/Paper.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/demo',
            component: Demo
        },
        {
            path: '/paper',
            component: Paper
        }
    ]
});

new Vue({
    router,
    render: h => h(app)
}).$mount('#app')