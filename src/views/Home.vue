<template>
  <div class="home">
    <!-- <img
      alt="Vue logo"
      src="../assets/logo.png"
    > -->
    <el-container>
      <el-header>
        <Header
          :flag="flag"
          @loginevent="loginevent"
        />
      </el-header>
      <router-view />
    </el-container>
    <el-dialog
      title="用户登陆"
      :visible.sync="dialogVisiable"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        ref="form"
        :model="form"
      >
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-switch v-model="form.isSave"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
          >登陆</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data () {
    return {
      flag: '',
      dialogVisiable: false,
      form: {
        isSave: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.form.username === '20120262' && this.form.password === '123') {
        console.log(this.form)
        this.dialogVisiable = false
        this.$store.commit('login', { username: this.form.username })
        // this.$router.push('main')
        window.localStorage.setItem('username', this.form.username)
      }
    },
    handleClose () {
      this.dialogVisiable = false
    },
    loginevent () {
      this.dialogVisiable = true
    }
  },
  mounted () {
    if (window.localStorage.getItem('username')) {
      this.dialogVisiable = false
      this.flag = '1'
      // this.$router.push('main')
    } else {
      this.dialogVisiable = true
      this.flag = '2'
    }
  }
}
</script>
