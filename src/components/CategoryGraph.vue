<script>
import { Bar } from "vue-chartjs";
export default {
  name: "CategoryGraph",
  extends: Bar,
  props: ["categories"],
  data: () => ({}),
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "Not classified",
        "Spring Water",
        "Public",
        "Open Maps",
        "Private",
        "verification-pending",
      ],
      datasets: [
        {
          label: "Spots Around Akasaka",
          backgroundColor: "Blue",
          data: [
            this.categories["0"],
            this.categories["1"],
            this.categories["2"],
            this.categories["3"],
            this.categories["4"],
            this.categories["5"],
          ],
        },
      ],
    });
  },
};
</script>

<style></style>
