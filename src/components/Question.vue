<template>
<v-container>
  <v-sheet elevation="1">
    <v-row>
      <v-col>
        <v-sheet>
          <v-row>
              <v-col>
                  <span class="title ml-6">{{question.title}}</span>
              </v-col>
              <v-spacer></v-spacer>
               <v-col lg="1" >
                 <v-btn class="float-right d-flex mx-3" @click="support">
                   <!-- <v-icon size="25" left>mdi-chevron-up-circle</v-icon> -->
                   <span class="font-weight-bold mx-1">Support</span>
                   <span class="justify-self-center caption"> {{question.support}} </span>
                 </v-btn>
              </v-col>
          </v-row>
          <v-row class="my-n2">
              <v-col>
                  <p class="font-weight-thin ml-4">{{question.description}}</p>
              </v-col>
          </v-row>
          <v-row  class="my-n2">
              <v-col v-if="isCompleted === 0">
                  <v-btn color="success" class="ml-4" outlined  @click="closeCreateAnswerTab">to answer</v-btn>
                  <v-btn color="error" class="ma-4" outlined  @click="ignore">ignore</v-btn>
                    <v-bottom-sheet v-model="answerSheet">
                        <v-btn
                        class="mt-6 blank"
                        text
                        color="red"
                        @click="closeCreateAnswerTab"
                    >close</v-btn>
                    <v-sheet  class="text-center" height="290px">
                        <CreateAnswer :question="question" v-on:closetab="closeCreateAnswerTab"></CreateAnswer>
                    </v-sheet>
                </v-bottom-sheet>
              </v-col>
              <v-col v-else-if="isCompleted === 2" class="ml-4"><span class="red--text">Ignored</span></v-col>
              <v-col v-else class="ml-4"><span class="green--text">Completed</span></v-col>
              <v-spacer></v-spacer>
              <v-col>
                <div class="float-right mx-4">
                  <span class="font-weight-thin">by </span>
                  <span class="font-weight-medium">@{{question.author}} </span>
                  <!-- <span class="font-weight-thin">at </span>
                  <span>time</span> -->
                </div>
              </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-sheet>
</v-container>
</template>

<script>
import CreateAnswer from '@/components/CreateAnswer.vue'
import { mapState } from 'vuex'
export default {
  name: 'Question',
  data: () => ({
    answerSheet: false
  }),
  methods: {
    closeCreateAnswerTab () {
      this.answerSheet = !this.answerSheet
    },
    support () {
      this.$store.dispatch('QuestionStore/support', this.question.id)
    },
    ignore () {
      this.$store.dispatch('QuestionStore/ignore', this.question.id)
    }
  },
  computed: {
    ...mapState({
      currentUser: s => s.UserStore.user
    }),
    isCompleted () {
      return this.question.isCompleted
    }
  },
  components: {
    CreateAnswer
  },
  props: ['question']
}
</script>
