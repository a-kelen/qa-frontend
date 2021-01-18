<template>
  <v-container>
    <v-sheet elevation="3" class="pa-4 d-flex">
      <v-avatar
        size="48"
        color="red"
      >
        R
      </v-avatar>
      <router-link class="headline mx-3 align-self-center font-weight-medium" :to="{ name: 'room', params: {id: room.id}}">{{ room.name }}</router-link>
      <v-spacer></v-spacer>
      <span class="align-self-center">{{room.questionCount}} question(s)</span>
      <v-btn class="ma-2" tile outlined color="success" @click="updateRoomSheet=!updateRoomSheet">
      <v-icon left>mdi-pencil</v-icon> Edit
    </v-btn>
    <v-bottom-sheet v-model="updateRoomSheet">
            <v-btn
            class="mt-6 blank"
            text
            color="red"
            @click="updateRoomSheet = !updateRoomSheet"
          >close</v-btn>
          <v-sheet class="text-center" height="290px">
            <EditRoom :room="room" v-on:closeedittab="closeEditTab"></EditRoom>
          </v-sheet>
        </v-bottom-sheet>
    </v-sheet>
  </v-container>
</template>

<script>
import EditRoom from './EditRoom'
export default {
  name: 'RoomShort',
  data: () => ({
    updateRoomSheet: false
  }),
  props: ['room'],
  methods: {
    closeEditTab () {
      this.updateRoomSheet = false
    }
  },
  components: {
    EditRoom
  }
}
</script>
