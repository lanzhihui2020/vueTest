<template>
  <div>
  <h3>用户界面</h3>
  <P>用户的相关信息</P>
    {{useId}}
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      useId(){
        return this.$route.params.aaa
      }
    }
  }
</script>

<style scoped>

</style>
