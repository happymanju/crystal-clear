<template>
  <div class="leaderboard">
    <h3 class="lederboardTitle">
      Users have saves
      <div style="text-align:center;">
        <strong style="color:#3F6A88;font-size:50px;">{{ totalRifill }}</strong>
        liters
      </div>
      of water in 2020.
    </h3>
    <h3 class="lederboardTitle">Top Users</h3>
    <ol class="topUserList">
      <li v-for="item in rankArr" :key="item[0]">
        <strong style="color:#2E98D1;font-size:25px;">{{ item[0] }}</strong>
        refilled
        <strong style="color:#3F6A88;font-size:25px;">{{ item[1] }}</strong>
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
