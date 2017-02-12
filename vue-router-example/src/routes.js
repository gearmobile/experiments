import Home from './components/home.vue';
import First from './components/first.vue';
import Second from './components/second.vue';
import Start from './components/sub/start.vue';
import Uno from './components/sub/1uno.vue';
import Duo from './components/sub/2duo.vue';
import Tre from './components/sub/3tre.vue';

const routes = [
  { path: '', component: Home },
  { path: '/first', component: First },
  {
    path: '/second',
    component: Second,
    children: [
      { path: '', component: Start },
      { path: '/uno', component: Uno },
      { path: '/duo', component: Duo },
      { path: '/tre', component: Tre },
    ],
  },
];

export default routes;
