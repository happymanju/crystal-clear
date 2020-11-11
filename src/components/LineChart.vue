<script>
import { Line } from 'vue-chartjs'

export default {
  name: "LineChart",
  extends: Line,
  data: () => ({}),
  mounted () {
    this.renderChart({
      labels: ['December','January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "Blue",
          data: [40, 20, 60, 10, 50, 45]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
</script>
