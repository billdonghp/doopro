<template>
  <div id="login">
    <el-form label-width="80px">
      <h1 class="title">用户登录</h1>
      <el-form-item label="用户名">
        <el-input
          type="text"
          v-model="form.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%;"
          @click="doSubmit()"
        >提交</el-button>
      </el-form-item>
      <el-row style="text-align: center; margin-top: -10px;;">
        <el-link type="primary">忘记密码</el-link>
        <el-link
          type="primary"
          @click="doRegister()"
        >用户注册</el-link>
      </el-row>
    </el-form>
    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>请输入账号和密码</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      dialogVisible: true
    }
  },
  methods: {
    doSubmit () {
      // this.$axios({
      //   method: 'post',
      //   url: 'lg/login.action',
      //   data: this.form
      // }).then(res => { console.log(res.data) }).catch(res => {
      // })
      this.$store.commit('login', { username: '20120262' })
      this.$router.push('about')
    },
    handleClose () {

    }
  }
}
</script>
