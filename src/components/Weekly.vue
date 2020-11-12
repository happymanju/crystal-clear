<template>
  <div class="container">
    <div class="wrapper">
      <dataDisplay class="item" />
      <leaderboard class="item" />
      <weeklyComparison class="item" />
    </div>
  </div>
</template>

<script>
import DataDisplay from "./DataDisplay";
import LeaderBoard from "./Leaderboard";
import WeeklyComparison from "./WeeklyComparison";

export default {
  name: "Weekly",
  components: {
    dataDisplay: DataDisplay,
    leaderboard: LeaderBoard,
    weeklyComparison: WeeklyComparison,
  },
};
</script>
