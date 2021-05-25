<template>
    <div id="app" class="flex flex-grow items-center justify-center h-screen">
   <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


export default class App extends Vue {}
</script>

