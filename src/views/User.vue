<template>
  <div id="user">
    <div>User {{ username }}</div>
    <el-button type="primary" @click="goinfo">回退</el-button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['username'],
  methods: {
    goinfo () {
      this.$router.go(-1)
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
