<template>
<div>
<body>
  <div class="box-canvas">
    <div class="wheel-leg left"></div>
    <div class="wheel-leg right"></div>
    <div class="wheel" id="wheel">
    </div>
    <div class="hamster">
        <div class="body">
          <div class="eye"></div>
          <div class="nose"></div>
        </div>
        <div class="ear"></div>
        <div class="tail"></div>
        <div class="leg front"></div>
        <div class="leg back"></div>
      </div>
  </div>
  <div id="CanIGo" class="text-center">

    <h2 class="m-8 text-2xl text-black text-opacity-50 uppercase">Will Joe and Vi Stay for 2 pints? </h2> 
    <h3 class="m-8 text-black text-opacity-70 uppercase">Place your vote! </h3> 
         <button v-on:click="incrementVoteCount('yes')" class="rounded m-2 p-2 w-32 text-black border-2 border-solid text-opacity-70 focus:outline-none">Yes</button>
        <button  v-on:click="incrementVoteCount('no')" class="rounded m-2 p-2 w-32 text-black border-2 border-solid text-opacity-70 focus:outline-none">No</button>
    </div>
    {{drinkVote.date}}
    {{drinkVote['no_count']}}
    {{drinkVote['yes_count']}}
</body>
</div>
</template>

<script>
import { useStore, mapState, mapGetters } from 'vuex'
import { mounted } from 'vue'

export default {
  name: 'JoeAndVi',
    mounted() {
        // TODO - update this mounted method to be vue3 in style. 
    this.updateWheelSpinSpeed() 
    this.asyncGetDrinkVote('2021-05-26')

  },
  computed: mapState({
    drinkVote: state => state.drinkVote
  }, 
  ),
  setup() {
    const store = useStore();
     return {
      asyncPostDrinkVote: (payload) => store.dispatch('postDrinkVote', payload),
      asyncGetDrinkVote: (date) => store.dispatch('getDrinkVote', date)
    }
  },
   methods: {
    incrementVoteCount: async function(type){
        if (type == "yes"){
            let payload = {
              'date': new Date().toISOString().split('T')[0],
              'yes_increment': 1,
              'no_increment': 0
            }
            await this.asyncPostDrinkVote(payload);
            // console.log(this.$store.state.drinkVote.data)
            // this.drinkVote = drinkVote()
        }
        if (type == "no"){
            let payload = {
              'date': new Date().toISOString().split('T')[0],
              'yes_increment': 0,
              'no_increment': 1
            }  
             this.asyncPostDrinkVote(payload);
        }
        
    },
    updateWheelSpinSpeed(){
        //  This function will change the speed of rotation the closer the time is to midnight
      const now = new Date().getTime();
      
      var rotate_amount = "-360"

      const five_oclock = new Date().setHours(17)
      if (now >= five_oclock) {
        rotate_amount =  "-360"
      }

      const eight_oclock = new Date().setHours(20)
      if (now >= eight_oclock) {
        rotate_amount =  "-720"
      }

      const nine_oclock = new Date().setHours(21)
      if (now >= nine_oclock) {
        rotate_amount =  "-1440"
      }

      const ten_oclock = new Date().setHours(22)
      if (now >= ten_oclock) {
        rotate_amount =  "-2880"
      }

      const twelve_oclock = new Date().setHours(23)
      if (now >= twelve_oclock) {
        rotate_amount =  "-8640"
      }

      // This if statement will make the wheel spin fast if the time is after 12. 
      if (new Date().getHours() < 6) {
           rotate_amount =  "-8640"
      }

      const canvas = document.getElementById('wheel');
      canvas.style.transform = "rotate(" + rotate_amount + "deg)";    
      }
  }

}
</script>

<style> 

:root {
  --wheel-color: #01827F;
  --hamster-color: #F4B874;
}

.box-canvas{
  position: relative;
  margin: auto;
  display: block;
  margin-top: 8%;
  margin-bottom: 8%;
  width: 152px;
  height: 185px;
}

