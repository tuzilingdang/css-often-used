import _ from 'lodash';
import Vue from 'vue'
import './styles.scss';
import VueRouter from 'vue-router';
import app from './App.vue'

import Home from './pages/Home.vue'
import Demo from './pages/Demo.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/demo',
            component: Demo
        }
    ]
});

new Vue({
    router,
    render: h => h(app)
}).$mount('#app')