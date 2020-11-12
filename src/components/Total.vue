<template>
  <div class="total-container">
    <h2>Total Area</h2>
    <div class="total-wrapper">
      <line-chart class="total-item"></line-chart>
      <totalCompare class="total-item" />
      <div class="total-item">
        <input
          v-model="userLoc"
          placeholder="enter lcoation"
          v-on:change="setUserLoc"
        />
        <button v-on:click="getLocationcoord">SEARCH</button>
        <div
          v-on:change="setLocation"
          v-for="location in locations"
          :key="location.name"
        >
          <input type="radio" :value="location" v-model="picked" />
          <label for="location.name">{{ location.name }} </label>
        </div>
        <span>picked: {{ pickedName }} </span>
        <categoryGraph :chart-data="datacollection" />
      </div>
    </div>
  </div>
</template>

<script>
//Google Maps

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
    picked: "Shibuya",
    userLoc: "Shibuya",
    pickedName: "Shibuya",
    searchName: "shibuya",
    searchLoc: [],
    locations: [
      { name: "Shibuya", coords: [35.677427, 139.697063] },
      { name: "Minato", coords: [35.6111, 139.728501] },
      { name: "Shimokitazawa", coords: [35.666203, 139.669767] },
    ],
    datacollection: null,
  }),

  mounted() {
    this.getCategories();
  },
  methods: {
    async getLocationcoord() {
      let apiData = await axios.get("/googleLoc", {
        params: {
          query: this.userLoc,
        },
      });
      this.pickedName = apiData.data.results[0].name;
      this.searchLoc = [
        apiData.data.results[0].lat,
        apiData.data.results[0].lon,
      ];
      let result = await axios.get("/express/radius", {
        params: {
          latitude: this.searchLoc[0],
          longitude: this.searchLoc[1],
          radius: 2000,
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
            backgroundColor: [
              "rgb(255, 148, 120)",
              "rgba(0, 181, 204, 1)",
              "rgba(65, 131, 215, 1)",
              "rgba(83, 51, 237, 1)",
              "rgba(252, 185, 65, 1)",
              "rgba(145, 61, 136, 1)",
            ],
            borderColor: "rgba(58, 83, 155, 1)",
            borderWidth: 1,
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
    setUserLoc() {
      this.picked = this.searchLoc;
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
            backgroundColor: [
              "rgb(255, 148, 120)",
              "rgba(0, 181, 204, 1)",
              "rgba(65, 131, 215, 1)",
              "rgba(83, 51, 237, 1)",
              "rgba(252, 185, 65, 1)",
              "rgba(145, 61, 136, 1)",
            ],
            borderColor: "rgba(58, 83, 155, 1)",
            borderWidth: 1,
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

    async setLocation() {
      let result = await axios.get("/express/radius", {
        params: {
          latitude: this.picked.coords[0],
          longitude: this.picked.coords[1],
          radius: 2000,
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
      this.pickedName = this.picked.name;
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
            backgroundColor: [
              "rgb(255, 148, 120)",
              "rgba(0, 181, 204, 1)",
              "rgba(65, 131, 215, 1)",
              "rgba(83, 51, 237, 1)",
              "rgba(252, 185, 65, 1)",
              "rgba(145, 61, 136, 1)",
            ],
            borderColor: "rgba(58, 83, 155, 1)",
            borderWidth: 1,
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
  background-color: white;
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
