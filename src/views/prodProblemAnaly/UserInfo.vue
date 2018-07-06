<template>
    <div id="usr-info-root">
        <div class="space-line header-title">代理人信息查询</div>
        <form id="queryForm" class="space-line" name="queryForm" novalidate>

            <div class="container_prodAnaly flex flex_row space-line queryContainer">
                <div class="flex_1" style="padding-left: 10px;">
                    <label>查询工号</label>
                </div>
                <div class="flex_3 item">
                    <div class="input_item">
                        <input v-model="agentCode" placeholder="请输入工号" maxlength="10">
                    </div>
                </div>
                <div class="flex_1">
                    <button class="button_query" @click="queryUserInfo()">
                        查询
                    </button>
                </div>
            </div>
            <div class="sub-title-text">t_user</div>
            <div class="container_prodAnaly common-form  flex flex_row" style="padding-top: 5px;">
                <div class="flex flex_1 ">
                    <div class="flex_2 item">
                        <label>姓名：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{userObj.userName}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>有效状态：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{userObj.isValid}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_prodAnaly common-form  flex flex_row">
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>手机号码：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{userObj.phoneNum}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>所属渠道：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{userObj.channal}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_prodAnaly common-form  flex flex_row">
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>锁定状态：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{userObj.accountStatus}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>在职状态：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{userObj.statnm}}</label>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container_prodAnaly common-form  flex flex_row">
                <div class="flex_2 item">
                    <label>用户类型：</label>
                </div>
                <div class="flex_3 item">
                    <div class="input_item">
                        <label>{{userObj.userType}}</label>
                    </div>
                </div>
            </div>
            <div class="container_prodAnaly common-form  flex flex_row">
                <div class="flex_2 item">
                    <label>证件号码：</label>
                </div>
                <div class="flex_3 item">
                    <div class="input_item">
                        <label>{{userObj.idNum}}</label>
                    </div>
                </div>
            </div>
        </form>
        <form id="queryForm" class="space-line" name="queryForm" novalidate>
            <div class="sub-title-text">prjSubAgent</div>
            <div class="container_prodAnaly common-form  flex flex_row">
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>姓名：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{prjSubAgent.employeeName}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>手机号码：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{prjSubAgent.mobile}}</label>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container_prodAnaly common-form  flex flex_row">
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>所属渠道：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{prjSubAgent.networkName}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>在职状态：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{prjSubAgent.statusName}}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container_prodAnaly common-form  flex flex_row">
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>所属分公司：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{prjSubAgent.beyongCompany}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>展业证有效期：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{prjSubAgent.licenseDate}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_prodAnaly common-form  flex flex_row">
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>中心子公司编码：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{prjSubAgent.affiliateNum}}</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class="flex_2 item">
                        <label>营管处：</label>
                    </div>
                    <div class="flex_3 item">
                        <div class="input_item">
                            <label>{{prjSubAgent.mgmtDeptName}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_prodAnaly common-form  flex flex_row" >
                <div class="flex_2 item">
                    <label>证件号码：</label>
                </div>
                <div class="flex_3 item">
                    <div class="input_item">
                        <label>{{prjSubAgent.idNumber}}</label>
                    </div>
                </div>
            </div>
        </form>
        <label style="color:red">提示：{{resultMsg}}</label>
    </div>
</template>
<script>
import HTTP_CONFIG from "../../config.js";
export default {
  data() {
    return {
      userObj: {},
      prjSubAgent: {},
      resultMsg: "",
      agentCode: "061A110011"
    };
  },
  methods: {
    queryUserInfo: function() {
      if (typeof this.agentCode == "undefined" || this.agentCode == "") {
        console.log("请录入工号！", "提示");
        return;
      }
      // 清空数据
      this.userObj = {};
      this.prjSubAgent = {};
      var postData = {
        projectName: HTTP_CONFIG.CONFIG.PROJECT_NAME_CEIS,
        path: HTTP_CONFIG.CONFIG.QUERY_USER_INFO.path,
        param: JSON.stringify({
          agentCode: this.agentCode
        })
      };
      //   console.log(HTTP_CONFIG.CONFIG.QUERY_USER_INFO.url);
      this.$axios
        .post(HTTP_CONFIG.CONFIG.urlPath, postData)
        .then(response => {
          var p_data = response;
          //   console.log(response);
          // t_user 和prjSubAgent表同时存在该用户
          if (
            typeof p_data.obj != "undefined" &&
            typeof p_data.obj.tUser != "undefined"
          ) {
            var userObj = p_data.obj.tUser;
            if (typeof userObj.userName != "undefined") {
              this.userObj.userName = userObj.userName;
            }
            // 证件号码
            if (typeof userObj.idNumber != "undefined") {
              this.userObj.idNum = userObj.idNumber;
            }
            // 手机号码
            if (typeof userObj.mobile != "undefined") {
              this.userObj.phoneNum = userObj.mobile;
            }
            // 所属渠道
            if (typeof userObj.chnlNm != "undefined") {
              this.userObj.channal = userObj.chnlNm;
            }
            // 手用户状态
            if (typeof userObj.accountStatus != "undefined") {
              this.userObj.accountStatus =
                userObj.accountStatus == "0" ? "正常" : "锁定";
            }
            // 在职状态
            if (typeof userObj.statNm != "undefined") {
              this.userObj.statnm = userObj.statNm;
            }
            // 用户类型
            if (typeof userObj.userType != "undefined") {
              if (userObj.userType == "10001") {
                this.userObj.userType = "10001-终端用户营销员";
              } else if (userObj.userType == "10002") {
                this.userObj.userType = "10002-后端用户（内勤登录后台）";
              } else if (userObj.userType == "10003") {
                this.userType = "10003-后端用户（内勤前端登录，客服人员";
              } else if (userObj.userType == "10004") {
                this.userObj.userType = "10004-访客";
              } else if (userObj.userType == "10005") {
                this.userObj.userType = "10005-内勤（可登录前端和后台";
              }
            }
            // 用户类型
            if (typeof userObj.valid != "undefined") {
              this.userObj.isValid = userObj.valid == "1" ? "1-有效" : "0-无效";
            }
          }
          // prjSubAgent
          if (
            typeof p_data.obj != "undefined" &&
            typeof p_data.obj.prjSubAgent != "undefined"
          ) {
            var prjSubAgent = p_data.obj.prjSubAgent.prjSubAgent;
            if (typeof prjSubAgent.employeeName != "undefined") {
              // 渠道姓名
              this.prjSubAgent.employeeName = prjSubAgent.employeeName;
            }
            if (typeof prjSubAgent.mobile != "undefined") {
              // 渠道手机号
              this.prjSubAgent.mobile = prjSubAgent.mobile;
            }
            if (typeof prjSubAgent.networkName != "undefined") {
              // 渠道
              this.prjSubAgent.networkName =
                (typeof prjSubAgent.networkNumber != "undefined"
                  ? prjSubAgent.networkNumber
                  : "") + prjSubAgent.networkName;
            }
            if (typeof prjSubAgent.statusName != "undefined") {
              // 在职状态
              this.prjSubAgent.statusName = prjSubAgent.statusName;
            }

            if (typeof prjSubAgent.branchCompanyNum != "undefined") {
              // 所属分公司
              this.prjSubAgent.beyongCompany =
                prjSubAgent.branchCompanyNum +
                (typeof prjSubAgent.branchCompanyName != "undefined"
                  ? prjSubAgent.branchCompanyName
                  : "");
            }
            if (typeof prjSubAgent.licenseDate != "undefined") {
              // 展业资格有效期
              this.prjSubAgent.licenseDate = prjSubAgent.licenseDate;
            }
            if (typeof prjSubAgent.affiliateNum != "undefined") {
              // 中心子公司编码
              this.prjSubAgent.affiliateNum = prjSubAgent.affiliateNum;
            }
            if (typeof prjSubAgent.mgmtDeptName != "undefined") {
              // 营管处
              this.prjSubAgent.mgmtDeptName = prjSubAgent.mgmtDeptName;
            }
            if (typeof prjSubAgent.idNumber != "undefined") {
              // 营管处
              this.prjSubAgent.idNumber = prjSubAgent.idNumber;
            }
          }
          // console.log(JSON.stringify(p_data.userInfo));
          if (
            typeof p_data.obj != "undefined" &&
            typeof p_data.obj.msg != "undefined"
          ) {
            this.resultMsg = p_data.obj.msg;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.container_prodAnaly {
  width: 100%;
  height: auto;
  text-align: left;
  .button_query {
    height: 30px;
    width: 60px;
    font-size: 10px;
    min-height: 20px;
    text-align: center;
    line-height: 0;
    background-color: #21c0e7;
    border-radius: 5%;
  }
  .input_item input {
    height: 25px;
  }
  .item {
    min-width: 105px;
    text-align: left;
  }
}
.text_area_tran_message {
  min-height: 60px;
  max-height: 400px;
  width: 100%;
  border: 1px solid rgb(132, 139, 141);
  margin-top: 15px;
  overflow: scroll;
}
.space-line {
  padding-bottom: 5px;
  border-bottom: 1px solid #11c1f3;
}
.header-title {
  padding-bottom: 20px;
}
.queryContainer {
  padding: 10px 0;
  background-color: #11c1f3;
}
.sub-title-text {
  text-align: left;
  color: #11c1f3;
}
</style>

 