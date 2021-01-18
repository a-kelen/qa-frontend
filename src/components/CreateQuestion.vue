<template>
  <v-container>
     <span class="mx-4">New Question in {{room.name}}</span>
    <v-btn color="success" @click="create" class="mx-4">Create question</v-btn>
    <v-text-field v-model="title" :rules="[rules.required]" label="Title"></v-text-field>
    <v-textarea v-model="description" filled :rules="[rules.required]" label="Description"></v-textarea>
  </v-container>
</template>

<script>
export default {
  name: 'CreateQuestion',
  data: () => ({
    title: '',
    description: '',
    rules: {
      required: v => !!v || 'This field is required'
    }
  }),
  methods: {
    create () {
      this.$store.dispatch('QuestionStore/createQuestion', {
        roomId: this.room.id,
        title: this.title,
        description: this.description
      })
      this.description = ''
      this.title = ''
      this.$emit('closetab')
    }
  },
  props: ['room']
}
</script>
