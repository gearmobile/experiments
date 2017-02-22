import appHome from './components/home.vue';
import appStart from './components/user/userStart.vue';
import appUser from './components/user/user.vue';
import appEdit from './components/user/userEdit.vue';
import appDetails from './components/user/userDetail.vue';

const routes = [
  {
    path: '/',
    component: appHome,
  },
  {
    path: '/user/:id',
    component: appStart,
    children: [
      { path: '', component: appUser },
      { path: '/edit', component: appEdit },
      { path: '/details', component: appDetails },
    ],
  },
];

export default routes;
