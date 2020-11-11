<template>
  <div class="total-container">
    <h2>Total Area</h2>
    <div class="total-wrapper">
      <line-chart class="total-item"></line-chart>
      <totalCompare class="total-item" />
      <div class="total-item">
        <div
          v-on:change="setLocation"
          v-for="location in locations"
          :key="location.name"
        >
          <input type="radio" :value="location" v-model="picked" />
          <label for="location.name">{{ location.name }} </label>
        </div>
        <span>picked: {{ picked }} </span>
        <categoryGraph :chart-data="datacollection" />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "./LineChart";
import TotalCompare from "./TotalCompare";
import CategoryGraph from "./CategoryGraph";
import axios from "axios";
export default {
  name: "Total",
  components: {
    LineChart,
    totalCompare: TotalCompare,
    categoryGraph: CategoryGraph,
  },
  data: () => ({
    categories: { "0": 0, "1": 0, "2": 9, "3": 0, "4": 0, "5": 0 },
    picked: "picked",
    pickedName: "Shibuya",
    locations: [
      { name: "Shibuya", coords: [35.677427, 139.697063] },
      { name: "Minato", coords: [35.6111, 139.728501] },
      { name: "Shimokitazawa", coords: [35.666203, 139.669767] },
    ],
    datacollection: null,
  }),

  mounted() {
    console.log("mounted");
    this.getCategories();
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "Not classified",
          "Spring Water",
          "Public",
          "Open Maps",
          "Private",
          "verification-pending",
        ],
        datasets: [
          {
            label: this.pickedName,
            backgroundColor: "Blue",
            data: [
              this.categories["0"],
              this.categories["1"],
              this.categories["2"],
              this.categories["3"],
              this.categories["4"],
              this.categories["5"],
            ],
          },
        ],
      };
    },
    async getCategories() {
      let result = await axios.get("/express/radius", {
        params: {
          latitude: this.locations[0].coords[0],
          longitude: this.locations[0].coords[1],
          radius: 1000,
        },
      });
      let arrayOfIds = result.data;
      let countedCategories = arrayOfIds.reduce((tally, id) => {
        if (!tally[id]) {
          tally[id] = 1;
        } else {
          tally[id] = tally[id] + 1;
        }
        return tally;
      }, {});
      this.categories = countedCategories;
      this.datacollection = {
        labels: [
          "Not classified",
          "Spring Water",
          "Public",
          "Open Maps",
          "Private",
          "verification-pending",
        ],
        datasets: [
          {
            label: this.pickedName,
            backgroundColor: "Blue",
            data: [
              this.categories["0"],
              this.categories["1"],
              this.categories["2"],
              this.categories["3"],
              this.categories["4"],
              this.categories["5"],
            ],
          },
        ],
      };
      console.log("catgories after loading", this.categories);
      console.log(this.datacollection);
    },

    async setLocation() {
      console.log("this.picked", this.picked);

      let result = await axios.get("/express/radius", {
        params: {
          latitude: this.picked.coords[0],
          longitude: this.picked.coords[1],
          radius: 2000,
        },
      });
      console.log(result.data);
      let arrayOfIds = result.data;
      let countedCategories = arrayOfIds.reduce((tally, id) => {
        if (!tally[id]) {
          tally[id] = 1;
        } else {
          tally[id] = tally[id] + 1;
        }
        return tally;
      }, {});
      this.categories = countedCategories;
      this.pickedName = this.picked.name;
      console.log("this. categories", this.categories);
      console.log(this.datacollection);
      this.datacollection = {
        labels: [
          "Not classified",
          "Spring Water",
          "Public",
          "Open Maps",
          "Private",
          "verification-pending",
        ],
        datasets: [
          {
            label: this.pickedName,
            backgroundColor: "Blue",
            data: [
              this.categories["0"],
              this.categories["1"],
              this.categories["2"],
              this.categories["3"],
              this.categories["4"],
              this.categories["5"],
            ],
          },
        ],
      };
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
