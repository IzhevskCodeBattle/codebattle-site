<template>

  <v-app fill-height >
        <v-toolbar  app absolute fixed="true">
          <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->

        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

        <v-toolbar-items class="left_menu">
          <v-btn flat>About</v-btn>
          <v-btn flat>Events</v-btn>
          <v-btn flat>Games</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="right_menu">
          <v-btn flat>Login</v-btn>
          <v-btn flat>Sing up</v-btn>
        </v-toolbar-items>
 
        </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      
    </v-app>

</template>

<style scoped>

.toolbar{
  background:#76cdd8;
  position: fixed;
}
.btn{
  padding-left: 25px;
  padding-right: 25px;
  color: white;
}
</style>