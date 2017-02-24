import pageFirst from './components/first.vue';
import pageSecond from './components/second.vue';
//
// import pageHome from './components/pages/pageStart.vue';
import pageOne from './components/pages/pageOne.vue';
import pageTwo from './components/pages/pageTwo.vue';
//
import userPage from './components/users/user.vue';
import userList from './components/users/userList.vue';
import userCard from './components/users/userCard.vue';
import userEdit from './components/users/userCardEdit.vue';
//

const routes = [
  {
    path: '',
    component: pageFirst,
    children: [
      // { path: '', component: pageHome },
      { path: '/one/:url', component: pageOne },
      { path: '/two/:url', component: pageTwo },
    ],
  },
  {
    path: '/second',
    component: pageSecond,
    children: [
      { path: '/second', name: 'user', component: userPage  },
      { path: '/second/:userID', name: 'userList', component: userList  },
      { path: '/second/:userID/card', name: 'userCard', component: userCard  },
      { path: '/second/:userID/card/edit', name: 'userEdit', component: userEdit  },
    ],
  },
];

export default routes;
