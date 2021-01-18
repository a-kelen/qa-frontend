<template>
  <v-container>
    <v-sheet elevation="1">
    <v-row>
      <v-col class="ml-3">
        <span class="mr-1 font-weight-light">from</span>
        <span class="mr-1 font-weight-medium">{{answer.roomName}}</span>
        <v-avatar size="48" class="ml-2" color="red">
          av
        </v-avatar>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <!-- <span class="float-right  ma-2">date</span> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="ml-6 mr-2">{{answer.content}}</p>
      </v-col>
    </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'AnswerLarge',
  data: () => ({
  }),
  props: ['answer']
}
</script>
