import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    hidden:true
  },
  {
    path: '/404',
    component:() => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    children:[
      {
        path:'dashboard',
        name:'Dashboard',
        component:()=>import('@/views/dashboard/index'),
        meta:{ title:'Dashboard',icon: 'dashboard'}
      }
    ]
  },
  {
    path:'/example',
    component:Layout,
    name:'Example',
    meta:{ title: 'example' ,icon: 'el-icon-s-help' },
    children:[
      {
        path:'table',
        name:'Table',
        component:() => import('@/views/Table/index'),
        meta: {title: 'Table',icon: 'table'}
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/Tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      },
      {
        path: 'complex-table',
        name: 'ComplexTable',
        component: () => import('@/views/Table/complexTable'),
        meta: { title: 'complex Table'}
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', component:() => import('@/views/404'), redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes:constantRoutes
})

export default router
