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
   computed: {
    data: function() {
      return this.chartData;
    }
  },
   watch: {
    data() {
      this.renderBarChart();
    }
  },
  mounted () {
    this.renderBarChart()
  },
  methods: {
      renderBarChart: function () {
        this.renderChart(this.data, this.chartOptions)
      }
  }
})
</script>