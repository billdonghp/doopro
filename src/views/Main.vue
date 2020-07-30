<template>
  <div id="main">
    <el-container>
      <el-header>
        <Header
          :name="name"
          :date="date"
          :flag="flag"
        />
      </el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-button
        type="primary"
        @click="clickFn"
      >ABOUT</el-button>
      <el-button @click="clickFn2">INFO</el-button>
    </el-container>
  </div>
</template>
<script>
// import Header from '@/components/Header.vue'
export default {
  data () {
    return {
      name: '程国前',
      date: '2020-06-19',
      flag: '退出'
    }
  },
  components: {
    // Header
  },
  methods: {
    clickFn () {
      this.$store.commit('edit', { age: 15 })
      alert(this.$store.state.loginflag + this.$store.state.token)
      this.$router.push('/about')
    },
    clickFn2 () {
      this.$router.push('/info')
    }
  }
}
</script>
