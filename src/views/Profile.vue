<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          v-model="firstname"
          label="Firstname"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="lastname"
          label="Lastname"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="success" @click="changeProfile">Save</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="5">
        <v-text-field
          label="Old password"
          v-model="oldPassword"
          type="password"
        ></v-text-field>
      </v-col>
      <v-col lg="5">
        <v-text-field
          v-model="newPassword"
          label="New password"
          type="password"
        ></v-text-field>
      </v-col>
      <v-col class="d-flex" lg="2">
        <v-btn class="ma-2" block @click="changePassword">Change it</v-btn>
      </v-col>
    </v-row>
    <v-row>
       <div v-if="passError" class="ma-3 red--text">Неправильні паролі</div>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  data: () => ({
    passError: false,
    firstname: '',
    lastname: '',
    oldPassword: '',
    newPassword: ''
  }),
  methods: {
    changeProfile () {
      this.$store.dispatch('UserStore/changeProfile', {
        firstname: this.firstname,
        lastname: this.lastname
      })
    },
    changePassword () {
      const t = this
      this.$store.dispatch('UserStore/changePassword', {
        oldPassword: t.oldPassword,
        newPassword: t.newPassword
      }).then((resp) => {
        t.passError = false
        t.oldPassword = ''
        t.newPassword = ''
      }).catch((err) => {
        console.log(err)
        t.passError = true
      })
    }
  },
  created () {
    if (this.user != null) {
      this.firstname = this.user.name.split(' ')[0]
      this.lastname = this.user.name.split(' ')[1]
    }
  },
  activated () {
  },
  components: {
  },
  computed: {
    ...mapState({
      user: s => s.UserStore.user
    })
  }
}
</script>
