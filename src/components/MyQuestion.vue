<template>
      <v-sheet class="ma-3" elevation="1">
          <v-row>
              <v-col>
                  <span class="title ml-6">{{question.title}}</span>
              </v-col>
          </v-row>
          <v-row class="my-n2">
              <v-col>
                  <p class="font-weight-thin ml-4">{{question.description}}</p>
              </v-col>
          </v-row>
          <v-row  class="my-n2">
              <v-spacer></v-spacer>
              <v-col>
                  <span class="float-right mx-4">{{question.support}} points</span>
              </v-col>
               <!-- <v-col>
                  <span class="float-right mx-4">time</span>
              </v-col> -->
          </v-row>
      </v-sheet>
</template>

<script>
export default {
  name: 'MyQuestion',
  data: () => ({
  }),
  props: ['question']
}
</script>
