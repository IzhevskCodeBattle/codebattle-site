<template>
<v-toolbar fixed app id="header" class="header__wrapper">
  <v-toolbar-side-icon @click.stop="setDrawer" class="white--text hidden-md-and-up"></v-toolbar-side-icon>
    <scrollactive ref="scrollactive" class="left_menu hidden-sm-and-down" :always-track="true" v-on:itemchanged="onItemChanged">
      <v-btn flat class="scrollactive-item" to="/home#about">О проекте</v-btn>
      <v-btn flat class="scrollactive-item" to="/home#events">События</v-btn>
      <v-btn flat class="scrollactive-item" to="/home#games">Игры</v-btn>
      <v-btn flat class="scrollactive-item" to="/home#partners">Наши партнеры</v-btn>
    </scrollactive>
  <v-spacer></v-spacer>
  <v-toolbar-items class="right_menu hidden-sm-and-down" v-if="!this.$store.getters.authenticated">
    <!-- <v-btn flat @click="login" class="scrollactive-item">Войти</v-btn> -->
    <!-- <v-btn flat @click="$events.$emit('signup-form:show')" class="scrollactive-item">Регистрация</v-btn> -->
    <!-- <a href="http://localhost:3000/codebattle/callback">Войти</a> -->
  </v-toolbar-items>
  <!-- <v-toolbar-items class="right_menu hidden-sm-and-down" v-if="this.$store.getters.authenticated">
    <v-menu offset-y nudge-right="26px" max-width="212px">
      <v-btn flat slot="activator">
        <v-icon>fas fa-user-circle</v-icon><span style="margin-left: 5px;">FirstName LastName</span>
      </v-btn>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon>far fa-user</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 17px;">Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 17px;">Sign out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar-items> -->
</v-toolbar>
</template>

<script>
import {DRAWER} from '@/store/mutations'
import auth from '@/service/auth'
export default {
  methods: {
    setDrawer () {
      this.$store.commit(DRAWER, !this.$store.state.navigation.drawer)
    },
    onItemChanged (event, currentItem, lastActiveItem) {
      // your logic
      // console.log(event)
      // console.log(currentItem)
      // console.log(lastActiveItem)
    },
    login () {
      auth.codebattle(this)
    }
  }
}
</script>
<style scoped>
.btn {
  padding-left: 25px;
  padding-right: 25px;
  color: white;
}

.header__wrapper{
  background-color: #464547a6;
  padding-right: 30%;
  padding-left: 30%;
  z-index: 5;
}

.scrollactive-item{
  color: #ffffff;
  height: 64px;
}

/* .is-active {
  color:#76cdd8;
} */

</style>
