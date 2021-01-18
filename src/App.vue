<template>
  <v-app>
   <Navbar/>
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import axios from './store/axios'
export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
  created: function () {
    axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token')
    this.$store.dispatch('UserStore/getCurrentUser')
    // .then(() => this.$router.push('/'))
    // this.$http.interceptors.response.use(undefined, function (err) {
    //   return new Promise(function (resolve, reject) {
    //     if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    //       this.$store.dispatch('logout')
    //     }
    //     throw err
    //   })
    // })
  }
}
</script>
