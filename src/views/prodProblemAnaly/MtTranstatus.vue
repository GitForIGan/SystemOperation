<template>
    <div id="usr-info-root">
        <div>投保调度查询</div>
        <form id="queryItems" name="queryItems" novalidate>
            <div class=" common-form space-line flex flex_row">
                <div class="flex_1" style="padding-left: 10px; text-align:left;">
                    <label>查询条件：</label>
                </div>
                <div class="flex_1 item">
                    <div class="input_item">
                        <input v-model="queryNum" placeholder="请输入投保单号或理赔受理号" maxlength="20">
                    </div>
                </div>
                <div class="flex_1" style="text-align: right;">
                    <button class="button button-calm  button_query" @click="queryLog()">
                        查询
                    </button>
                </div>
            </div>
        </form>
        <form id="queryFormMT" name="queryForm" novalidate class="space-line  container-mt">
            <div class=" common-form  flex flex_row">
                <div class="flex_2 item">
                    <label>保单号</label>
                </div>
                <div class="flex_2 item">
                    <div class="input_item">
                        <label>{{contract.prtNo}}</label>
                    </div>
                </div>
            </div>
            <div class=" common-form  flex flex_row" style="width: 100%">
                <div class="flex_2 item">
                    <label>受理时间(accept_date):</label>
                </div>
                <div class="flex_2 item">
                    <div class="input_item">
                        <label>{{contract.acceptDate}}</label>
                    </div>
                </div>
            </div>
            <div class=" common-form  flex flex_row" style="width: 100%">
                <div class="flex_2 item">
                    <label>更新时间(update_time)：</label>
                </div>
                <div class="flex_2 item">
                    <div class="input_item">
                        <label>{{contract.updateTime}}</label>
                    </div>
                </div>
            </div>
            <div class=" common-form  flex flex_row" style=" width: 100%">
                <div class="flex_1 item">
                    <label>调度状态：</label>
                </div>
                <div class="flex_1 item">
                    <div class="input_item">
                        <label>{{contract.contractStatus}}</label>
                    </div>
                </div>
            </div>
            <div class=" common-form  flex flex_row" style=" width: 100%">
                <div class="flex_2 item">
                    <label>调度报文：</label>
                </div>
                <!-- <div class="flex_3 item">
                    <div class="input_item">
                        <label>{{contract.tran_message}}</label>
                    </div>
                </div> -->
            </div>

            <div class="text_area_tran_message">{{contract.tranMessage}}</div>
        </form>
        <button  class="button button-reference" @click="showReferenceImg()">调度参考图</button>
        <show-img   dialogClass="img-container" class="reference-img" :is-show-dialog.sync="isShowDialog">
            <img src="@/assets/reference/MTReference.jpg" alt="">
        </show-img>

        <!-- 投保结束 -->
    </div>
</template>
<script>
import HTTP_CONFIG from "../../config.js";
import ShowImg from  "@/components/common/ShowImgFullScreen";

export default {
  data() {
    return {
      queryNum: "0691910309",
      formData: {},
      contract: {},
      isShowDialog: false    
    };
  },
  components:{
      ShowImg
  },
  methods: {
    queryLog: function() {
      //   this.contract = {};
      var postData = {
        projectName: HTTP_CONFIG.CONFIG.PROJECT_NAME_CEIS,
        path: HTTP_CONFIG.CONFIG.QUERY_POLICY_TRAN_STATUS.path,
        param: JSON.stringify({
          policyNum: this.queryNum || "0691910309",
          itemName: "MT"
        })
      };
      //   console.log(HTTP_CONFIG.CONFIG.QUERY_USER_INFO.url);
      this.$axios
        .post(HTTP_CONFIG.CONFIG.urlPath, postData)
        .then(response => {
          console.log(response);
          var p_data = response;
          if (
            typeof p_data.obj != undefined &&
            p_data.obj.contractObj != undefined
          ) {
            var contractObj = p_data.obj.contractObj;
          }
          if (
            typeof contractObj != undefined &&
            typeof contractObj.acceptDate != undefined
          ) {
            this.$set(
              this.contract,
              "acceptDate",
              this.dateToString(contractObj.acceptDate.time)
            );
          }
          if (
            typeof contractObj != undefined &&
            typeof contractObj.updateTime != undefined
          ) {
            this.contract.updateTime = this.dateToString(
              contractObj.updateTime.time
            );
          }
          // 保单号
          if (
            typeof contractObj != undefined &&
            typeof contractObj.prtNo != undefined
          ) {
            this.contract.prtNo = contractObj.prtNo;
          }
          // 调度状态 主节点-次节点-状态
          if (
            typeof contractObj != undefined &&
            typeof contractObj.mainProc != undefined &&
            typeof contractObj.procNode != undefined &&
            typeof contractObj.procStatus != undefined
          ) {
            this.contract.contractStatus =
              contractObj.mainProc +
              "-" +
              contractObj.procNode +
              "-" +
              contractObj.procStatus;
          }
          // 报文
          if (
            typeof contractObj != undefined &&
            typeof contractObj.tranMessage != undefined
          ) {
            this.contract.tranMessage = contractObj.tranMessage;
          }

        //   console.log("dsfds" + this.contract.prtNo);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 调度参考图
    showReferenceImg:function(){
        this.isShowDialog = true;
    },
    // 后台日期转成字符串
    dateToString: function(dateObj) {
      var date = new Date();
      date.setTime(dateObj); //value通过截取字符串只取数字。
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }
  }
};
</script>
<style lang="scss" scoped>
.space-line {
  padding-top: 15px;
  border-top: 1px solid #11c1f3;
}
.text_area_tran_message {
  min-height: 60px;
  max-height: 340px;
  width: 100%;
  border: 1px solid rgb(132, 139, 141);
  margin-top: 15px;
  overflow: scroll;
}
.container-mt {
  text-align: left;
}
.input_item input {
  height: 30px;
}
.button-reference{
    position: absolute;
    bottom: 5px;
    width: 100%;
    left: 0;
    background-color: #11c1f3;
}
</style>

