<template>
  <router-view  class="bg-black text-white absolute-center" style="max-width:1200px;"/>
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