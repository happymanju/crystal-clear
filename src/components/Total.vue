<template>
  <div class="total-container">
    <h2>Total Area</h2>
    <div class="total-wrapper">
      <graph class="total-item" />
      <totalCompare class="total-item" />
      <div class="total-item">
        <div v-for="location in locations" :key="location.name">
          <input
            v-on:change="setLocation"
            type="radio"
            :value="location.coords"
            v-model="picked"
          />
          <label for="location.name">{{ location.name }} </label>
        </div>
        <span>picked: {{ picked }} </span>
        <categoryGraph v-bind:categories="categories" />
      </div>
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
    picked: "picked",
    locations: [
      { name: "shibuya", coords: [139.697063, 35.667427] },
      { name: "minato", coords: [139.728501, 35.6111] },
      { name: "shimokitazawa", coords: [139.669767, 35.666203] },
    ],
  }),

  mounted() {
    console.log("mounted");
    this.getCategories();
  },
  methods: {
    async getCategories() {
      await axios.get("/express/radius").then((data) => {
        let arrayOfIds = data.data;
        let countedCategories = arrayOfIds.reduce((tally, id) => {
          if (!tally[id]) {
            tally[id] = 1;
          } else {
            tally[id] = tally[id] + 1;
          }
          return tally;
        }, {});
        this.categories = countedCategories;
        console.log(this.categories);
      });
    },
    setLocation() {
      console.log(this.picked);
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
  align-items: center;
  grid-gap: 20px;
}
.total-item {
  flex-direction: column;
  display: flex;
  border: 1px solid red;
  border-radius: 5px;
  padding: 10px;
  justify-content: center;
}
</style>
