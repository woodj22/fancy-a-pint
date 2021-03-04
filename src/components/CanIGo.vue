<template>
  <div id="app" class="flex flex-grow items-center justify-center h-screen bg-red">

<div id="CanIGo" class="text-center md:w-3/4 bg-red">

  <div class="uppercase h-48">
    <h3 class="m-8 text-2xl text-black text-opacity-50">Fancy a pint today?</h3>
    <h2 class="text-6xl md:text-8xl">{{randomQuote}}</h2>
  </div>
        <button class="rounded mt-48 p-2 text-black border-2 border-solid text-opacity-70 focus:outline-none" @click="refreshQuote">Press me to update</button>
    <h3 class="m-8 text-2xl text-black text-opacity-50 uppercase">Time until UK pubs reopen:</h3> 
    <h2 class="text-2xl md:text-2xl font-digitaldream">
    {{timeToDisplay}}
    </h2>
        <footer class="text-uderline bg-red text-center flex-grow items-center">
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
    this.createCountDown()
  },
  data:() => {
      return {
          randomQuote: "No",
          currentRandomNumber: null,
          endDate: new Date(2021, 4, 12, 0, 0),
          timeToDisplay: "Month Days Hours Minutes Seconds",
          quotes: [
            "Nah.",
            "Mate, we are locked down.",
            "Are you being silly?!?",
            "listen, we are all thirsty, but we can't go just yet.",
            "Soon, the pubs will be open and we shall rejoice!",
            "You know there's a pandemic happening.",
            "Nope.",
            "Nope, bless'd be the pub garden. 🍻",
            "You having a bubble bath?!? 🛀",
            "No can do.",
            "Maybe sometime in April, we shall see.",
            "🙃 🍻 ⛔ 🍻 ⛔ 🍻 🙃",
            "No can do. Still in lockdown 😥",
            "It's a no from me.",
            "🚨  🚨  🚨  🚨",
            "I'm hella thirsty but we got to stay safe.",
            "Could do with a quick one, but pubs arn't open yet.",
            "potentially, but we are in lockdown.",
            "No.",
            "🤦🤦🏽‍♀️🙅‍♀️🙅🏾‍♂️"
          ]
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
          
          this.timeToDisplay = month + " Month " + day + " Days " + hour + " Hours " + minute + " Minutes " + seconds + " Seconds"
          this.createCountDown()
      }, 1000)
        
      }
  }
}
</script>
