<template>
  <div class="home">
  <SubscribesBar></SubscribesBar>
  <span class="ml-5 title">Latest answers</span>
  <AnswerLarge v-for="a in answers" :answer="a" :key="a.id"></AnswerLarge>
  </div>
</template>

<script>
// @ is an alias to /src
import SubscribesBar from '@/components/SubscribesBar.vue'
import AnswerLarge from '@/components/AnswerLarge.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    SubscribesBar,
    AnswerLarge
  },
  created () {
    this.$store.dispatch('RoomStore/getSubscribesRooms')
    this.$store.dispatch('QuestionStore/getLastestAnswers')
  },
  computed: {
    ...mapState({
      answers: s => s.QuestionStore.lastestAnswers
    })
  }
}
</script>
