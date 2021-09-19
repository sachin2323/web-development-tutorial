<template>
<div id="form-component" @click="togglePara">
    <!-- <p>
       Discount of {{discount}}
    </p>
  <button id="btn" ref="any_name" name="submit" @click="querySelector">Submit</button>
    <div v-for="user in users" :key={user}>
        <p>{{user}}</p>
    </div> -->
<h1>Vendor Form</h1>
<form @submit.prevent="formSubmitHandler">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" v-model="password">
  </div>
  <div v-if="errors">
      {{errors}}
  </div>
  <div class="mb-3">
    <label for="product" class="form-label">Product</label>
    <input type="text" name="product" class="form-control" id="product" v-model="product">
  </div>
  <div class="mb-3">
    <label for="price" class="form-label">Price</label>
    <input type="text" name="price" class="form-control" id="price" v-model="price">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="terms">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" value="S" class="form-check-input" id="exampleCheck2" v-model="sizes">
    <label class="form-check-label" for="exampleCheck2">S</label>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" value="M" class="form-check-input" id="exampleCheck3" v-model="sizes">
    <label class="form-check-label" for="exampleCheck3">M</label>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" value="L" class="form-check-input" id="exampleCheck4" v-model="sizes">
    <label class="form-check-label" for="exampleCheck4">L</label>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" value="XL" class="form-check-input" id="exampleCheck5" v-model="sizes">
    <label class="form-check-label" for="exampleCheck5">XL</label>
  </div>

  <div class="mb-3">
    <label for="exampleInput" class="form-label">Add Colours</label>
    <input name="colour" type="text" class="form-control" id="exampleInput" v-model="tmpColor" @keyup.alt="colorHandler">
  </div>
  <ul v-for="color in colors" :key="color">
      <li @click="removeColor" :value="color">{{color}}</li>
  </ul>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<div class="mt-5">
<h1>Client Screen</h1>
<p>Email : {{email}}</p>
<p>Password :{{password}}</p>
<p>Product: {{product}}</p>
<p>Price: {{price}}</p>
<p>Size: {{sizes}}</p>
<p>Terms And Condns: {{terms}}</p>
<p>colors: {{colors}}</p>
</div>
</div>
</template>

<script>
export default {
  props:["discount","users"],

  data(){
      return{
          email:"",
          password:"",
          product:"",
          price:"",
          terms:false,
          sizes:[],
          tmpColor:"",
          colors:[],
          errors:""
      }
  },
  methods:{
    querySelector(){
        console.log(this.$refs.any_name)
        this.$refs.any_name.innerHTML = 'Changed';
        this.$refs.any_name.style = 'color:red;';
    },
    // togglePara(){
    //     console.log("clicked on red");
    //     this.$emit("close");
    // }
    colorHandler(e){
        if(e.key=="," && this.tmpColor != ''){
            if(!this.colors.includes(this.tmpColor)){
                this.colors.push(this.tmpColor);
            }
            this.tmpColor = '';
        }
    },
    removeColor(e){
        console.log(e)
        return this.colors = this.colors.filter((color)=>(color !== e.target.textContent))
    },
    formSubmitHandler(){
        if(this.password.length < 5){
            this.errors="paasword should be geater than 5 characters";
        }else{
        let data = {
        email:this.email,
        password:this.password,
        product:this.product,
        price:this.price,
        terms:this.terms,
        sizes:this.sizes,
        colors:this.colors
        }
        console.log("data",data);
        this.errors='';
        }
    }
  }
}
</script>

<style>
/* #form-component{
    background-color: red;
} */
</style>