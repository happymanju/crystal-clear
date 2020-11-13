<template>
  <div class="recentTaps">
    <div id="tapsNum">{{ tapsNum.count }}</div>
    <div>new spots added <br />in the last {{ days }} days</div>
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
