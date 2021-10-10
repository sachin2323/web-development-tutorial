<template>
  <h1>Here is the book that you have selected</h1>
  <div v-for="selectedBook in getSelectedBook($route.params.id)" :key="selectedBook.id">
    <h2>{{selectedBook.title}}</h2>
    <p>{{selectedBook.details}}</p>
  </div>
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
            ],
        }
        
    },
  methods:{
    getSelectedBook(id){
      return this.books.filter((book)=>(id==book.id))
    }
  }
}
</script>

<style>

</style>