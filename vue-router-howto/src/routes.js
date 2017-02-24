import pageFirst from './components/first.vue';
import pageSecond from './components/second.vue';
//
import userPage from './components/users/user.vue';
import userCard from './components/users/userCard.vue';
import userEdit from './components/users/userCardEdit.vue';

const routes = [
  {
    path: '',
    component: pageFirst
  },
  {
    path: '/second',
    component: pageSecond,
    children: [
      { path: '', name: 'user', component: userPage  },
      { path: ':card', name: 'userCard', component: userCard  },
      { path: ':card/edit', name: 'userEdit', component: userEdit  },
    ],
  },
];

export default routes;
