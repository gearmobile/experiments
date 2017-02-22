import Vue from 'vue';
import Router from 'vue-router';
import Customers from '../components/Customers';
import aboutCustomer from '../components/aboutCustomer';
import addCustomer from '../components/addCustomer';
import detailsCustomer from '../components/detailsCustomer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Customers', component: Customers },
    { path: '/about', name: 'About', component: aboutCustomer },
    { path: '/add', name: 'Add', component: addCustomer },
    { path: '/customer/:id', name: 'Details', component: detailsCustomer },
  ],
});
