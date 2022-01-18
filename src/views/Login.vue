<template>
  <div id="Login">
    Login
    <form @submit.prevent="pressed">
       
       <div class="login">

          <input type="email" v-model="email" placeholder="login">
       </div>
       <div class="password">

          <input type="password" v-model="password" placeholder="password">
       </div>

       <button type="submit">Login</button>
     </form>
  
    <div class="error" v-if="error">{{error.message}}</div>
    <span>Need an account? Click here to
    <router-link to="/register"></router-link></span>

  </div>
</template>

<script>
import 'firebase/database';
// import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  name: 'Login',
  props: {},
  components: {},
  data() {
    return {
      email:"",
      password:"",
      error:''
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  
    // async signOut(){
    //   try{

    //   }catch(err){
    //     console.log(err)
    //   }
    //   const data=await firebase.auth().signOut();
    // }

    methods:{
      async pressed(){
     try{
       const val = await firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
       console.log(val)
       this.$router.replace({name:"secret"})
     }catch(err){
       console.log(err)
     }
      
    
    }
  },
}
</script>

<style lang="css" scoped>
.error{
color:red;
font-size:18px;
}
input{
width:400px;
padding:30px;
margin:20px;
font-size:21px;
}
button{
width:400px;
height:75px;
font-size:100%}
</style>
