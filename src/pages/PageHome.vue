<template>
  <q-page class="text-white">
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md ">
      <div class="col">
        <q-input
          dark
          autogrow
          bottom-slots
          v-model="newTweetContent"
          label="Neler Oluyor ?"
          counter
          maxlength="280"
          class="new-tweet"
          color="primary"
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://avatars.githubusercontent.com/u/39746408?v=4" />
            </q-avatar>
          </template>

          <template v-slot:append>
            <q-icon
              v-if="newTweetContent !== ''"
              name="close"
              @click="newTweetContent = ''"
              class="cursor-pointer"
              color="grey-6"
            />
          </template>
        </q-input>
      </div>
      <div class="col col-shrink ">
        <q-btn
          :disable="!newTweetContent"
          unelevated
          rounded
          color="primary"
          label="Çıldırt"
          class="q-mb-md"
          no-caps
        />
      </div>
    </div>
            <q-separator class="bg-grey-8" />
  </q-page>
</template>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      newTweetContent: null,
    };
  },
};
</script>
<style lang="sass">
.new-tweet
  textarea
    font-size:19px
    line-height:1.4 !important
</style>
