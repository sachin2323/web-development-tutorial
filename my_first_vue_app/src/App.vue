<template >
<div id="any" @close="closeWasCalled">
<!-- <Header/>
<About/>
<TestComponent/>
<Footer/> -->
<!-- <button @click="toggleParagraph" >
  Show Paragraph
</button>
<div v-if="showPara" > -->
<FormComponent :discount="discount" :users='users'/>
<!-- </div> -->
</div>
</template> 

<script>
// import Footer from './components/Footer.vue'
// import Header from './components/Header.vue'
// import About from './components/About.vue'
// import TestComponent from './components/TestComponent.vue';
import FormComponent from './components/FormComponent.vue';


export default {
  components: { FormComponent },
  data(){
    return {
      discount:0,
      users:["sachin", "abhishek","sony"],
      showPara:false,
    }
  },
  name: 'App',
  methods:{
    toggleParagraph(){
     
      this.showPara = !this.showPara;
    },
    closeWasCalled(){
       console.log("this is called")
    }
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
  color:red;
}
/* #any{
background-color:blue;
} */
</style>
