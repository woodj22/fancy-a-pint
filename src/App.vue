<template>
  <div id="app" class="flex items-center justify-center h-screen bg-red">
  <CanIGo class="text-center"/>
  </div>

      <footer class="text-uderline bg-red text-center">
    <button class="underline background-transparent outline-none focus:outline-none" type="button" style="transition: all .15s ease">
  <a href="https://woodj22.github.io/#/">Made by Me </a>
</button>
    </footer>

</template>

<script>
import CanIGo from './components/CanIGo.vue'

export default {
  name: 'App',
  components: {
    CanIGo
  }
}
</script>

