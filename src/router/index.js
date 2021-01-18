import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      title: 'Q&A | Home'
    }
  },
  {
    path: '/myrooms',
    name: 'myrooms',
    component: () => import('../views/MyRooms.vue'),
    meta: {
      requiresAuth: true,
      title: 'Q&A | My rooms'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Q&A | Login'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: {
      title: 'Q&A | Register'
    }
  },
  {
    path: '/subrooms',
    name: 'subrooms',
    component: () => import('../views/SubRooms.vue'),
    meta: {
      requiresAuth: true,
      title: 'Q&A | Subscriptions'
    }
  },
  {
    path: '/room/:id',
    name: 'room',
    component: () => import('../views/Room.vue'),
    meta: {
      requiresAuth: true,
      title: 'Q&A | Room Page'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true,
      title: 'Q&A | Profile'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue'),
    meta: {
      requiresAuth: true,
      title: 'Q&A | Search'
    }
  },
  {
    path: '/myquestions',
    name: 'myquestions',
    component: () => import('../views/MyQuestions.vue'),
    meta: {
      requiresAuth: true,
      title: 'Q&A | My questions'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const DEFAULT_TITLE = 'Q&A'
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['UserStore/isLoggedIn']) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
export default router
