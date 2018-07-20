<template>
<v-footer>
  <v-card flat tile class="flex">
    <v-card-text class="grey lighten-3">
      <div class="footer-layout">
         <div class="text-xs-center">
          <v-btn v-for="icon in icons" :key="icon" icon>
            <v-icon size="25px">{{ icon }}</v-icon>
          </v-btn>
        </div>
        <div class="text-xs-center">
          <a href="#about">ABOUT</a>
          <a href="#events">EVENTS</a>
          <a href="#games">GAMES</a>
          <a>CONTACTS</a>
          <a>HELP</a>
        </div>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="grey lighten-3 justify-center">
      &copy;2018
    </v-card-actions>
  </v-card>
</v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['fab fa-vk', 'fab fa-facebook', 'fab fa-twitter', 'fab fa-linkedin', 'fab fa-github-alt', 'fab fa-google']
  })
}
</script>

<style scoped>
.footer {
  padding-top: 100px;
  background: white !important;
}

.footer-layout {
  width: 50%;
  margin: auto;
}

a {
  text-decoration: none;
  color: #263852;
  margin: 5px;
}

@media only screen and (max-width: 960px) {
  .footer-layout {
    width: 80%;
    margin: auto;
  }
}
</style>
