<template>
  <v-container>
    <span class="mx-4">New Room</span>
    <v-btn color="success" @click="create" class="mx-4">Create room</v-btn>
     <div v-if="error" class="ma-3 red--text">Така кімната вже існує</div>
    <v-text-field v-model="name" :rules="[rules.required]" label="Name"></v-text-field>
    <v-textarea v-model="description" filled :rules="[rules.required]" label="Description"></v-textarea>
  </v-container>
</template>

<script>
export default {
  name: 'CreateRoom',
  data: () => ({
    error: false,
    name: '',
    description: '',
    rules: {
      required: v => !!v || 'This field is required'
    }
  }),
  methods: {
    create () {
      const t = this
      this.$store.dispatch('RoomStore/createRoom', {
        name: t.name,
        description: t.description
      }).then(() => {
        this.$emit('closetab')
        this.name = ''
        this.description = ''
        t.error = false
      }).catch((err) => {
        console.log(err)
        t.error = true
      })
    }
  }
}
</script>
