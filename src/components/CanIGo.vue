<template>
  <div id="app" class="flex flex-grow items-center justify-center h-screen" :class="backgroundColour">

<div id="CanIGo" class="text-center md:w-3/4">
  <div class="uppercase h-48">
    <h3 class="m-8 text-2xl text-black text-opacity-50">Fancy a pint today?</h3>
    <h2 class="text-6xl md:text-8xl">{{randomQuote}}</h2>
  </div>
        <button class="rounded mt-48 p-2 text-black border-2 border-solid text-opacity-70 focus:outline-none" @click="refreshQuote">Press me to update</button>
        <footer class="text-uderline text-center flex-grow items-center" :class="backgroundColour">
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
          weeklyQuotes: {
            "yes" : {"colour": "bg-green", "quotes" : ["😍🍺","Always and forever.", "🍺👍🍺👍🍺👍🍺👍🍺👍🍺 ","🍻YURRRP🍻", "Hell yes.", "Which pub? That is the real question.", "I am gagging for a pint!", "Pub. Now.", "lets get them in.", "Who is buying the first round?", "I could do with a cold one. YES!", "yes🍺yes🍺yes"]},
            "no" : {"colour": "bg-red", "quotes" : ["❌❌❌🍺❌❌❌","hell no", "its a no from me.", "Another day, just not today.", "Had a rough weekend. Taking it easy."]},
            "maybe" : {"colour": "bg-amber", "quotes" :["I could be persuaded", "Hmmm im not sure. Maybe?", "its been a long week...", "oh I dont know."]}
          }
      }
  },
  methods: {
    refreshQuote(){
      const dayOfWeek = new Date().getDay()
      // By default I have set it to be answering yes.
      let weeklyQuoteSelection = "yes"
      // 4 is a wednesday 
      if(dayOfWeek == 4) {
        weeklyQuoteSelection = "maybe"
      }
      // 3 is a tuesday. Anything before 3 will be answering no.
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
