// Global libraries
window.Vue = require('vue');
window._ = require('lodash');

// Import
Myra.environment = require('./configuration/environment');

// Layout
Vue.component('m-environment', require('./components/layout/environment').default);

// Application
var vm = new Vue({
	el: '#application',
	data: Storage
});