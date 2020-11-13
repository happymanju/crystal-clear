<script>
import { Line } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Line,
  data: () => ({}),
  mounted() {
    this.renderChart(
      {
        labels: ["December", "January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Total Refills",
            borderColor: "#3F6A88",
            data: [70, 1916, 3018, 3160, 2527, 2470],
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  },
};
</script>
