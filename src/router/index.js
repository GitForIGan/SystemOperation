import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CaapLogQuery from'@/components/CaapLogQuery'
import NetWorkTest from '@/components/NetWorkTest'
import AppErrorLog from '@/components/AppErrorLog'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/caapLogQuery',
      name: 'CaapLogQuery',
      component: CaapLogQuery
    },
    {
      path: '/NetWorkTest',
      name: 'NetWorkTest',
      component: NetWorkTest
    },
    {
      path: '/AppErrorLog',
      name: 'AppErrorLog',
      component: AppErrorLog
    },
    {
      path: '/caapLogQuery',
      name: 'CaapLogQuery',
      component: CaapLogQuery
    },
    {
      path: '/caapLogQuery',
      name: 'CaapLogQuery',
      component: CaapLogQuery
    }
  ]
})
