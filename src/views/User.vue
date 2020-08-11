<template>
  <div id="user">
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
    <div>User {{ username }}</div>
    <el-button type="primary" @click="goinfo">充值</el-button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['username'],
  data () {
    return {
      fit: 'fill',
      url: './assets/3.png'
    }
  },
  methods: {
    goinfo () {
      // this.$router.go(-1)
      this.$store.commit('user/setMemberInfo', { userStatus: 1, userLevel: 0 })
    }
  }
}
</script>
<style>
.img1{
  width:150px;
  height: 180px;
  background: url(../assets/1.jpg) center no-repeat;
  background-size: 100%;
}
.img2{
  width:150px;
  height: 180px;
  background: url(../assets/2.jpg) center no-repeat;
  background-size: 100%;
}
.img3{
  width:150px;
  height: 180px;
  background: url(../assets/3.png) center no-repeat;
  background-size: 100%;
}
</style>
