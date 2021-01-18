<template>
  <div>
   <v-container>
      <v-text-field label="Email"
       :rules="[rules.email]"
       v-model="email"
       ></v-text-field>
       <v-text-field label="Firstname"
       :rules="[rules.required]"
       v-model="firstname"
       ></v-text-field>
        <v-text-field label="Lastname"
       :rules="[rules.required]"
       v-model="lastname"
       ></v-text-field>
        <v-text-field label="Nickname"
       :rules="[rules.required]"
       v-model="nickname"
       ></v-text-field>
       <v-text-field label="Password"
       :rules="[rules.password, rules.length(6)]"
       filled
       v-model="password"
       type="password"
       ></v-text-field>
       <v-text-field label="Confirmation"
       :rules="[rules.password, rules.length(6), passwordConfirmation]"
       filled
       v-model="confirm"
       type="password"
       ></v-text-field>
       <v-btn block grey x-large @click="register">Register</v-btn>
       <div v-if="error" class="ma-3 red--text">Така пошта вже зареєстрована</div>
        <v-btn to="login" outlined class="mt-5 float-left">
           <v-icon>mdi-arrow-left</v-icon>
            Login
        </v-btn>
   </v-container>
  </div>
</template>

<script>
// import User from '../model/User'

export default {
  data: () => ({
    error: false,
    firstname: '',
    lastname: '',
    nickname: '',
    email: '',
    password: '',
    confirm: '',
    rules: {
      email: v => (v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required'
    }
  }),
  methods: {
    register () {
      const t = this
      this.$store.dispatch('UserStore/register', {
        email: t.email,
        password: t.password,
        firstname: t.firstname,
        lastname: t.lastname,
        nickname: t.nickname
      }).then(() => {
        t.error = false
        this.$router.push('/')
      }).catch((err) => {
        console.log(err)
        t.error = true
      })
    }
  },
  name: 'Register',
  components: {
  },
  computed: {
    passwordConfirmation () {
      return () => (this.password === this.confirm) || 'Password must match'
    }
  }
}
</script>
