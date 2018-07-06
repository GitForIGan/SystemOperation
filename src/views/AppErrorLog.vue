<template>
    <div id="app-error-log">
        <back-title titleText="APP错误日志" back-url="/home"></back-title>
        <div class="container_caapLog common-form  flex flex_row">
            <div class="flex flex_1 row-item">
                <div class="flex_1 label-item">
                    <label>登录工号</label>
                </div>
                <div class="flex_2 item">
                    <div class="input_item">
                        <input v-model="getAppErrorLog.agentCode" placeholder="请输入工号" maxlength="10">
                    </div>
                </div>
            </div>
            <div class="flex_1 flex row-item">
                <div class=" flex_1 label-item">
                    <label>错误时间</label>
                </div>
                <div class="flex_2 item">
                    <div class="input_item">
                        <input type="text" v-model="getAppErrorLog.errorTime" ng-change="filterDate(getAppErrorLog.errorTime)" placeholder="如20180427" maxlength="20">
                    </div>
                </div>
            </div>
            <div class="flex flex_1 row-item">
                <div class=" flex_1 label-item">
                    <label>查询条数</label>
                </div>
                <div class="flex_2 item">
                    <div class="input_item">
                        <input v-model="getAppErrorLog.itemCounts" placeholder="查询条数" maxlength="10">
                    </div>
                </div>
            </div>
            <div class="flex flex_1 row-item">
            </div>

        </div>
        <button class="button-query" @click="query()">查询</button>
        <div class="flex align_center space-line" style="text-align: center;padding-bottom: 5px;border-bottom:1px solid #11c1f3">
            <div class="flex_1 ">序号</div>
            <div class="flex_4 ">时间</div>
            <div class="flex_3 ">设备名</div>
            <div class="flex_2 ">系统</div>
            <div class="flex_2">详细</div>
        </div>
        <div style="max-height: 520px; overflow-y: scroll;">
            <div class="flex" style=" text-align: center;padding-bottom: 5px;" v-for="(obj,index) in errorInfoArr" :key=index>
                <div class="flex_1" style="background-color: #00d6ff21;">{{index}}</div>
                <div class="flex_4" style="background-color: #00d6ff21;">{{obj.errorTime}}</div>
                <div class="flex_3" style="background-color: #00d6ff21;">{{obj.deviceName}}</div>
                <div class="flex_2" style="background-color: #00d6ff21;">{{obj.osVersion}}</div>
                <label class=" detailButon flex_2" @click="showDetails(obj)" style="color: #11c1f3; background-color: #00d6ff21;">详细</label>
            </div>
        </div>

        <div class="dialog" v-show="isShowDetails">
            <div class="dia_bg"></div>
            <div class="dia_con">
                <div class="detailItem">
                    <div class="flex_1 detailRowitem">agentCode</div>
                    <div class="flex_3 ">{{detailLogdata.agentCode}}</div>
                    <div class="flex_1 detailRowitem">agentOrgName</div>
                    <div class="flex_3 ">{{detailLogdata.agentOrgName}}</div>
                    <div class="flex_1 detailRowitem">errorTime</div>
                    <div class="flex_3">{{detailLogdata.errorTime}}</div>
                    <div class="flex_1 detailRowitem">osVersion</div>
                    <div class="flex_3">{{detailLogdata.osVersion}}</div>
                    <div class="flex_1 detailRowitem">errorType</div>
                    <div class="flex_3">{{detailLogdata.errorType}}</div>
                    <div class="flex_1 detailRowitem">errorTypeStr</div>
                    <div class="flex_3">{{detailLogdata.errorTypeStr}}</div>
                    <div class="flex_1 detailRowitem">errorSysMsg</div>
                    <div class="flex_3">{{detailLogdata.errorSysMsg}}</div>
                    <div class="flex_1 detailRowitem">errorPage</div>
                    <div class="flex_3">{{detailLogdata.errorPage}}</div>
                    <div class="flex_1 detailRowitem">errorStack</div>
                    <div class="flex_3">{{detailLogdata.errorStack}}</div>
                </div>

                <div class="button" @click="hideLogDetail()">返回</div>
            </div>

        </div>
    </div>

</template>
<script>
import BackTitle from "../components/common/BackTitle";
import HTTP_CONFIG from "../config.js";

export default {
  data() {
    return {
      getAppErrorLog: {},
      errorInfoArr: [],
      isShowDetails: false,
      detailLogdata: {}
    };
  },
  components: {
    BackTitle
  },
  methods: {
    query: function() {
      var agentCode = this.getAppErrorLog.agentCode;
      var errorTime = this.getAppErrorLog.errorTime;
      var itemCounts = this.getAppErrorLog.itemCounts;
      var postData = {
        pageCounts: itemCounts,
        errorTime: errorTime,
        agentCode: agentCode
      };
      this.$axios
        .post(HTTP_CONFIG.CONFIG.QUERY_APP_ERROR_LOG.url, postData)
        .then(response => {
          var data = response;
          console.log(response);
          this.errorInfoArr = data.logList;
        })
        .catch(error => {
          console.log(error);
        });
    },
    showDetails: function(obj) {
      this.isShowDetails = true;
      this.detailLogdata = obj;
    },
    hideLogDetail: function() {
      this.isShowDetails = false;
      this.detailLogdata = {};
    }
  }
};
</script>
<style lang="scss" scoped>
.container_caapLog {
  margin-top: 20px;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  @media screen and (max-width: 399px){
      width: 50%;
      margin-left: 20px;
  }
  .item {
    height: 23px;
  }
  input {
    height: 100%;
  }
  .input_item {
    height: 100%;
    text-align: center;
  }
  .label-item {
    min-width: 70px;
  }
  .row-item{
      margin-top: 10px;
  }
}
.button-query {
  margin: 20px 0;
  width: 60px;
  background-color: rgb(43, 189, 226);
  text-align: center;
  height: 30px;
  border-radius: 6px;
}
</style>

