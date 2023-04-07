import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Početna',
      component: HomeView
    },
    {
      path: '/Kontakt',
      name: 'Kontakt',
      component: () => import("../views/ContactView.vue")
    },
    {
      path: '/Obrazovanje i edukacija',
      name: 'Obrazovanje i edukacija',
      component: () => import("../views/EducationView.vue")
    },
    {
      path: '/Projekti',
      name: 'Projekti',
      component: () => import("../views/ProjectsView.vue")
    },
    
  ]
})

export default router
