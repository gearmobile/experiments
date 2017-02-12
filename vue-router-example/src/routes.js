import Home from './components/home.vue';
import First from './components/first.vue';
import Second from './components/second.vue';
import Start from './components/sub/start.vue';
import Uno from './components/sub/1uno.vue';
import Duo from './components/sub/2duo.vue';
import Tre from './components/sub/3tre.vue';

const route1 = [
  { path: '', component: Home },
  { path: '/first', component: First },
  {
    path: '/second',
    component: Second,
    children: [
      { path: '', component: Start },
      { path: ':id', component: Uno },
      { path: ':id', component: Duo },
      { path: ':id', component: Tre },
    ],
  },
];

const route2 = [
  { path: '', component: Home },
  { path: '/first', component: First },
  {
    path: '/second',
    component: Second,
  },
];

let routes;
const check = true;

if (check) {
  routes = route2;
} else {
  routes = route1;
}

export default routes;
