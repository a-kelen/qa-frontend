<template>
  <v-container>
    <span class="title">Questions: {{count}}</span>
    <MyQuestion v-for="q in questions" :key="q.id" :question="q"></MyQuestion>
  </v-container>
</template>

<script>
// @ is an alias to /src
import MyQuestion from '@/components/MyQuestion.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'MyQuestions',
  components: {
    MyQuestion
  },
  computed: {
    ...mapState({
      questions: s => s.QuestionStore.myQuestions
    }),
    ...mapGetters({
      count: 'QuestionStore/myQuestionsCount'
    })
  },
  created () {
    this.$store.dispatch('QuestionStore/getMyQuestions')
  }
}
</script>
