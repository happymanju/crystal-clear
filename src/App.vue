<template>
  <div id="app">
    <img class="logo" src="./assets/mymizulogo.png" />
    <navbar />
    <introduction />
    <home />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    home: Home,
    introduction: Introduction,
    Footer,
  },
};
</script>
