<template>
  <v-container>
   <v-sheet>
     <v-row>
       <v-col class="title ml-4">
         Rooms: {{ rooms.length }}
       </v-col>
       <v-spacer></v-spacer>
       <v-col>
         <v-btn color="success float-right mx-4"  @click="closeCreateRoomTab">create room</v-btn>
          <v-bottom-sheet v-model="createRoomSheet">
            <v-btn
            class="mt-6 blank"
            text
            color="red"
            @click="createRoomSheet = !createRoomSheet"
          >close</v-btn>
          <v-sheet class="text-center" height="290px">
          <CreateRoom v-on:closetab="closeCreateRoomTab"></CreateRoom>
          </v-sheet>
        </v-bottom-sheet>
       </v-col>
     </v-row>
   </v-sheet>
   <RoomShort v-for="room in rooms" :room="room" :key="room.name"></RoomShort>
  </v-container>
</template>

<script>
// @ is an alias to /src
import RoomShort from '@/components/RoomShort.vue'
import CreateRoom from '@/components/CreateRoom.vue'
import { mapState } from 'vuex'
export default {
  data: () => ({
    createRoomSheet: false
  }),
  methods: {
    closeCreateRoomTab () {
      this.createRoomSheet = !this.createRoomSheet
    }
  },
  created () {
    this.$store.dispatch('RoomStore/getOwnRooms')
  },
  computed: {
    ...mapState({
      rooms: state => state.RoomStore.ownRooms
    })
  },
  name: 'MyRooms',
  components: {
    RoomShort,
    CreateRoom
  }
}
</script>
