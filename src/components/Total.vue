<template>
  <div class="total-container">
    <h2>Total Area</h2>
    <div class="total-wrapper">
      <graph class="total-item" />
      <totalCompare class="total-item" />
    </div>
  </div>
</template>

<script>
import Graph from "./Graph.vue";
import TotalCompare from "./TotalCompare";

export default {
  name: "Total",
  components: {
    graph: Graph,
    totalCompare: TotalCompare,
  },
};
</script>

<style>
.total-container {
  background-color: grey;
}
.total-wrapper {
  display: grid;
  background-color: yellow;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 120px;
}
.total-item {
  display: flex;
  border: 1px solid red;
  border-radius: 5px;
  padding: 150px;
  justify-content: center;
  flex-direction: column;
}
</style>
