<template>
  <div>
    <h>LeaderBoard</h>
    <ol>
      <li v-for="item in rankArr" :key="item[0]">
        {{ item[0] }} {{ item[1] }} litters
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
    console.log(res.data);
    this.rankArr = res.data;
  },
};
</script>

<style></style>
