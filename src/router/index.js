import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CaapLogQuery from '@/views/CaapLogQuery'
import NetWorkTest from '@/views/NetWorkTest'
import AppErrorLog from '@/views/AppErrorLog'
import ProdProblemAnaly from '@/views/ProdProblemAnalysis'
import UserInfo from '@/views/ProdProblemAnalysis/UserInfo'
import MtStatus from '@/views/ProdProblemAnalysis/MtTranstatus'
import MpStatus from '@/views/ProdProblemAnalysis/MpTranstatus'


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
      component: ProdProblemAnaly,
      children: [
        { path: '/prodProblemAnaly/usrInfo', component: UserInfo },
        { path: '/prodProblemAnaly/mtTranStatus', component: MtStatus },
        { path: '/prodProblemAnaly/mpTranStatus', component: MpStatus }

      ]
    }
  ]
})
