<template>
    <div id="usr-info-root">
        <div>保全调度查询</div>
        <form id="queryItems" name="queryItems" novalidate>
            <div class=" common-form space-line flex flex_row">
                <div class="flex_1" style="padding-left: 10px; text-align:left;">
                    <label>查询条件：</label>
                </div>
                <div class="flex_1 item">
                    <div class="input_item">
                        <input v-model="queryNum" placeholder="请输入保单号" maxlength="20">
                    </div>
                </div>
                <div>
                    <input type="radio" v-model="mpitem" id="mp_o" value="MP_O">
                    <label for="mp_o">普通保全</label>
                    <input type="radio" v-model="mpitem" id="mp_p" value="MP_P">
                    <label for="mp_p">快速保全</label>
                </div>

                <div class="flex_1" style="text-align: right;">
                    <button class="button button_query" @click="queryLog()">
                        查询
                    </button>
                </div>
            </div>
        </form>
        <form id="queryFormMP" name="queryForm" class="space-line container_prodAnaly">
            <div class="common-form  flex flex_row" style="padding-top: 5px;">
                <div class="flex flex_2">
                    <div class="flex flex_2 item">
                        <label>保单号：</label>
                    </div>
                    <div class=" flex_2 item">
                        <div class="input_item">
                            <label>{{contractMP.prtNo}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>保全受理号：</label>
                    </div>
                    <div class="flex_2 item">
                        <div class="input_item">
                            <label>{{contractMP.acceptNo}}</label>
                        </div>
                    </div>
                </div>

            </div>
            <div class=" common-form  flex flex_row" style="padding-top: 5px;">
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>处理主机:</label>
                    </div>
                    <div class="flex_2 item">
                        <div class="input_item">
                            <label>{{contractMP.serverNo}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">

                    <div class="flex_2 item">
                        <label>失败次数</label>
                    </div>
                    <div class="flex_2 item">
                        <div class="input_item">
                            <label>{{contractMP.failNum}}</label>
                        </div>
                    </div>
                </div>

            </div>
            <div class=" common-form  flex flex_row" style="width: 100%">
                <div class="flex_2 item">
                    <label>受理时间(accept_date):</label>
                </div>
                <div class="flex_2 item" style="text-align: center;">
                    <div class="input_item">
                        <label>{{contractMP.acceptDate}}</label>
                    </div>
                </div>
            </div>
            <div class=" common-form  flex flex_row" style="width: 100%">
                <div class="flex_2 item">
                    <label>更新时间(update_time)：</label>
                </div>
                <div class="flex_2 item" style="text-align: center;">
                    <div class="input_item">
                        <label>{{contractMP.updateTime}}</label>
                    </div>
                </div>
            </div>
            <div class=" common-form  flex flex_row" style=" width: 100%">
                <div class="flex_2 item">
                    <label>调度状态：</label>
                </div>
                <div class="flex_2 item">
                    <div class="input_item">
                        <label>{{contractMP.contractStatus}}</label>
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

            <div class="text_area_tran_message">{{contractMP.tranMessage}}</div>

        </form>
        <button class="button button-reference" @click="showReferenceImg()">调度参考图</button>
        <show-img dialogClass="img-container" class="reference-img" :is-show-dialog.sync="isShowDialog">
            <img src="@/assets/reference/MPReference.jpg" alt="">
        </show-img>
        <!-- 保全受理号选择 -->
        <div class="dialog" v-show="isShowAcceptNo">
            <div class="dia_bg"></div>
            <div class="dia_con">
                <div style="text-align: center; background-color: #11f3e6;">受理号列表</div>
                <div class="flex flex_row" style="text-align: center; background-color: #11c1f3;">
                    <div class="flex_1">受理号</div>
                    <div class="flex_1">受理时间</div>
                </div>
                <div class="detailItem" style="max-height: 300px;">
                    <div class="flex flex_row" v-for="(obj, key,index) in contractMpArr" v-bind:key="index">
                        <a @click="queryMpTranStatusByAccepeNo(obj.acceptNo)" class="flex_1 checkAcceptNo">{{obj.acceptNo}}</a>
                        <div class="flex_1">{{obj.acceptDate}}</div>
                    </div>
                </div>

                <div class="button" @click="hideLogDetail()">返回</div>
            </div>
        </div>
    </div>

</template>
<script>
import HTTP_CONFIG from "../../config.js";
import ShowImg from "@/components/common/ShowImgFullScreen";

export default {
  data() {
    return {
      queryNum: "310001134851",
      itemName: "",
      contractMP: {},
      isShowDialog: false,
      contractMpArr: [],
      isShowAcceptNo: false,
      mpitem: "MP_O"
    };
  },
  components: {
    ShowImg
  },
  methods: {
    queryLog: function() {
      this.contractMP = {};
      var postData = {
        projectName: HTTP_CONFIG.CONFIG.PROJECT_NAME_CEIS,
        path: HTTP_CONFIG.CONFIG.QUERY_POLICY_TRAN_STATUS.path,
        param: JSON.stringify({
          policyNum: this.queryNum || "310001134851",
          itemName: this.mpitem
        })
      };
      //   console.log(HTTP_CONFIG.CONFIG.QUERY_USER_INFO.url);
      this.$axios
        .post(HTTP_CONFIG.CONFIG.urlPath, postData)
        .then(response => {
          var p_data = response;
          if (
            typeof p_data.obj != undefined &&
            p_data.obj.acceptNoArr != undefined &&
            p_data.obj.acceptNoArr.length > 0
          ) {
            this.contractMpArr = p_data.obj.acceptNoArr;
            // 记录上一次的查询保全受理号的保全保单号
            this.lastMpPrtNo = this.queryNum; // 后期再处理；
            for (var i = 0; i < this.contractMpArr.length; i++) {
              // 转换时间
              this.contractMpArr[i].acceptDate = this.dateToString(
                this.contractMpArr[i].acceptDate.time
              );
            }
            this.isShowAcceptNo = true;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 调度参考图
    showReferenceImg: function() {
      this.isShowDialog = true;
    },
    // 后台日期转成字符串
    dateToString: function(dateObj) {
      var date = new Date();
      date.setTime(dateObj); //value通过截取字符串只取数字。
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
    hideLogDetail: function() {
      this.isShowAcceptNo = false;
    },
    queryMpTranStatusByAccepeNo: function(acceptNo) {
      this.contractMP = {};
      var postData = {
        projectName: HTTP_CONFIG.CONFIG.PROJECT_NAME_CEIS,
        path: HTTP_CONFIG.CONFIG.QUERY_MP_POLICY_TRAN_STATUS.path,
        param: JSON.stringify({
          acceptNo: acceptNo.toString() || ""
        })
      };
      //   console.log(HTTP_CONFIG.CONFIG.QUERY_USER_INFO.url);
      this.$axios
        .post(HTTP_CONFIG.CONFIG.urlPath, postData)
        .then(response => {
          var p_data = response;
          if (p_data.result == "0") {
            this.isShowAcceptNo = false;
            // 显示查询信息
            if (
              typeof p_data.obj != undefined &&
              p_data.obj.posTranObj != undefined
            ) {
              var contractMP = p_data.obj.posTranObj;
            }
            if (
              typeof contractMP != undefined &&
              typeof contractMP.acceptDate != undefined
            ) {
              this.contractMP.acceptDate = this.dateToString(
                contractMP.acceptDate.time
              );
            }
            if (
              typeof contractMP != undefined &&
              typeof contractMP.updateTime != undefined
            ) {
              this.contractMP.updateTime = this.dateToString(
                contractMP.updateTime.time
              );
            }
            // 保单号
            if (
              typeof contractMP != undefined &&
              typeof contractMP.prtNo != undefined
            ) {
              // this.contractMP.prtNo = this.queryNum;
            }
            // 保全受理号
            if (
              typeof contractMP != undefined &&
              typeof contractMP.acceptNo != undefined
            ) {
              this.contractMP.acceptNo = contractMP.edorAcceptNo;
            }
            // 失败次数
            if (
              typeof contractMP != undefined &&
              typeof contractMP.failNum != undefined
            ) {
              this.contractMP.failNum = contractMP.failNum;
            }

            // 失败次数
            if (
              typeof contractMP != undefined &&
              typeof contractMP.serverNo != undefined
            ) {
              this.contractMP.serverNo = contractMP.serverNo;
            }

            // 调度状态 主节点-次节点-状态
            if (
              typeof contractMP != undefined &&
              typeof contractMP.mainProc != undefined &&
              typeof contractMP.procNode != undefined &&
              typeof contractMP.procStatus != undefined
            ) {
              this.contractMP.contractStatus =
                contractMP.mainProc +
                "-" +
                contractMP.procNode +
                "-" +
                contractMP.procStatus;
            }
            // 报文
            if (
              typeof contractMP != undefined &&
              typeof contractMP.tranMessage != undefined
            ) {
              this.contractMP.tranMessage = contractMP.tranMessage;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    choosempItem: function() {}
  }
};
</script>
<style lang="scss" scoped>

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
.button-reference {
  position: absolute;
  bottom: 5px;
  width: 100%;
  left: 0;
  background-color: #11c1f3;
}
.button_query {
  background-color: #11c1f3;
}
.container_prodAnaly {
  text-align: left;
  .item {
    min-width: 105px;
    text-align: left;
    justify-content: left;
  }
}
.checkAcceptNo {
  text-decoration-line: underline;
  margin: 5px 0;
  text-decoration-color: #4d11f3
}
</style>

