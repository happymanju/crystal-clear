<template>
  <div id="app">
       
   <navbar />
   <home />
  
  </div>
</template>

<script>
import Home from "./components/Home";
import Navbar from "./components/Navbar";


export default {
  name: 'App',
  components: {
    navbar: Navbar,
    home:Home,

  }
}
</script>

<style>
body, html {
  margin:0;
}


</style>
