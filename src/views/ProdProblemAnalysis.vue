<template>
  <div id="sider-root">
    <back-title titleText="生产问题排查" back-url="/home"></back-title>
    <i class="icon-left iconfont icon-menu" @click="toggleShowMenu"></i>
    <!-- <mt-button icon="back" @click="toggleShowMenu">back</mt-button> -->
    <my-menu :is-visible.sync="visible">
      <template slot="menu-title">项目</template>
      <my-submenu>
        <i slot="icon" class=' iconfont'></i>
        <template slot="submenu-title">
          生产数据查询</template>
        <menu-item route='/prodProblemAnaly/usrInfo'>
          <i slot='icon' class=' iconfont'></i>代理人信息查询</menu-item>
        <menu-item route='/prodProblemAnaly/mtTranStatus'>
          <i slot='icon' class=' iconfont'></i>投保调度查询</menu-item>
        <menu-item route='/prodProblemAnaly/mpTranStatus'>
          <i slot='icon' class=' iconfont'></i>保全调度查询</menu-item>
        <menu-item route='/'>
          <i slot='icon' class=' iconfont'></i>理赔调度查询</menu-item>
      </my-submenu>
    </my-menu>
    <!-- 局部路由 -->
    <!-- <div class="sub-header"> -->
      <router-view></router-view>
      <!-- <router-view/> -->
    <!-- </div> -->
  </div>

</template>
<script>
import myMenu from "@/components/common/siderBar/my-menu";
import mySubmenu from "@/components/common/siderBar/my-submenu";
import menuItem from "@/components/common/siderBar/menu-item";
import BackTitle from "@/components/common/BackTitle";

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
    methods: {
        toggleShowMenu: function() {
            console.log("侧边栏");
            this.visible = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.icon-left {
    float: left;
}
.sub-header{
  background-color: rgb(201, 205, 207);
  font-size: 14px;
  text-align: center;
}
</style>

