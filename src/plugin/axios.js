import axios from 'axios'
// import { AXIOS_DEFAULT_CONFIG } from 'config'
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc, requestHeaderFunc } from './interceptors/axios'

let axiosInstance = {}

// axios 默认配置
const AXIOS_DEFAULT_CONFIG = {
    timeout: 20000,
    maxContentLength: 2000,
    headers: {}
}

axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

// 注入请求拦截
axiosInstance
    .interceptors.request.use(requestHeaderFunc,requestSuccessFunc, requestFailFunc)
// 注入响应拦截
axiosInstance
    .interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance