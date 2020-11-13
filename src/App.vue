<template>
  <div id="app">
    <navbar />
    <introduction />
    <home />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home";
//import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    // navbar: Navbar,
    home: Home,
    introduction: Introduction,
    Footer,
  },
};
</script>
