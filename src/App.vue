<template>
  <router-view  class="bg-black text-white absolute-center gt-sm" style="max-width:1200px; z-index:0;"/>
  <router-view  class="bg-black text-white lt-md" style="z-index:4;"/>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>
<style>
body{
  background-color: black;
}
</style>