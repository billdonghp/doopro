<template>
  <div>

    <ul>
      <li
        v-for="(item,index) in books"
        :key="index"
      >{{item.name}} : {{item.price}}</li>
    </ul>
    <p>{{ age }}</p>
    <el-button
      type="primary"
      @click="add"
    ><i class="el-icon-plus"></i></el-button>
    <el-button
      type="primary"
      @click="subtract"
    ><i class="el-icon-minus"></i></el-button>
    <el-button
      type="danger"
      @click="addAction"
    ><i class="el-icon-plus"></i></el-button>
    <el-button
      type="danger"
      @click="subtractAction"
    ><i class="el-icon-minus"></i></el-button>
  </div>
</template>
<script>
export default {
  name: 'info',
  methods: {
    add () {
      this.$store.commit('add')
    },
    subtract () {
      this.$store.commit('subtract')
    },
    addAction () {
      this.$store.dispatch('addAction')
    },
    subtractAction () {
      this.$store.dispatch('subtractAction')
    }
  },
  computed: {
    age () {
      return `Store.state.age: ${this.$store.state.age}`
    },
    books () {
      return this.$store.getters.donebooksByName('java')
    }
  }
}
</script>
