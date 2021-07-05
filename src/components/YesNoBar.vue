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
  }
})
</script>