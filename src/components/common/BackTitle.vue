<template>
    <div id="root-title">
        
        <div id="back-title">
            <router-link :to="backUrl">
                <button class="back-button">返回</button>
            </router-link>
            <div class="title-text" v-text="titleText"></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      titleText1: ""
    };
  },
  props: ["titleText", 'backUrl']
};
</script>
<style lang="scss" scoped>
$button-color: white;
.back-button {
  color: $button-color;
  font-size: 10px;
  display: inline-block;
  position: absolute;
  left: 5px;
}
.title-text {
  @extend .back-button;
  position: relative;
  padding-top: 15px;
  vertical-align: middle;
  font-size: 15px;
}
#back-title {
  background-color: rgb(33, 192, 231);
  width: 100%;
  height: 40px;
}
#root-title{
    background-color: rgb(33, 192, 231);
}
</style>

