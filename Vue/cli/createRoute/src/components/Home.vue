<template>
  <div>
  <h3>主页</h3>
  <p>主页的内容</p>
    <router-link to="/home/new">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        path: '/home/new'
      }
    },
    created() {
      //this.$router.push('/home/new')
      },
    destroyed(){
      console.log('destroyed');
    },
    activated() {
      this.$router.push(this.path);
     // console.log('activated');
    },
    deactivated() {
      // this.path = this.$route.path;
      // console.log('deactivated');
    },
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path);
      this.path = this.$route.path;
      next();
    }
  }
</script>

<style scoped>

</style>
