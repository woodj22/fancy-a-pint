<template>
  <div id="Gala" v-bind:class="{'flex flex-grow items-center justify-center h-screen bg-white': toggled, 'flex flex-grow items-center justify-center h-screen bg-black': !toggled}"
>

<div class="text-center">
    <h3 v-bind:class="{'m-8 text-6xl text-black text-opacity-50 uppercase': toggled, 'm-8 text-6xl text-white text-opacity-50 uppercase': !toggled}">Time until GALA festival:</h3> 
    <h2 v-bind:class="{'text-6xl md:text-8xl text-black text-opacity-80': toggled, 'text-6xl md:text-8xl text-white text-opacity-80': !toggled}">
    {{timeToDisplay}}
    </h2>
</div>
</div>
</template>

<script>
export default {
  name: 'Gala',
  created() {
    this.createCountDown()
  },
  data:() => {
      return {
          endDate: new Date(2021, 7, 31, 0, 0),
          timeToDisplay: "Months Days Hours Minutes Seconds",
          backgroundColor: "flex flex-grow items-center justify-center h-screen bg-white",
          toggled: true
      }
  },
  methods: {
    refreshQuote(){
      var random = Math.floor(Math.random() * this.quotes.length)
      // this is so you will never get the same quote twice on one go
      while(random ==this.currentRandomNumber){
        random = Math.floor(Math.random() * this.quotes.length);
      }
      this.currentRandomNumber = random
      this.randomQuote = this.quotes[random]
    }, 
    createCountDown(){
      const today = new Date();
      var diff =  this.endDate - today
      setTimeout(() => {
          const diffDate = new Date(diff);
          var month   = diffDate.getMonth() -1 ;
          var day     = diffDate.getDate();
          var hour    = diffDate.getHours();
          var minute  = diffDate.getMinutes();
          var seconds = diffDate.getSeconds(); 
        
          this.timeToDisplay = month + " Months " + day + " Days " + hour + " Hours " + minute + " Minutes " + seconds + " Seconds"
          this.toggled = !this.toggled
          this.createCountDown()
      }, 300)
        
      }
  }
}
</script>
