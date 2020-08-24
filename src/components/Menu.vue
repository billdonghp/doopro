<template>
  <div id="menu">
    <el-radio-group
      v-model="isCollapse"
      style="margin-bottom: 20px;"
    >
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu
        v-for="(submenu,index) in menu"
        :index="submenu.id.toString()"
        :key="index"
      >
        <span slot="title">{{submenu.text}}</span>
        <el-menu-item
          v-for="(item,index) in submenu.children"
          :index="item.id.toString()"
          :key="index"
        >{{item.text}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      isCollapse: true,
      menu: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  activated () {
    this.$axios({
      method: 'post',
      url: 'main/menu'
    }).then(res => {
      this.menu = res.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
