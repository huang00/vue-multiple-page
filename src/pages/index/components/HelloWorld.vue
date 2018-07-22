<template>
  <div class="hello">
    <app-header></app-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'

export default {
  name: 'HelloWorld',
  components: {
    AppHeader
  },
  data () {
    return {
      msg: 'Welcome to Your index.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
