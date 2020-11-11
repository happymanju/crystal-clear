<template>
  <div class="total-container">
    <h2>Total Area</h2>
    <div class="total-wrapper">
      <graph class="total-item" />
      <totalCompare class="total-item" />
      <categoryGraph class="total-item" />
    </div>
  </div>
</template>

<script>
import Graph from "./Graph.vue";
import TotalCompare from "./TotalCompare";
import CategoryGraph from "./CategoryGraph";
import axios from "axios";
export default {
  name: "Total",
  components: {
    graph: Graph,
    totalCompare: TotalCompare,
    categoryGraph: CategoryGraph,
  },
  data: () => ({
    categories: [],
  }),

  mounted() {
    console.log("mounted");
    this.getCatgories();
  },
  methods: {
    async getCatgories() {
      await axios.get("/express/radius").then((data) => {
        console.log(data.data);
        arrayOfIds = data.data;
        for (let id of arrayOfIds) {
        }
      });
    },
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 4fr));
  grid-gap: 20px;
}
.total-item {
  display: flex;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
  justify-content: center;
}
</style>
