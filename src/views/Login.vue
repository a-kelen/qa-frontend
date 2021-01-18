<template>
  <div>
   <v-container>
       <v-text-field label="Email"
       :rules="[rules.email]"
       v-model="email"
       ></v-text-field>
       <v-text-field label="Password"
       :rules="[rules.password, rules.length(6)]"
       filled
       v-model="password"
       type="password"
       ></v-text-field>
       <v-btn block grey x-large @click="sign">Sign in</v-btn>
        <div v-if="error" class="ma-3 red--text">Неправильний логін або пароль</div>
       <v-btn to="register" outlined class="mt-5 float-right">
            Register
           <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
   </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    error: false,
    email: '',
    password: '',
    rules: {
      email: v => (v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required'
    }
  }),
  methods: {
    sign () {
      const t = this
      this.$store.dispatch('UserStore/login', {
        email: t.email,
        password: t.password
      }).then(() => {
        this.$router.push('/')
        t.error = false
      }).catch((err) => {
        console.log(err)
        t.error = true
      })
    }
  },
  name: 'Login',
  components: {
  }
}
</script>
