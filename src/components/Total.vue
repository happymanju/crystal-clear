<template>
  <div class="container">
    <div class="wrapper">
      <line-chart class="item"></line-chart>
      <totalCompare class="item" />
      <div class="item">
        <input
          v-model="userLoc"
          placeholder="Enter Location"
          v-on:change="setUserLoc"
        />
        <button v-on:click="getLocationcoord">SEARCH</button>
        <h4>{{ pickedName }}</h4>
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
      this.pickedName = apiData.data[0]["formatted_address"];
      this.searchLoc = [
        apiData.data[0].geometry.location.lat,
        apiData.data[0].geometry.location.lng,
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
              "#2E98D1",
              "#E5E5E7",
              "#2D383F",
              "#7BA4B8",
              "#DFEEF5",
              "#3F6A88",
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
              "#2E98D1",
              "#E5E5E7",
              "#2D383F",
              "#7BA4B8",
              "#DFEEF5",
              "#3F6A88",
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
