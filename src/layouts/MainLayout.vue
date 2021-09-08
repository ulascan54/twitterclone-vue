<template>
  <q-layout view="lHr lpR fFf">
    <q-header
      bordered
      class="bg-black text-white"
      style="
        border-left: 1px solid #ffffff40;
        border-right: 1px solid #ffffff40;
      "
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
          class="lt-md"
        />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            name="fas fa-dove "
            size="lg"
            color="white"
            class="q-pa-md absolute-center lt-md"
          />
        </q-toolbar-title>

        <q-btn dense flat round icon="auto_awesome" />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :width="283"
      side="left"
      class="bg-black"
      style="border-top: 1px solid black; z-index:1;"
    >
      <q-toolbar-title class="text-weight-bold">
        <span class="text-white absolute-left q-mt-lg q-ml-md q-pl-xl"
          >Çıldırttır</span
        >
      </q-toolbar-title>

      <q-icon name="fas fa-dove" size="lg" color="white" class="q-pa-md" />
      <q-list class="text-grey-6">
        <q-item
          clickable
          v-ripple
          to="/"
          exact
          class="text-h6"
          active-class=" text-weight-bold text-white "
        >
          <q-item-section avatar>
            <q-icon name="cottage" size="md" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/about"
          exact
          class="text-h6"
          active-class="text-weight-bold text-white"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-question-circle" size="md" />
          </q-item-section>
          <q-item-section>About</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      class="bg-black"
      style="border-top: 1px solid black"
    >
      <q-input
        class="q-ma-md"
        color="primary"
        bg-color="grey-9"
        rounded
        outlined
        dense
        label="Search"
        dark
      >
        <template v-slot:prepend>
          <q-icon name="search" color="grey-4" />
        </template>
      </q-input>
      <q-list
        padding
        separator
        class="bg-grey-9 q-ma-md"
        style="border-radius: 15px"
      >
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey-5">Eğitim</q-item-label>
            <q-item-label class="text-weight-bold text-white"
              >Vue çok çılgın birşey...</q-item-label
            >
            <q-item-label caption class="text-grey-5"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption class="text-grey-6">5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey-5">Eğitim</q-item-label>
            <q-item-label class="text-weight-bold text-white"
              >Vue çok çılgın birşey...</q-item-label
            >
            <q-item-label caption class="text-grey-5"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption class="text-grey-6">5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey-5">Eğitim</q-item-label>
            <q-item-label class="text-weight-bold text-white"
              >Vue çok çılgın birşey...</q-item-label
            >
            <q-item-label caption class="text-grey-5"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption class="text-grey-6">5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view style="border: 1px solid #ffffff40; z-index:0;" />
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
