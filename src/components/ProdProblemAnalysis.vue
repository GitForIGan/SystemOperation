<template>
    <div id="sider-root">
        <back-title titleText="生产问题排查" back-url="/"></back-title>
            <i class="icon-left iconfont icon-menu" @click="toggleShowMenu"></i>
            <!-- <mt-button icon="back" @click="toggleShowMenu">back</mt-button> -->
        <my-menu :is-visible.sync="visible">
            <template slot="menu-title">项目</template>
        </my-menu>
    </div>

</template>
<script>
import myMenu from "@/components/common/siderBar/my-menu";
import mySubmenu from "@/components/common/siderBar/my-submenu";
import menuItem from "@/components/common/siderBar/menu-item";
import BackTitle from "./common/BackTitle";

export default {
  data() {
    return {
      visible: false
    };
  },
  components: {
    myMenu,
    mySubmenu,
    menuItem,
    BackTitle
  },
  methods:{
      toggleShowMenu:function(){
          console.log("侧边栏")
          this.visible = true;
      }
  }
};
</script>

<style lang="scss" scoped>
.icon-left{
    float: left;
}
</style>

