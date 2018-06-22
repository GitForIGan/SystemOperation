<template>
    <div class="root-item">
        <div class="item-container common-form">
            <div class="flex flex_1">
                <div class="flex_1 ">
                    <label>{{labeText}}</label>
                </div>
                <div class="flex_2 item">
                    <div class="input_item">
                        <input ng-modle="caapLogQuery.projectName" placeholder="0或-1" maxlength="10">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['labeText','placeholder']
};
</script>
<style lang="scss" scoped>
$border-color:#d1d3d6;
.item-container {
  width: 50%;
  height: auto;
  overflow-x: visible;
  .input_item {
    width: 100%;
    height: auto;
    // height: 1.5rem;
    input {
      border:1px solid $border-color;
      width: 100%;
      text-align: center;
      /*max-width: inherit;*/
    }
  }
  label {
    min-width: 60px;
  }
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
</style>
