<template>
  <div>
    <p class="p">{{ donebooksByName('python') }}</p>
    <ul>
      <li
        v-for="(item,index) in donebooksByName('python')"
        :key="index"
      >{{item.name}} : {{item.price}}</li>
    </ul>
    <p>{{ getS }}</p>
    <div>
    <el-button-group>
      <el-button
      type="primary"
      @click="add"
    ><i class="el-icon-plus"></i></el-button>
    <el-button
      type="primary"
      @click="subtract"
    ><i class="el-icon-minus"></i></el-button>
    </el-button-group>
    </div>
    <div>
    <el-button-group>
    <el-button
      type="danger"
      @click="addAction"
    ><i class="el-icon-plus"></i></el-button>
    <el-button
      type="danger"
      @click="subtractAction"
    ><i class="el-icon-minus"></i></el-button>
    </el-button-group>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'info',
  methods: {
    ...mapMutations([
      'add',
      'subtract'
    ]),
    ...mapActions([
      'addAction',
      'subtractAction'
    ])
    // add () {
    //   this.$store.commit('add')
    // },
    // subtract () {
    //   this.$store.commit('subtract')
    // },
    // addAction () {
    //   this.$store.dispatch('addAction')
    // },
    // subtractAction () {
    //   this.$store.dispatch('subtractAction')
    // }
  },
  computed: {
    ...mapState([
      'age'
    ]),
    ...mapState('user', ['userStatus', 'userLevel']),
    // age () {
    //   return `Store.state.age: ${this.$store.state.age}`
    // },
    // books () {
    //   return this.$store.getters.donebooksByName('java')
    // },
    ...mapGetters('user', ['getUserInfo']),
    ...mapGetters([
      'donebooksCount',
      'donebooksByName'
    ]),
    getS () {
      return 25 * (2 * 0.1 * 2 + 2 * 0.08 * 2)
    }
  },
  mounted () {
    console.log(this.userStatus, this.userLevel, '-------->')
  }
}
</script>
<style lang="scss">
  $color: darken(#428bca, 6.5%) !default; // #337ab7
  p{
    color: $color;
    font-size: 18px;
  }
</style>
