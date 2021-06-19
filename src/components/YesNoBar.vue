<script>
import { Bar } from 'vue3-chart-v2'
import { useStore, mapState, mapGetters } from 'vuex'

import { defineComponent } from 'vue'

export default defineComponent({
  name:"YesNoBar",
  template: "<template>{{ drinkVote }}</template>",
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
   computed: mapState({
    drinkVote: state => state.drinkVote
  }), 
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
    console.log("yesCount: " + this.drinkVote)
//     this.renderChart({
//       labels: ['Yes', 'No'],
//       datasets: [
//         {
//           label: 'Total Votes',
//           backgroundColor: '#80CBC4',
//           data: [this.yesCount, this.noCount,0]
//         }
//       ]
//     })

  },
})
</script>