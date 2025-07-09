import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MyEducation from '@/components/MyEducation.vue';
import MyHero from '@/components/MyHero.vue';
import MySkills from '@/components/MySkills.vue';
import MyProjects from '@/components/MyProjects.vue';
import MyContact from '@/components/MyContact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/pendidikan',
    name: 'MyEducation',
    component: MyEducation
  },
  { path:'/myhero',name:'MyHero',component:MyHero },
  {path: '/myskills', name:'MySkills',component:MySkills},
  {path: '/myrojects', name: 'MyProjects', component:MyProjects},
  {path: '/mycontact', name: 'MyContact', compoment:MyContact}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;