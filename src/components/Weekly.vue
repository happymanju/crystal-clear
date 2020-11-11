<template>
  <div class="container">
    <h2>Weekly area</h2>
    <div class="weekly-wrapper">
      <dataDisplay class="week-item" />
      <leaderboard class="week-item" />
      <weeklyComparison class="week-item" />
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

<style>
.container {
  background-color: green;
}
.weekly-wrapper {
  display: grid;
  background-color: rebeccapurple;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 120px;
}
.week-item {
  flex-direction: column;
  border: 1px solid #ffe066;
  border-radius: 5px;
  padding: 50px;
}
</style>
