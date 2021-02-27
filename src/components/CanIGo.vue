<template>
<div class="CanIGo">
  <div class="uppercase h-48">
    <h3 class="m-8 text-2xl text-black text-opacity-50">Fancy a pint today?</h3>
    <h2 class="text-6xl md:text-8xl">{{randomQuote}}</h2>
  </div>
    <button class="mt-48 text-black text-opacity-30 focus:outline-none" @click="refreshQuote">Refresh me</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    this.refreshQuote()
  },
  data:() => {
      return {
          randomQuote: "No",
          currentRandomNumber: null,
          quotes: [
            "Nah.",
            "Mate, we are locked down.",
            "Are you being silly?!?",
            "listen, we are all thirsty, but we can't go just yet.",
            "Soon they shall be open and we shall rejoice!",
            "You know there's a pandemic happening.",
            "Nope.",
            "Nope, bless'd be the pub garden. 🍻",
            "You having a bubble bath?!?",
            "No can do.",
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
    }
  }
}
</script>
// 300 2rem/2.5rem Roboto Mono,monospace