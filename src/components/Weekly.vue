<template>
    <div>
     <h2> Weekly area</h2>
     <dataDisplay/>
     <leaderboard/>
     <weeklyComparison/>
    </div>
</template>

<script>
import DataDisplay from "./DataDisplay";
import LeaderBoard from "./Leaderboard";
import WeeklyComparison from "./WeeklyComparison";



export default {
  name: 'Weekly',
  components : {
    dataDisplay:DataDisplay,
    leaderboard: LeaderBoard,
    weeklyComparison:WeeklyComparison,
  }
}
</script>

<style>
</style>
