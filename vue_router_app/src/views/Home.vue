<template>
  <!-- <h1>List of Cars</h1>

  <input name="filterCar" type="text" placeholder="filter cars" v-model="query"/>
  <input name="filterUser" type="text" placeholder="filter Users" v-model="users"/>

  <ul v-for="car in searchCar" :key="car.id">
    <li value="car.name">{{car.name}}</li>
  </ul>


  <p ref="para">this is a para</p>
  <button @click="stopHandler">Stop Watching</button> -->
  <div></div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue';

export default {
  name:'Home',
  setup(){
      //let carA = ref("BMW");
      //let userA = ref({name:"sachin",age:"21",role:"super admin"});
      //let userB = reactive({name:"sachin",age:"21",role:"super admin"});
      //let userB = ref("Aakash");

      let query = ref('');
      let users = ref('');
      let cars = ref([{id:1, name:"BMW"},{id:2, name:"Ferrari"},{id:3, name:"Audi"},{id:4, name:"Honda"}])
      
      // const stopWatch = watch(query, ()=>{
      //   console.log(query.value);
      // })

      // const stopWatchEffect = watchEffect(()=>{
      //   console.log(`watchEffect is called and query is ${query.value}`)
      //   console.log(`watchEffect is called and users is ${users.value}`)
      // })
      
      //const para = ref("hello");

      const searchCar = computed(()=>{
        return cars.value.filter((car)=>(car.name.toLowerCase().includes(query.value.toLowerCase())))
      })

    //  const stopHandler=()=>{
    //    stopWatch();
    //    stopWatchEffect();
    //  }
      //console.log(carA)
      //console.log(carA.value)

      // let userHandler = () => {
      //   userB.value = "Satish"
      //   console.log(userB);
      // }

      return {cars,query, searchCar, users,}
  },
  // data(){
  //   return{
  //     carA:"BMW"
  //   }
  // },
  // methods:{
  //   carHandler(){
  //     return this.carA="Audi";
  //   }
  // }
}
</script>

<style>

</style>