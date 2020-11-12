<template>
  <div class="recentTaps">
    <div>In the last {{ days }} days:</div>
    <div id="tapsNum">{{ tapsNum.count }}</div>
    <div>new spots added</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DataDisplay",
  data: () => ({
    tapsNum: 0,
    days: 30,
  }),
  mounted: async function() {
    const res = await axios.get("/express/taps", {
      params: { days: this.days },
    });
    this.tapsNum = res.data[0];
  },
};
</script>

<style>
.recentTaps {
  text-align: center;
}
#tapsNum {
  font-size: 50px;
}
</style>
