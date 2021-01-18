<template>
  <v-container>
    <v-sheet elevation="3" class="pa-4 d-flex">
      <v-avatar
        size="48"
        color="red"
      >
        R
      </v-avatar>
      <router-link class="headline mx-3 align-self-center font-weight-medium" :to="{ name: 'room', params: {id: room.id}}">{{room.name}}</router-link>
      <v-spacer></v-spacer>
      <span class="align-self-center">{{room.questionCount}} question(s)</span>
      <!-- <v-btn class="ma-2" tile outlined color="red darken-1">
        <v-icon left>mdi-pencil</v-icon> subscribe
      </v-btn> -->
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'SubRoom',
  data: () => ({
  }),
  props: ['room']
}
</script>
