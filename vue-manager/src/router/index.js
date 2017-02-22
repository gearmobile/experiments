import Vue from 'vue';
import Router from 'vue-router';
import Customers from '../components/Customers';
import aboutCustomer from '../components/aboutCustomer';
import addCustomer from '../components/addCustomer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Hello', component: Customers },
    { path: '/about', name: 'About', component: aboutCustomer },
    { path: '/add', name: 'Add', component: addCustomer },
  ],
});
