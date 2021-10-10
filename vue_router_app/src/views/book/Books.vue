<template>
  <h1>Here is the list of books that we have</h1>
  <ul v-for="book in books" :key="book.id">
    <router-link :to="{name:'BookDetail',params:{'id':book.id}}"><li style="list-style-type:none;">Sr No:{{book.id}}  => Title: {{book.title}}</li></router-link>
  </ul>
</template>

<script>
export default {
    data(){
        return{
            books:[
                {id:1, title:"Game Of Throne Part 1", details:"Lorem ipsum"},
                {id:2, title:"Game Of Throne Part 2", details:"Lorem ipsum"},
                {id:3, title:"Game Of Throne Part 3", details:"Lorem ipsum"},
                {id:4, title:"Game Of Throne Part 4", details:"Lorem ipsum"},
                {id:5, title:"Game Of Throne Part 5", details:"Lorem ipsum"},
                {id:6, title:"Game Of Throne Part 6", details:"Lorem ipsum"},
                {id:7, title:"Malgudi days", details:"Lorem ipsum"},
            ]
        }
    }
}
</script>

<style>

</style>