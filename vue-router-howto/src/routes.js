import Uno from './components/uno.vue';
import Duo from './components/duo.vue';
//
import userStart from './components/user/userStart.vue';
import userDetail from './components/user/userDetail.vue';
import userEdit from './components/user/userEdit.vue';
//

const routes = [
  {
    path: '',
    name: 'uno',
    component: Uno,
  },
  {
    path: '/duo',
    component: Duo,
    children: [
      { path: '', name: 'userStart', component: userStart },
      { path: ':user', name: 'userDetail', component: userDetail },
      { path: ':user/edit', name: 'userEdit', component: userEdit },
    ],
  },
];

export default routes;
