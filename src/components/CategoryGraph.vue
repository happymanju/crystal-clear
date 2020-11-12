<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  name: "CategoryGraph",
  mixins: [reactiveProp],

  mounted() {
    this.renderChart(this.chartData);
  },
};
</script>

<style></style>
