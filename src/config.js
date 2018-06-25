
const urlIP = document.location.origin; // 获取当前URL路径，测试环境、生产环境
// const urlIP = "http://10.100.17.204/ydqdcaap"; // 获取当前URL路径，测试环境、生产环境

const ProjectNameCaap = "ydqdsass"; // 当前工程名称，移动展业系统后台应用目前是统一的   
const ProjectNameCEIS = "ydqdceis"; // 当前工程名称，移动展业系统后台应用目前是统一的   
const urlPath = urlIP + "/ydqdcaap/caap/dispatcher.do"; // 动态请求href头

// 网络基本参数配置完成
var CONFIG = {};
CONFIG.PROJECT_NAME_CAAP = ProjectNameCaap;
CONFIG.PROJECT_NAME_CEIS = ProjectNameCEIS;        
// 登录请求
CONFIG.LOGIN_SYSTEST = {
    url: urlIP + "/ydqdcaap/caap/loginSysTest.do",
    method: "POST"
};

// 测试移动展业应用服务器请求
CONFIG.SASS_NETWORK_TEST = {
    path: "sass/system/getConnectivity.do",
    url: urlPath, 
    method: "POST"
};

CONFIG.TEST_APP_CAAP = {
    path: "sass/system/getConnectivity.do",
    url: urlIP + "/ydqdcaap/systemTest/diagnoseAppToCaap.do", 
    method: "POST"
};

CONFIG.LOGIN_CLIENT = {
    path: "sass/login/loginClient.do",
    url: urlPath,
    method: "POST"
};

CONFIG.QUERY_CAAP_LOG = {
    url: urlIP + "/ydqdcaap/caap/queryCaapLog.do",
    method: "POST"
};

CONFIG.GET_ERROR_LOG = {
    url: urlIP + "/ydqdcaap/caap/queryErrorFile.do",
    method: "POST"
};

CONFIG.QUERY_APP_ERROR_LOG = {
    url: urlIP + "/ydqdcaap/caap/queryAppErrorLog.do",
    method: "POST"
}

CONFIG.QUERY_USER_INFO = {
    path : "productProblemsAnaly/UserInfoQuery.do",
    httpData:{
        url : urlPath,
        method : "POST"
    }
}
CONFIG.QUERY_POLICY_TRAN_STATUS = {
    path : "productProblemsAnaly/queryPolicyStatus.do",
    httpData:{
        url : urlPath,
        method : "POST"
    }
}
// 查询保全调度状态
CONFIG.QUERY_MP_POLICY_TRAN_STATUS = {
    path : "productProblemsAnaly/queryMpPolicyStatus.do",
    httpData:{
        url : urlPath,
        method : "POST"
    }
}
export default {CONFIG}

