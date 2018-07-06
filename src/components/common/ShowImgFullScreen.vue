<template>
    <div class="dialog" v-show="childisShowDialog">
        <div :class="dialogClass">
            <div style="height: 100%;">
                <slot></slot>
            </div>
        </div>
        <div class="button" @click="hideLogDetail()">返回</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      childisShowDialog: false,
      childimgsrc: "",
    //   dialogClass:"dia_con"
    };
  },
  props: {'isShowDialog':{
             type: Boolean,
  },'dialogClass':{
       type: String,
       default: "dia_con"
  }},
  watch: {
    isShowDialog(data) {
      this.childisShowDialog = data;
    }
  },
  methods: {
    hideLogDetail: function() {
      this.$emit("update:isShowDialog", !this.childisShowDialog);
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  position: absolute;
  bottom: 1px;
  width: 100%;
  background-color: burlywood;
}
.container {
  left: 0px;
  right: 0px;
  height: 88%;
}
</style>

