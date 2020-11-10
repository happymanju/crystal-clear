<template>
  <div class="home-wrapper">
    <total />
    <weekly />
  </div>
</template>

<script>
import Total from "./Total";
import Weekly from "./Weekly";

export default {
  name: "Home",
  components: {
    total: Total,
    weekly: Weekly,
  },
};
</script>

<style>
.home-wrapper {
  display: grid;
}
</style>
