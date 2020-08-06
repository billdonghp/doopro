<template>
  <div class="home">
    <!-- <img
      alt="Vue logo"
      src="../assets/logo.png"
    > -->
    <el-container>
      <el-header>
        <Header
          @loginevent="loginevent"
        />
      </el-header>
      <p>{{ loginflag }}</p>
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
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header
  },
  data () {
    return {
      dialogVisiable: false,
      form: {
        isSave: false,
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState([
      'loginflag'
    ])
  },
  methods: {
    onSubmit () {
      if (this.form.username === '20120262' && this.form.password === '123') {
        this.dialogVisiable = false
        this.$store.commit('login', { username: this.form.username })
        if (this.form.isSave) {
          localStorage.setItem('username', this.form.username)
        }
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
    if (localStorage.getItem('username')) {
      this.dialogVisiable = false
    } else {
      this.dialogVisiable = true
    }
  }
}
</script>
