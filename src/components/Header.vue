<template>
  <div id="header">
    <el-row
      type="flex"
      justify="space-between"
      align="middle"
    >
      <el-col :span="3">
        <img
          alt="Vue logo"
          src="../assets/logo.png"
        >
      </el-col>
      <el-col :span="5">
        <el-row>
          <el-col :span="12">
            <el-dropdown
              trigger="click"
              @command="handlerCommand"
            >
              <span class="el-dorpdown-link"><i class="el-icon-setting"></i>选项<i class="el-icon-arrow-down el-icon--right" /></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="about">有形效果产出方法</el-dropdown-item>
                <el-dropdown-item command="info">评价基准</el-dropdown-item>
                <el-dropdown-item>用户手册</el-dropdown-item>
                <el-dropdown-item>获取帮助</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="12">
            <el-button
              v-show="!icon"
              @click="handleLogin"
              icon="el-icon-lock"
              size="mini"
              circle
            ></el-button>
            <el-button
              v-show="icon"
              @click="handleLogin"
              icon="el-icon-unlock"
              size="mini"
              circle
            ></el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    name: String,
    date: String,
    flag: String
  },
  computed: {
    icon () {
      return this.flag === '1' ? 'true' : 'false'
    }
  },
  methods: {
    handlerCommand (command) {
      if (this.$store.state.token && this.$store.state.loginflag) {
        this.$router.push(command)
      }
      // console.log(command)
    },
    handleLogin () {
      if (this.$store.state.loginflag) {
        window.localStorage.removeItem('username')
        this.$store.commit('logout')
        this.$router.push('/')
        // alert('退出')
      } else {
        this.$emit('loginevent')
        // this.$store.commit('login', { username: window.localStorage.getItem('username') })
        // alert('登陆')
      }
    }
  }
}
</script>
<style  scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
</style>
