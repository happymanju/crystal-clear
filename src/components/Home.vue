<template>
    <div>
      <h2>HOME </h2>
      <total/>
      <weekly/>
    </div>
</template>

<script>
import Total from "./Total"
import Weekly from "./Weekly"


export default {
  name: 'Home',
  components : {
    total:Total,
    weekly: Weekly,
  }
}
</script>

<style>
</style>
