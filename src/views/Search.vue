<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="searchQuery" label="Search"></v-text-field>
        </v-col>
        <v-col>
          <v-btn @click="search" class="success ma-4">Find</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <SubRoom v-for="r in rooms" :key="r.id" :room="r"></SubRoom>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SubRoom from '@/components/SubRoom.vue'
export default {
  name: 'Search',
  data: () => ({
    searchQuery: ''
  }),
  methods: {
    search () {
      if (this.searchQuery !== '') {
        this.$store.dispatch('RoomStore/search', this.searchQuery)
      }
    }
  },
  components: {
    SubRoom
  },
  computed: {
    ...mapState({
      rooms: s => s.RoomStore.searchRooms
    })
  }
}
</script>
