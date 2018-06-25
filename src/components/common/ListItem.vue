<template>
<div class="dialog"  v-show="hideLogDetail">
    <div class="dia_bg"></div>
    <div class="dia_con">
        <div class="detailItem">
            <div class="flex_1 detailRowitem">reqUrl</div>
            <div v-for="(value,key,index) in showData" :key="index">
                <div class="flex_1 detailRowitem">{{key}}</div>
                <div class="flex_1">{{value}}</div>
            </div>
            <!-- <div class="flex_3 ">{{showData.reqUrl}}</div>
            <div class="flex_1 detailRowitem">reqParam</div>
            <div class="flex_3 ">{{showData.reqParam}}</div>
            <div class="flex_1 detailRowitem">clientIp</div>
            <div class="flex_3">{{showData.clientIp}}</div>
            <div class="flex_1 detailRowitem">machineIp</div>
            <div class="flex_3">{{showData.machineIp}}</div>
            <div class="flex_1 detailRowitem">agentCode</div>
            <div class="flex_3">{{showData.agentCode}}</div>
            <div class="flex_1 detailRowitem">globaltransnum</div>
            <div class="flex_3">{{showData.globaltransnum}}</div>
            <div class="flex_1 detailRowitem">transeStartTime</div>
            <div class="flex_3">{{showData.transeStartTime}}</div>
            <div class="flex_1 detailRowitem">transeEndTime</div>
            <div class="flex_3">{{showData.transeEndTime}}</div>
            <div class="flex_1 detailRowitem">result</div>
            <div class="flex_3">{{showData.result}}</div>
            <div class="flex_1 detailRowitem">resultCode</div>
            <div class="flex_3">{{showData.resultCode}}</div> -->
        </div>
        <div class="button" @click="hideLogDetailFun()">返回</div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            hideLogDetail:this.isShowListItem
        }
    },
    props:['showData','isShowListItem'],
    methods:{
        hideLogDetailFun:function(){
            this.hideLogDetail = false;
            this.$emit("ishowListItemFalse")
        }
    },
    watch: {
        isShowListItem(val) {
            this.hideLogDetail = val;//
            alert(val);
        }
    }
};
</script>

<style <style lang="scss" scoped>
.container {
  overflow-y: scroll;
  max-height: 500px;
}
.detailRowitem{
    width: 100%;
   background-color: #11c1f3;
}
</style>

