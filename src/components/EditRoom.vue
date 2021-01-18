<template>
  <v-container>
    <span class="mx-4">Edit Room : {{room.name}}</span>
    <v-btn color="success" class="mx-4" @click="editRoom">Edit room</v-btn>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          dark
          v-bind="attrs"
          v-on="on"
        >
          delete room
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Видалити '{{room.name}}' ?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" text @click="dialog = false">No</v-btn>
          <v-btn color="error" text @click="deleteRoom">DELETE</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <div v-if="error" class="ma-3 red--text">Заповніть поле Name</div>
    <v-text-field v-model="name" label="Name">{{ room.name }}</v-text-field>
    <v-textarea filled v-model="description" label="Description">{{ room.description }}</v-textarea>
  </v-container>
</template>

<script>
export default {
  name: 'CreateRoom',
  data: () => ({
    error: false,
    name: '',
    description: '',
    dialog: false
  }),
  methods: {
    editRoom () {
      if (this.name !== '') {
        this.$emit('closeedittab')
        this.room.name = this.name
        this.room.description = this.description
        this.$store.dispatch('RoomStore/editRoom', this.room)
      } else {
        this.error = true
      }
    },
    deleteRoom () {
      this.$store.dispatch('RoomStore/deleteRoom', this.room)
        .then(() => {
          this.dialog = false
          this.$emit('closeedittab')
        })
    }
  },
  created () {
    this.name = this.room.name
    this.description = this.room.description
  },
  props: ['room']
}
</script>
