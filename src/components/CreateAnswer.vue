<template>
  <v-container>
     <span class="mx-4">New Answer</span>
    <v-btn color="success" @click="create" class="mx-4">Create answer</v-btn>
    <v-textarea class="mt-3" v-model="content" filled :rules="[rules.required]" label="Content"></v-textarea>
  </v-container>
</template>

<script>
export default {
  name: 'CreateAnswer',
  data: () => ({
    content: '',
    rules: {
      required: v => !!v || 'This field is required'
    }
  }),
  methods: {
    create () {
      this.$store.dispatch('QuestionStore/createAnswer', {
        questionId: this.question.id,
        content: this.content
      })
      this.content = ''
      this.$emit('closetab')
    }
  },
  props: ['question']
}
</script>
