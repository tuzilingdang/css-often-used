import _ from 'lodash';
import Vue from 'vue'
import './styles.css';

import app from './App.vue'


new Vue({
    render: h => h(app)
}).$mount('#app')