<script>
import { Bar } from "vue-chartjs";
export default {
  name: "CategoryGraph",
  extends: Bar,
  data: () => ({}),
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "Unverified",
        "Natural Springs",
        "Public",
        "Open Maps",
        "Private",
        "Business",
      ],
      datasets: [
        {
          label: "Spots in Shibuya",
          backgroundColor: "Blue",
          data: [40, 20, 12, 80, 20, 20],
        },
      ],
    });
  },
};
</script>

<style></style>
