<template>
  <div>
    <div>All-time total refills</div>
    <div style="text-align:center;">
      <strong style="color:darkblue;font-size:50px;">{{ totalRifill }}</strong>
      liters
    </div>
    <div>LeaderBoard</div>
    <ol>
      <li v-for="item in rankArr" :key="item[0]">
        <strong style="color:darkorange;font-size:25px;">{{ item[0] }}</strong>
        refilled
        <strong style="color:darkblue;font-size:25px;">{{ item[1] }}</strong>
        liters
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
    totalRifill: 0,
  }),
  mounted: async function() {
    const res = await axios.get("/express/leaderboard");
    this.rankArr = res.data;
    const resTotal = await axios.get("/express/totalrifills");
    this.totalRifill = resTotal.data;
  },
};
</script>

<style></style>
