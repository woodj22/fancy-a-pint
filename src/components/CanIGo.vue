<template>
  <div id="app" class="flex flex-grow items-center justify-center h-screen bg-green">

<div id="CanIGo" class="text-center md:w-3/4">
  <div class="uppercase h-48">
    <h3 class="m-8 text-2xl text-black text-opacity-50">Fancy a pint today?</h3>
    <h2 class="text-6xl md:text-8xl">{{randomQuote}}</h2>
  </div>
        <button class="rounded mt-48 p-2 text-black border-2 border-solid text-opacity-70 focus:outline-none" @click="refreshQuote">Press me to update</button>
        <footer class="text-uderline bg-green text-center flex-grow items-center">
    <button class="p-4 underline background-transparent outline-none focus:outline-none" type="button" style="transition: all .15s ease">
  <a href="https://woodj22.github.io/#/">Made by Me </a>
</button>
<button class="p-4 underline background-transparent outline-none focus:outline-none" type="button" style="transition: all .15s ease">
  <a href="https://shouldideploy.today/">Inspired by This </a>
</button>
  </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CanIGo',
  created() {
    this.refreshQuote()
  },
  data:() => {
      return {
          randomQuote: "No",
          currentRandomNumber: null,
          backgroundColour: "bg-green",
          endDate: new Date(2021, 4, 12, 0, 0),
          timeToDisplay: "Month Days Hours Minutes Seconds",
          weeklyQuotes: {
            "yes" : {"colour": "bg-green", "quotes" : ["Hell yes", "I am gagging for a pint!", "Pub. Now."]},
            "no" : {"colour": "bg-red", "quotes" : ["hell no", "its a no from me.", "Another day, not today."]},
            "maybe" : {"colour": "bg-amber", "quotes" :["I could be persuded", "Hmmm im not sure. Maybe?"]}
          }
      }
  },
  methods: {
    refreshQuote(){
      const dayOfWeek = new Date().getDay()
      let weeklyQuoteSelection = "yes"
      if(dayOfWeek == 4) {
        weeklyQuoteSelection = "maybe"
      }
      if (dayOfWeek <= 3) {
        weeklyQuoteSelection = "no"
      }
      const quotes =  this.weeklyQuotes[weeklyQuoteSelection]['quotes']
      var random = Math.floor(Math.random() * quotes.length)
      // this is so you will never get the same quote twice on one go
      while(random ==this.currentRandomNumber){
        random = Math.floor(Math.random() * quotes.length);
      }
      this.backgroundColour = this.weeklyQuotes[weeklyQuoteSelection]['colour']
      this.currentRandomNumber = random
      this.randomQuote = quotes[random]
    }
  }
}
</script>
