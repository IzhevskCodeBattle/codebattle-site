<template>
<v-footer absolute>
  <v-card flat tile class="flex">
    <v-card-text class="grey lighten-3">
      <div class="footer-layout">
         <div class="text-xs-center">
          <v-btn :href="icon.href" v-for="icon in icons" :key="icon.icon" icon>
            <v-icon size="25px">{{ icon.icon }}</v-icon>
          </v-btn>
        </div>
        <div class="text-xs-center">
          <v-btn href="#about">ABOUT</v-btn>
          <v-btn href="#events">EVENTS</v-btn>
          <v-btn href="#games">GAMES</v-btn>
          <v-btn href="#contacts">CONTACTS</v-btn>
          <v-btn href="#help">HELP</v-btn>
        </div>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="grey lighten-3 justify-center">
      &copy;2018 {{ 'app.title'|translate(this) }} {{ $vuetify.t('locales.ru') }}
    </v-card-actions>
  </v-card>
</v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: 'fab fa-vk', href: 'http://vk.com' },
      { icon: 'fab fa-facebook', href: 'http://facebook.com' },
      { icon: 'fab fa-twitter', href: 'http://twitter.com' },
      { icon: 'fab fa-linkedin', href: 'http://linkedin.com' },
      { icon: 'fab fa-github-alt', href: 'http://github.com' },
      { icon: 'fab fa-google', href: 'http://google.com' }
    ]
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
