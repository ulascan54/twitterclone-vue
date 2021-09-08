<template>
  <q-page class="text-white relative-position">
    <q-scroll-area class="absolute full-width full-height">
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
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.christliche-partner-suche.de%2Fuser_fotos%2F20311%2Flarge%2F20311_1_s4pev.jpg&f=1&nofb=1"
                />
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
            @click="addNewTweet"
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
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            class="q-py-md"
            v-for="item in tweets"
            :key="item.id"
            style="border-bottom: 1px solid #ffffff40"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.christliche-partner-suche.de%2Fuser_fotos%2F20311%2Flarge%2F20311_1_s4pev.jpg&f=1&nofb=1"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1"
                ><strong>Test User </strong>
                <span class="text-grey-7">
                  @test123 <br class="lt-md" />
                  &bull; {{ relativeDate(item.date) }}
                </span>
              </q-item-label>
              <q-item-label class="tweet-content text-body-one">
                {{ item.content }}
              </q-item-label>
              <div class="row justify-between q-mt-sm tweet-icons">
                <q-btn
                  flat
                  round
                  color="grey-7"
                  icon="far fa-comment"
                  size="sm"
                  class="btn-action"
                />
                <q-btn
                  flat
                  round
                  color="grey-7"
                  icon="fas fa-retweet"
                  size="sm"
                  class="btn-action"
                />
                <q-btn
                  flat
                  round
                  :color="item.liked === true ? 'pink' : 'grey-7'"
                  :icon="item.liked === true ? 'fas fa-heart' : 'far fa-heart'"
                  @click="toggledLiked(item)"
                  size="sm"
                  class="btn-action"
                />
                <q-btn
                  @click="deleteTweet(item)"
                  flat
                  round
                  color="grey-7"
                  icon="fas fa-trash"
                  size="sm"
                  class="btn-action"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from "src/boot/firebase";
import { formatDistance } from "date-fns";

export default {
  name: "PageHome",
  data() {
    return {
      newTweetContent: null,
      tweets: [
        // {
        //   content:
        //     " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio cum optio a saepe deleniti. Voluptate nemo, beatae iure corporis ullam sint alias est optio, illo, animi iusto quasi? Animi, dicta!",
        //   date: 1631040233608,
        //   liked: false,
        // },
        // {
        //   content:
        //     " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio cum optio a saepe deleniti. Voluptate nemo, beatae iure corporis ullam sint alias est optio, illo, animi iusto quasi? Animi, dicta!",
        //   date: 1631050233608,
        //   liked: true,
        // },
      ],
    };
  },

  methods: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
    addNewTweet() {
      let newTweet = {
        content: this.newTweetContent,
        date: Date.now(),
        liked: false,
      };
      // this.tweets.unshift(newTweet);
      db.collection("tweets")
        .add(newTweet)
        .then(function (docRef) {
          console.log("Document written with ID:", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document:", error);
        });
      this.newTweetContent = "";
    },
    deleteTweet(tweet) {
      // let dateToDelete = tweet.date;
      // let index = this.tweets.findIndex((t) => t.date === dateToDelete);
      // this.tweets.splice(index, 1);
      db.collection("tweets")
        .doc(tweet.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted !");
        })
        .catch(function (error) {
          console.error("Error adding document:", error);
        });
    },
    toggledLiked(item) {
      item.liked = !item.liked;
      db.collection("tweets")
        .doc(item.id)
        .update({ liked: item.liked })
        .then(function () {
          console.log("Document successfully updated!");
        })
        .catch(function (error) {
          console.error("Error adding document:", error);
        });
    },
  },

  mounted() {
    db.collection("tweets")
      .orderBy("date")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let tweetChance = change.doc.data();
          tweetChance.id = change.doc.id;
          if (change.type === "added") {
            console.log("New tweet: ", tweetChance);
            this.tweets.unshift(tweetChance);
          }
          if (change.type === "modified") {
            console.log("Modified tweet: ", tweetChance);
            let index = this.tweets.findIndex(
              (tweet) => tweet.id === tweetChance.id
            );
            Object.assign(this.tweets[index], tweetChance);
          }
          if (change.type === "removed") {
            console.log("Removed tweet: ", tweetChance);
            let index = this.tweets.findIndex(
              (tweet) => tweet.id === tweetChance.id
            );
            this.tweets.splice(index, 1);
          }
        });
      });
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
