<template>
  <div id="about">
    <el-button type="primary" @click="goInfo()">Info</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goInfo () {
      this.$router.push({ name: 'user', params: { username: '2911' } })
    }
  }
}
</script>
<style>
  #about{
    width: 200px;
    height: 300px;
    margin: 0 auto;
  }
</style>
