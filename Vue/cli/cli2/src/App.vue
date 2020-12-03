<template>
  <div id="app">
    <router-link to="/Home">主页</router-link>
    <router-link to="/About">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
