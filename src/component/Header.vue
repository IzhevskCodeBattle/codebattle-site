<template>  
  <v-toolbar app absolute fixed="true">
    <v-toolbar-items class="left_menu">
      <v-btn flat>About</v-btn>
      <v-btn flat>Events</v-btn>
      <v-btn flat>Games</v-btn>
      <v-btn flat @click="goPartners">Partners</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="right_menu">
      <v-btn flat>Login</v-btn>
      <v-btn flat>Sing up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped>

.toolbar{
  background:#76cdd8;
  position: fixed;
  margin: 0;
}
.btn{
  padding-left: 25px;
  padding-right: 25px;
  color: white;
}
</style>