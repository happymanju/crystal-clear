<script>
import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  name: "CategoryGraph",
  mixins: [reactiveProp],

  mounted() {
    this.renderChart(this.chartData, {
      responsive: false,
      maintainAspectRatio: true,
    });
  },
};
</script>
