<template>
  <div class="home">
    <div class="container">
            <div class="flex_row">
                <div class="module flex_cloum">
                    <div class="flex_1 icon" ui-sref=".networkTest">
                        <router-link to="/China"><img src="../assets/home/network.png"></router-link>
                    </div>
                    <div class="font_bottom flex_1">
                        <span>网络检测</span>
                    </div>
                </div>
                <div class=" module flex_cloum">
                    <div class="flex_1 icon" ui-sref=".caapLogQuery">
                        <router-link to="/caapLogQuery"><img src="../assets/home/caap_log.png" alt="" /></router-link>
                    </div>
                    <div class="font_bottom flex_9">
                         <span>渠道日志</span>
                    </div>
                </div>
                <div class=" module flex_cloum">
                    <div class="flex_1 icon" ui-sref=".getErrorLog">
                        <img src="../assets/home/errorLog.png" alt="" />
                    </div>
                    <div class="font_bottom flex_9">
                        <span>异常日志</span>
                    </div>
                </div>

                <div class=" module flex_cloum">
                    <div class="flex_1 icon" ui-sref=".queryAppErrorLog">
                        <router-link to="/AppErrorLog"><img src="../assets/home/appLog.png" alt="" /></router-link>
                    </div>
                    <div class="font_bottom flex_9">
                        <span>APP错误日志</span>
                    </div>
                </div>
                <div class=" module flex_cloum">
                    <div class="flex_1 icon">
                        <router-link to="/prodProblemAnaly"><img src="../assets/home/appLog.png" alt="" /></router-link>
                    </div>
                    <div class="font_bottom flex_9">
                        <span>生产问题</span>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
    width: 100%;
    height: auto;
}
.container{
	width: 100%;
	height: 25%;
}
/**/

.container .module{
	/*margin: 5px;*/
	height: auto;
	width: 80px;
	border: 0px;
	padding: 5px;
}
.container .module img{
	width: 100%;
	height: auto;
	margin: 0px;
}
.container .module .icon{
	width: 70px;
    height: 60px;
    text-align:center;
}

.container .module img{
	width: 50px;
    height: 50px;
    align-content: center;
}

.container .font_bottom{
	width: 100%;
	height: auto;
	font:inherit;
	font-size: 10px !important;
    text-align: center;
    margin: 0px;
}
.container .testmodule{
	height: 600px;
	width: 100px;
}

.container .testmodule img{
	max-width: 100%;
	max-height: auto;
}
.container .testmodule .imgFram{
	height: 100%;
	width: 100%；
}

.testinput{
	max-width: 100px;
	overflow-x: scroll;
}
/* 修改提示框 */
.popup-body{        
    text-align: center;
}

.container .module img{
	width: 50px;
    height: 50px;
    align-content: center;
}

.container .font_bottom{
	width: 100%;
	height: auto;
	font:inherit;
	font-size: 10px !important;
    text-align: center;
    margin: 0px;
}
.container .testmodule{
	height: 600px;
	width: 100px;
}

.container .testmodule img{
	max-width: 100%;
	max-height: auto;
}
.container .testmodule .imgFram{
	height: 100%;
	width: 100%；
}

.testinput{
	max-width: 100px;
	overflow-x: scroll;
}
</style>
