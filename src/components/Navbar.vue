<template>
  <nav v-if="!!user.email">
      <v-navigation-drawer
      v-model="drawer"
      app
      :dark="theme"
      :mini-variant="mini"
      :permanent="drawer"
    >
      <v-list v-if="!!user.email" >
         <v-list-item>
        <v-list-item-avatar class="ml-n2" @click="mini = !mini">
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{ user.name }}</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <router-link v-for="(item, index) in items"
          :key="index"
           :to="item.path">
        <v-list-item @click="go">
          <v-list-item-action >
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="grey accent-2"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color="white--text">Q&A</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y v-if="!!user.email">
      <template v-slot:activator="{ on }">
        <v-btn
          color="grey accent-4"
          v-on="on"
        >
          {{user.email}}
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          @click="theme = !theme"
        >
          <v-list-item-title>Change Theme</v-list-item-title>
        </v-list-item>
        <v-list-item
          @click="logout"
        >
          <v-list-item-title>Log Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    drawer: true,
    mini: false,
    theme: true,
    items: [
      { title: 'Home', icon: 'mdi-home', path: '/' },
      { title: 'Search', icon: 'mdi-comment-search', path: '/search' },
      { title: 'My rooms', icon: 'mdi-comment', path: '/myrooms' },
      { title: 'My Questions', icon: 'mdi-clipboard-text', path: '/myquestions' },
      { title: 'Profile', icon: 'mdi-account-check', path: '/profile' }
    ]
  }),
  computed: {
    ...mapState({
      user: s => s.UserStore.user
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('UserStore/logout')
        .then(() => {
          this.$router.push('/login')
        })
    },
    go () {}
  }
}
</script>
<style >
  a {
    text-decoration: none;
  }
</style>
