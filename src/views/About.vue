<template>
  <el-button @click="aboutsay()">About</el-button>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    aboutsay () {
      alert('hi')
      this.$router.push('info')
    }
  }
}
</script>
