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
                <el-dropdown-item command="user">用户手册</el-dropdown-item>
                <el-dropdown-item command="lesson">获取帮助</el-dropdown-item>
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
      return this.$store.state.loginflag
    }
  },
  methods: {
    handlerCommand (command) {
      if (this.$store.state.token && this.$store.state.loginflag) {
        this.$router.push(command)
      } else {
        alert('请登陆！')
        this.$emit('loginevent')
      }
      // console.log(command)
    },
    handleLogin () {
      if (this.$store.state.loginflag) {
        alert('退出')
        window.localStorage.removeItem('username')
        this.$store.commit('logout')
        if (this.$router.history.current.fullPath !== '/') {
          this.$router.push('/')
        }
      } else {
        alert('登陆')
        this.$emit('loginevent')
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
