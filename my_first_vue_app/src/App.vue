<template>
<Header/>
<About/>
<TestComponent/>
<Footer/>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import TestComponent from './components/TestComponent.vue';


export default {
  components: { Footer, Header, About,TestComponent },
  name: 'App',

  data(){
    return{
      number:10
    }
  },

  methods:{


  },
  computed:{

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
  margin-top: 60px;
}

h1{
  color:red
}
</style>
