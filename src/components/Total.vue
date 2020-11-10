<template>

    <div>
        <h1>Total Progress Graph:</h1>
        <div id="totalRow">
            <graph />
            <totalCompare />
        </div>
    </div>
    
</template>

<script>
import Graph from "./Graph.vue"
import TotalCompare from "./TotalCompare"

export default {
  name: 'Total',
  components: {
      graph: Graph,
      totalCompare: TotalCompare,
  }

}
</script>

<style>

</style>