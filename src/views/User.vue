<template>
  <div id="user">
    <div>User {{ username }}</div>
    <el-button type="primary" @click="goinfo">充值</el-button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['username'],
  methods: {
    goinfo () {
      // this.$router.go(-1)
      this.$store.commit('user/setMemberInfo', { userStatus: 1, userLevel: 0 })
    }
  }
}
</script>
<style>
  #user{
    width: 200px;
    height: 300px;
    margin: 0 auto;
  }
</style>
