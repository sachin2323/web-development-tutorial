<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'Books'}">List Of Books</router-link> |
    <router-link :to="{name:'BookDetail', params:{id:123}}">Book Details</router-link>
  
    <button @click="back">Back</button>
    <button @click="forward">Forward</button>
    <button @click="redirect">Redirect</button><br><br><br>

    <Blogs v-if="blogs.length" :blogs="blogs"></Blogs>
  
  </div>
  <router-view/>
</template>
<script>

import Blogs from "./views/blogs/Blogs.vue"
import getBlogs from "./composables/getBlogs";
export default {
  components: { Blogs },
  setup(){
    const {blogs,error,fetchData} = getBlogs();
    fetchData();
    return {blogs};
  },
  methods:{
    back(){
      this.$router.go(-2);
    },
    forward(){
      this.$router.go(2);
    },
    redirect(){
      this.$router.push({name:"Home"})
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color:red;
}
</style>
