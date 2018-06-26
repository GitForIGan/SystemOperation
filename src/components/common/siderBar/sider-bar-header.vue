<template>
  <div class="sider-bar-header">
    <!-- 头部 -->
    <mt-header title="Home">
      <div style="display: inline-block" slot="left">
        <!-- <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link> -->
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sider-bar-header',
  components: {
    // dropdown
  },
  created () {
    this.$bus.$on('set-theme', (color) => {
      this.$el.querySelector('.mint-header').style.backgroundColor = color
    })
  },
  data () {
    return {
      theme: '#2e3238'
    }
  },
  methods: {
    sayhello () {
      console.log('hello word')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .mint-header {
    background-color: #2e3238;
  }

</style>
