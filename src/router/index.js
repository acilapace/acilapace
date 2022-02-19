import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/scuola',
    name: 'Scuola',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/Scuola.vue')
  },
  {
    path: '/integrazione',
    name: 'Integrazione',
    component: () => import('../components/Integrazione.vue')
  },
  {
    path: '/supporto',
    name: 'SupportoES',
    component: () => import('../components/SupportoES.vue')
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: () => import('../components/Contatti.vue')
  },
  {
    path: '/chisiamo',
    name: 'Chi_Siamo',
    component: () => import('../components/Chi_Siamo.vue')
  },
  {
    path: '/discorsi_venerdi',
    name: 'DiscorsiVenerdi',
    component: () => import('../components/DiscorsiVenerdi.vue'),
  },
  {
    path: '/discorsi_venerdi/:id',
    name:'DiscorsoVenerdi',
    component: () => import('../components/DiscorsoVenerdi.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
