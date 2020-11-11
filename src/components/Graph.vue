<template>
    <div  class="line_chart">
        Chellou Graph!
        <lineChart />
    </div>    
</template>

<script>
import LineChart from "./LineChart.vue";

export default {
  name: 'Graph',
  components:{
      LineChart
  }
}
</script>

<style>
.line_chart {
    background-color:aqua;
}
</style>