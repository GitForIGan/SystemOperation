import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CaapLogQuery from'@/components/CaapLogQuery'
import NetWorkTest from '@/components/NetWorkTest'
import AppErrorLog from '@/components/AppErrorLog'
import ProdProblemAnaly from '@/components/ProdProblemAnalysis'



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
      path: '/prodProblemAnaly',
      name: 'prodProblemAnaly',
      component: ProdProblemAnaly
    }
  ]
})
