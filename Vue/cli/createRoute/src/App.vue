<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>主页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
<!--    <router-link :to="'/user/'+useId" tag="button" replace>用户</router-link>-->
<!--    <router-link :to="{path:'/profile',query:{name:'lan',pas:'333'}}" tag="button" replace>用户</router-link>-->


<!--    <button @click="btnhome">主页</button>-->
<!--    <button @click="btnabout">关于</button>-->
    <button @click="useClick">用户</button>
    <button @click="proClick">档案</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    useId: 'zhangsan'
    }
  },
  methods: {
    btnhome(){
      this.$router.push('/home');
      console.log('home');
    },
    btnabout(){
      this.$router.push('/about');
      console.log('about');
    },
    useClick(){
      this.$router.push('/user/'+this.useId)
    },
    proClick(){
      this.$router.push({
        path: '/proFile',
        query:{
          name: 'lan',
          pas: 111
        }
      })
    }
  }
}
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
