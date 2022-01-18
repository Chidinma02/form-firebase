<template>
  <div id="Top-header">
     Logged in
     <span v-if="loggedIn">Yes</span>
     <span v-else>No</span>
     <div>
       <button @click="SignOut">Sign Out</button>
     </div>
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
  
  created(){
       firebase.auth().onAuthStateChanged(user =>{
        this.loggedIn=!!user
       })
  },
  name: 'Top-header',
  props: {},
  components: {},
  data() {
    return {
       loggedIn:false
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {

    async SignOut(){
          try{
            const data = await firebase.auth().signOut();
            console.log(data)
            this.$router.replace({name:"login"})

          }catch(err){
            console.log(err)
          }
         
     }
  },
}
</script>

<style lang="scss" scoped>

</style>
