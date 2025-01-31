import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: AppView,
      redirect: { name: 'home' },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/questionnaire',
          name: 'questionnaire',
          component: () => import('../views/QuestionnaireView.vue'),
        }
      ]
    },
  ],
})

export default router
