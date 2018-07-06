<template>
    <div id="login-root">
        <div class="banner">
            <img src="@/assets/login_bk.png" alt="" />
        </div>
        <div class="login-item flex">
            <div class="flex_1">
                <!-- <label for="userName">用户名</label> -->
                <img src="@/assets/userName.png" />
                <input type="text" name="userName" v-model="userName">

            </div>

        </div>
        <div class="login-item flex">
            <div class="flex_1">
                <img src="@/assets/password.png" />
                <input type="password" name="password" v-model="password">

            </div>

        </div>
        <button class="query-button" @click="login()">登录</button>
        <div class="footer-label">
            <label>忘记密码</label>
            <label>自助注册</label>
        </div>

    </div>
</template>
<script>
import HTTP_CONFIG from "../config.js";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      var agentCode = this.userName;
      var password = this.password;
      var postData = {
        passWord: password,
        userName: agentCode
      };
      this.$axios
        .post(HTTP_CONFIG.CONFIG.LOGIN_SYSTEST.url, postData)
        .then(response => {
          var data = response;
          console.log(response);
          this.$router.push('/home');
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
#login-root {
  overflow: hidden;
}
.login-item {
  width: 100%;
  position: relative;
  text-align: left;
  margin-top: 20px;
  margin-left: 30px;
  border: none;
  border-bottom: 1px solid #dddddd;
  input {
    height: 30px;
    width: 60%;
    margin-left: 20px;
    border: none;
  }
  img {
    width: 20px;
    height: auto;
  }
}
.query-button {
  margin-top: 20px;
  height: 40px;
  width: 80%;
  border-radius: 6px;
  background-color: #8f98e7;
}
.banner {
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
}
.footer-label {
  margin-top: 60px;
  label{
      color:#2096F3;
  }
}
</style>


