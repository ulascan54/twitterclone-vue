<template>
  <router-view  class="bg-black text-white absolute-center gt-sm" style="max-width:1200px; "/>
  <router-view  class="bg-black text-white lt-md" />
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