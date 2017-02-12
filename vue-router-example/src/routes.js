import Home from './components/home.vue';
import User from './components/user/user.vue';
import UserStart from './components/user/userStart.vue';
import UserProfile from './components/user/userProfile.vue';

const routes = [
  { path: '', component: Home },
  {
    path: '/user',
    component: User,
    children: [
      { path: '', component: UserStart },
      { path: '', component: UserProfile },
    ],
  },
];

export default routes;


