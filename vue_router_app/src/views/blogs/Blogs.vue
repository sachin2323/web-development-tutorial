<template>
  List of Blogs
  <div v-for="blog in data" :key="blog.id">
      <h3>{{blog.name}}</h3>
  </div>
  <button @click="updateHandler">Add a blog</button>
  <button @click="showHandler">Show a box</button>
  <div v-if="isVisible" id="box"></div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from '@vue/runtime-core'
export default {
    name:"Blogs",
    props:['blogs'],
    setup(props){
        console.log(props.blogs)
        
        let data = props.blogs;

        let isVisible = ref(true)

        const updateHandler = ()=>{
            data.push({id:7, name:"Title 7", detail:"lorem20"})
        }

        const showHandler = ()=>{
           isVisible.value= !isVisible.value;
        }

    

    // frontend -> lifecycle -> 1) Mount 2) Unmount 3) Update

    onMounted(()=>(console.log("component is mounted")));

    onUnmounted(()=>(console.log("component is unmounted")));

    onUpdated(()=>(console.log("component is updated")));

    return{data, updateHandler, showHandler, isVisible};
}
}
</script>

<style>
#box{
    height: 200px;
    width:200px;
    background-color: red;
}
</style>