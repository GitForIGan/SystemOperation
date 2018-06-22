<template>
    <div id="caap-log">
        <back-title titleText="渠道日志查询" backUrl='/'></back-title>
        <form id="queryForm">
            <div class="container_caapLog common-form  flex flex_row">
                <div class="flex flex_1">
                    <div class="flex_1 ">
                        <label>工程名</label>
                    </div>
                    <div class="flex_2 item">
                        <div class="input_item">
                            <input v-model="caapLogQuery.projectName" placeholder="请录入工号" maxlength="10">
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class=" flex_1">
                        <label>交易结果</label>
                    </div>
                    <div class="flex_2 item">
                        <div class="input_item">
                            <input v-model="caapLogQuery.result" placeholder="0或-1" maxlength="2">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_caapLog common-form  flex flex_row">
                <div class="flex flex_1">
                    <div class="flex_1 ">
                        <label>登录工号</label>
                    </div>
                    <div class="flex_2 item">
                        <div class="input_item">
                            <input v-model="caapLogQuery.agentCode" placeholder="请录入工号" maxlength="10">
                        </div>
                    </div>
                </div>
                <div class="flex flex_1">
                    <div class=" flex_1">
                        <label>查询条数</label>
                    </div>
                    <div class="flex_2 item">
                        <div class="input_item">
                            <input v-model="caapLogQuery.itemCounts" placeholder="请录入查询条数" maxlength="2">
                        </div>
                    </div>
                </div>
            </div>
            <button class="query-button" @click="queryFun">查询</button>
        </form>
    </div>
</template>
<script>
import BackTitle from "./common/BackTitle"
export default {
  data(){
    return {
      caapLogQuery: {
        projectName: "CAAP",
        result: "",
        agentCode: "",
        itemCounts: ""
      },
      "test":"123"
    }
    // caapLogQuery.projectName= "sdfsdfdsf";
    // return caapLogQuery;
  },
  components: {
    BackTitle
  },
  methods: {
    queryFun: function(){
      var postData = {
        projectName:    this.caapLogQuery.projectName,
        resultCode:     this.caapLogQuery.result,
        agentCode:      this.caapLogQuery.agentCode,
        itemCounts:     this.caapLogQuery.itemCounts
      };
      console.log(postData);
      this.$http.post(CONFIG.QUERY_CAAP_LOG.url,postData,{emulateJSON:true})
      .then(function(response) {
        console.log(response);
      })
    }
  }
}
</script>





<style lang="scss" scoped>
.container_caapLog {
  width: 100%;
  height: auto;
  overflow-x: visible;
  .input_item {
    width: 100%;
    height: auto;
    input {
      width: 100%;
      text-align: center;
      /*max-width: inherit;*/
    }
  }
  label {
    min-width: 60px;
  }
}
.headContainer {
  height: 40px;
  width: 100%;
}
.button_query {
  width: 60px;
  height: 30px;
  margin: 10px 1px;
  border-color: transparent;
  background-color: #11c1f3;
}
.common-form {
  .form-container {
    margin-bottom: 10px;
  }
  .item {
    padding: 10px 0px;
    border: 0;
    overflow: visible;
    font-size: 16px;
    input {
      border: 0px solid #ebebee;
      height: 1.5rem;
      background-color: #ffffff;
      border: 1px solid #d1d3d6;
      max-width: 120px;
    }
  }
}
.query-button {
  width: 100%;
  height: 30px;
  color: white;
  background-color: #11c1f3;
  border: none;
}
</style>




