<template>  
  <v-toolbar absolute fixed app>
    <v-toolbar-items class="left_menu">
      <v-btn flat>About</v-btn>
      <v-btn flat>Events</v-btn>
      <v-btn flat>Games</v-btn>
      <v-btn flat>Partners</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="right_menu">
      <button><singin-form></singin-form></button>
      <v-btn flat>Sing up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Signin from '@/view/Auth/Signin'

export default {
  components: {
    'singin-form': Signin
  }
}
</script>


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