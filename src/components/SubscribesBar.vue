<template>
  <v-container>
    <v-sheet elevation="2">
        <v-container>
            <v-row>
                <v-col v-for="r in rooms" :key="r.id" cols="11" class="d-flex flex-row">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-avatar size="48" class="mx-1"  v-on="on" color="grey">
                                R
                            </v-avatar>
                        </template>
                        <span>{{r.name}}</span>
                    </v-tooltip>
                </v-col>
                <v-col width="20">
                    <router-link :to="{ name: 'subrooms'}">
                        <v-btn x-large icon color="success">
                            <v-icon>mdi-message-arrow-right-outline</v-icon>
                        </v-btn>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SubscribesBar',
  data: () => ({
  }),
  computed: {
    ...mapState({
      rooms: s => s.RoomStore.subscribesRooms
    })
  }
}
</script>
