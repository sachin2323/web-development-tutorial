<template>
  Blog Detail
  
<h3>{{blog.title}}</h3>
 
</template>

<script>
export default {
    name:"Blog Details",
    props:['blog'],
    setup(props){
       console.log(props.blog);
    }
}
</script>

<style>

</style>