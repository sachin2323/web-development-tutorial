<template>
    <label>
        Enter First Number
    <input name="input1" />
    </label>
    <label>
        Enter Second Number
    <input name="input2">
    </label>
    <p>Result</p>

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<button type="button" class="btn btn-danger">Danger</button>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
export default{
    name:"TestComponent",

    data(){
        return{
            a:0,
            b:0,
            c:0
        }
    },

    computed:{
        sumFn(){
            return null;
            //return this.c = this.a + this.b;
        }
    }
}
</script>

<style>
</style>