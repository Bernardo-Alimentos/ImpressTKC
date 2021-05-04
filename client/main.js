import { Meteor } from 'meteor/meteor';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from '../imports/ui/App.vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import VueGraph from 'vue-graph';

Vue.use(VueGraph);
Vue.use(VueMeteorTracker);
Vue.use(VueRouter);

const router = new VueRouter({
  routes, 
  mode:'history'
});

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  });
});
 