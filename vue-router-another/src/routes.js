import appBrands from './components/brands.vue';
import appContacts from './components/contacts.vue';
import appProjects from './components/projects.vue';
import appBlog from './components/blog.vue';
import appPost from './components/post.vue';

const routes = [
  { path: '/brands', component: appBrands, name: 'Brands'  },
  { path: '/blog', component: appBlog, name: 'Blog'  },
  { path: '/post/:postID', component: appPost, name: 'Post'  },
  { path: '/contacts', component: appContacts, name: 'Contacts'  },
  { path: '/projects', component: appProjects, name: 'Projects'  },
];

export default routes;
