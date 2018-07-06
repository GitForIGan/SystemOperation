import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CaapLogQuery from '@/views/CaapLogQuery'
import NetWorkTest from '@/views/NetWorkTest'
import AppErrorLog from '@/views/AppErrorLog'
import ProdProblemAnaly from '@/views/ProdProblemAnalysis'
import UserInfo from '@/views/prodProblemAnaly/UserInfo'
import MtStatus from '@/views/prodProblemAnaly/MtTranstatus'
import MpStatus from '@/views/prodProblemAnaly/MpTranstatus'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
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
      path: '/prodProblemAnaly',
      name: 'prodProblemAnaly',
      component: ProdProblemAnaly,
      children: [
        { path: '/prodProblemAnaly/usrInfo', component: UserInfo },
        { path: '/prodProblemAnaly/mtTranStatus', component: MtStatus },
        { path: '/prodProblemAnaly/mpTranStatus', component: MpStatus }

      ]
    }
  ]
})