.wheel-leg {
  width: 10px;
  height: 30px;
  background: #80CBC4;
  position: absolute;
  bottom: 15px;
  
}

.wheel-leg.left {
  left: 15px;
  transform: rotate(25deg);
}

.wheel-leg.right {
  right: 15px;
  transform: rotate(-25deg);
}

.wheel {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 10px solid var(--wheel-color);
  border-radius: 50%;
  background: conic-gradient(
    var(--wheel-color),
    var(--wheel-color) 5deg,
    transparent 5deg,
    transparent 60deg,
    var(--wheel-color) 60deg,
    var(--wheel-color) 65deg,
    transparent 65deg,
    transparent 120deg,
    var(--wheel-color) 120deg,
    var(--wheel-color) 125deg,
    transparent 125deg,
    transparent 180deg,
    var(--wheel-color) 180deg,
    var(--wheel-color) 185deg,
    transparent 185deg,
    transparent 240deg,
    var(--wheel-color) 240deg,
    var(--wheel-color) 245deg,
    transparent 245deg,
    transparent 300deg,
    var(--wheel-color) 300deg,
    var(--wheel-color) 305deg,
    transparent 305deg
  );
  animation: spinWheel 10s infinite linear;
}

@keyframes spinWheel {
  0% {
    transform: none;
  }
  

}

.wheel::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #80CBC4;
}

.wheel::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 170px;
  height: 170px;
  border: 10px solid #80CBC4;
  border-radius: 50%;
}

.hamster {
  position: absolute;
  top: 102px;
  left: 50%;
  transform: translateX(-50%);
  width: 75px;
  height: 50px;
}

.body {
  width: 75px;
  height: 40px;
  position: absolute;
  bottom: 0;
  background: var(--hamster-color);
  transform: rotate(10deg);
  border-radius: 50% / 60% 60% 40% 40%;
  overflow: hidden;
}

.body::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 25px;
  background: #F2CEA4;
  bottom: -12px;
  border-radius: 50%;
}

.ear {
  position: absolute;
  left: 13px;
  top: 3px;
  width: 15px;
  height: 15px;
  background: var(--hamster-color);
  border-radius: 50%;
  border-right: 2px solid #E58627;
  transform: rotate(10deg);
}

.tail {
  position: absolute;
  right: -2px;
  top: 25px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--hamster-color);
}

.eye {
  position: absolute;
  left: 8px;
  top: 13px;
  width: 5px;
  height: 5px;
  background: black;
  border-radius: 50%;
}

.nose {
  position: absolute;
  left: 0px;
  top: 18px;
  width: 5px;
  height: 5px;
  background: #F78F9F;
  border-radius: 40%;
}

.nose::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 1px;
  width: 8px;
  height: 5px;
  border-radius: 50%;
  box-shadow: 0 1px 0 black;
}

.leg {
  position: absolute;
  background: var(--hamster-color);
  width: 10px;
  height: 15px;
  border-radius: 30% 50% 30% 30%;
 
  box-shadow: 1px -1px 0 #E58627;
}

.leg.front {
  bottom: -7px;
  left: 15px;
/*   transform: rotate(45deg); */
  transform-origin: top right;
  animation: moveFrontLeg 0.1s infinite linear;
  animation-direction: alternate-reverse;
}

.leg.back {
  right: 15px;
  bottom: -6px;
/*   transform: rotate(-45deg); */
  transform-origin: top left;
  animation: moveBackLeg 0.1s infinite linear;
  animation-direction: alternate-reverse;
}

@keyframes moveFrontLeg {
  0% {
    transform: rotate(65deg);
  }
  
  100% {
    transform: rotate(20deg);
  }
}


@keyframes moveBackLeg {
  0% {
    transform: rotate(25deg);
  }
  
  100% {
    transform: rotate(-65deg);
  }
}
</style>
