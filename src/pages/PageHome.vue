<template>
  <q-page class="text-white">
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
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
      <div class="col col-shrink">
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
    <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://avatars.githubusercontent.com/u/39746408?v=4" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1"
            ><strong>Ulaş Can Demirbağ </strong>
            <span class="text-grey-7"> @ulascan54</span>
          </q-item-label>
          <q-item-label class="tweet-content text-body-one">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            possimus nam voluptatem pariatur obcaecati dolore, maiores facilis
            illo dolores eaque quos facere temporibus repudiandae repellat
            itaque qui. 
            Quis, aliquid quod!
          </q-item-label>
          <div class="row justify-between q-mt-sm tweet-icons">
                <q-btn flat round color="grey-7" icon="far fa-comment" size="sm" class="btn-action"/>
                <q-btn flat round color="grey-7" icon="fas fa-retweet" size="sm" class="btn-action"/>
                <q-btn flat round color="grey-7" icon="fas fa-heart" size="sm" class="btn-action"/>
                <q-btn flat round color="grey-7" icon="fas fa-trash" size="sm" class="btn-action"/>
          </div>
        </q-item-section>

        <q-item-section side top> 1 min ago </q-item-section>
      </q-item>

      <q-separator class="bg-grey-8" />
    </q-list>
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

.tweet-content
  white-space: pre-line !important

.btn-action:hover
  color: white !important

.tweet-icons
  margin-left: -5px
</style>
