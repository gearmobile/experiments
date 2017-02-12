import Home from './components/home.vue';
import compUno from './components/compUno.vue';
import compDuo from './components/compDuo.vue';
import compTre from './components/compTre.vue';
import childUno from './components/compUnoChilds/compUnoChildUno.vue';
import childDuo from './components/compUnoChilds/compUnoChildDuo.vue';
import childTre from './components/compUnoChilds/compUnoChildTre.vue';

const routes = [
  { path: '', component: Home },
  {
    path: '/uno',
    component: compUno,
    children: [
      { path: '/child-uno', component: childUno },
      { path: '/child-duo', component: childDuo },
      { path: '/child-tre', component: childTre },
    ],
  },
  { path: '/duo', component: compDuo },
  { path: '/tre', component: compTre },
];

export default routes;
 