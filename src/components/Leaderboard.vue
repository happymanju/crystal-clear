<template>
  <div>
    <h>LeaderBoard</h>
    <ol>
      <li v-for="item in rankArr" :key="item[0]">
        {{ item[0] }} {{ item[1] }} liters
      </li>
    </ol>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LeaderBoard",
  data: () => ({
    rankArr: [],
  }),
  mounted: async function () {
    const res = await axios.get("/express/leaderboard");
    this.rankArr = res.data;
  },
};
</script>

<style></style>
