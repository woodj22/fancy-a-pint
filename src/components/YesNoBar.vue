<script>
import { Bar } from 'vue3-chart-v2'

import { defineComponent } from 'vue'

export default defineComponent({
  name:"YesNoBar",
  extends: Bar,
   props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: false
    },
  },
  mounted () {
    this.renderChart(this.chartdata, this.chartOptions)
  }
})
</script>