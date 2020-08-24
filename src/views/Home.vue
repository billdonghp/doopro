<template>
  <div class="home">
    <!-- <img
      alt="Vue logo"
      src="../assets/logo.png"
    > -->
    <el-container>
      <el-header>
        <Header @loginevent="loginevent" />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
          </keep-alive>
          <!-- <MyMenu></MyMenu> -->
        </el-aside>
        <el-main>
          <p>你好</p>
          <h1>尊敬的 {{ getMemberInfo }} 用户</h1>
          <router-view />
        </el-main>
      </el-container>
      <!-- <p>{{ loginflag }}</p> -->
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
            v-model="form.name"
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
import MyMenu from '@/components/Menu.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    MyMenu
  },
  data () {
    return {
      dialogVisiable: false,
      form: {
        isSave: false,
        name: '',
        password: ''
      }
    }
  },
  computed: {
    currentTabComponent () {
      if (!this.dialogVisiable) {
        return 'MyMenu'
      } else {
        return null
      }
    },
    ...mapState([
      'loginflag'
    ]),
    ...mapGetters('user', ['getMemberInfo'])
  },
  methods: {
    ...mapMutations('user', ['setMemberInfo']),
    onSubmit () {
      this.$axios({
        url: 'doopro/user',
        method: 'post',
        data: this.form
      }
      ).then(res => {
        console.log(res)
        if (res.data.info === 'ok') {
          this.dialogVisiable = false
          this.$store.commit('login', { name: this.form.name })
          this.$store.commit('user/setMemberInfo', { userStatus: 0, userLevel: 0 })
          if (this.form.isSave) {
            localStorage.setItem('name', this.form.name)
          }
        } else {
          alert(res.data.info)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleClose () {
      this.dialogVisiable = false
    },
    loginevent () {
      this.dialogVisiable = true
    }
  },
  mounted () {
    if (localStorage.getItem('name')) {
      this.dialogVisiable = false
    } else {
      this.dialogVisiable = true
    }
  }
}
</script>
