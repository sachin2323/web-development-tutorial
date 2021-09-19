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
            return this.c = this.a + this.b;
        }
    }
}
</script>

<style>
</style>