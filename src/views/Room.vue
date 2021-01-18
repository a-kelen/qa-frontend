<template>
  <div>
    <v-toolbar fixed height="100">
     <v-container>
       <v-row>
         <v-col lg="1">
           <v-avatar
             size="75"
             color="red"
           >
             QQ
           </v-avatar>
         </v-col>
         <v-col>
           <v-row>
             <span class="ma-1 headline">{{ room.name }}</span>
           </v-row>
           <v-row>
               <span class="ma-1 subtitle-1">{{room.questionCount}} Q / 0 A</span>
           </v-row>
         </v-col>
         <v-spacer></v-spacer>
         <v-col lg="2">
           <v-row>
               <span class="my-1 subtitle-1 float-right">{{room.subscriberCount}} subscribers</span>
           </v-row>
           <v-row>
             <v-btn v-if="!room.isSubscribed" @click="subscribe" color="red darken-1" dark large>subscribe</v-btn>
             <v-btn v-else @click="subscribe" color="red darken-1" outlined="" dark large>Unsubscribe</v-btn>
           </v-row>
         </v-col>
       </v-row>
     </v-container>
    </v-toolbar>
   <v-container>
     <v-sheet>
     <v-row>
       <v-spacer></v-spacer>
       <v-col>
         <v-btn color="success float-right mx-4"  @click="closeCreateQuestionTab">to ask</v-btn>
          <v-bottom-sheet v-model="questionSheet">
            <v-btn
            class="mt-6 blank"
            text
            color="red"
            @click="closeCreateQuestionTab"
          >close</v-btn>
          <v-sheet class="text-center" height="290px">
            <CreateQuestion :room="room" v-on:closetab="closeCreateQuestionTab"></CreateQuestion>
          </v-sheet>
        </v-bottom-sheet>
       </v-col>
     </v-row>
   </v-sheet>
      <v-tabs
        background-color="indigo"
        dark
      >
        <v-tab key="question">
          Questions
        </v-tab>
          <v-tab-item key="question">
            <Question v-for="q in room.questions" :key="q.id" :question="q"></Question>
          </v-tab-item>
        <v-tab key="answer">
          Answers
        </v-tab>
          <v-tab-item key="answer">
            <AnswerLarge v-for="a in answers" :key="a.content" :answer="a"></AnswerLarge>
          </v-tab-item>
      </v-tabs>
   </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
import AnswerLarge from '@/components/AnswerLarge.vue'
import Question from '@/components/Question.vue'
import CreateQuestion from '@/components/CreateQuestion.vue'
import { mapState } from 'vuex'
export default {
  data: () => ({
    tab: null,
    questionSheet: false
  }),
  methods: {
    closeCreateQuestionTab () {
      this.questionSheet = !this.questionSheet
    },
    subscribe () {
      this.$store.dispatch('RoomStore/subscribe', this.room.id)
    }
  },
  created () {
    this.$store.dispatch('RoomStore/getRoom', this.$route.params.id)
  },
  computed: {
    ...mapState({
      room: s => s.RoomStore.activeRoom,
      currentUser: s => s.UserStore.user,
      answers: s => s.QuestionStore.activeAnswers
    })
  },
  name: 'Room',
  components: {
    AnswerLarge,
    Question,
    CreateQuestion
  },
  props: ['id']
}
</script>
