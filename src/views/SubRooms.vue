<template>
  <v-container>
   <v-sheet>
     <v-row>
       <v-col class="title ml-4">
         Rooms: 12
       </v-col>
     </v-row>
   </v-sheet>
   <SubRoom v-for="r in rooms" :key="r.id" :room="r"></SubRoom>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SubRoom from '@/components/SubRoom.vue'
import { mapState } from 'vuex'
export default {
  name: 'SubRooms',
  components: {
    SubRoom
  },
  computed: {
    ...mapState({
      rooms: s => s.RoomStore.subscribesRooms
    })
  },
  created () {
    if (this.rooms.length === 0) {
      this.$store.dispatch('RoomStore/getSubscribesRooms')
    }
  }
}
</script>
