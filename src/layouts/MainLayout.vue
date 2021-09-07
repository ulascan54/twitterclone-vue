<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-black text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold"> Home </q-toolbar-title>

        <q-btn dense flat round icon="auto_awesome" />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :width="283"
      side="left"
      class="bg-black"
      bordered
    >
      <q-icon name="fas fa-dog" size="lg" color="white" class="q-pa-md" />
      <q-list  class="text-white">

        <q-item clickable v-ripple to="/"  >
          <q-item-section avatar>
            <q-icon  name="cottage"  size="md"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon  name="fas fa-question-circle"  size="md"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
