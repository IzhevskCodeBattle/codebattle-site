<template>
<v-footer absolute>
  <v-card flat tile class="flex">
    <v-card-text>
      <div class="footer-layout">
         <div class="text-xs-center">
          <v-btn :href="icon.href" v-for="icon in icons" :key="icon" icon>
            <v-icon size="25px">{{ icon.icon }}</v-icon>
          </v-btn>
        </div>
        <div class="text-xs-center">
          <scrollactive ref="scrollactive">
          <a href="#about" class="scrollactive-item">ABOUT</a>
          <a href="#events" class="scrollactive-item">EVENTS</a>
          <a href="#games" class="scrollactive-item">GAMES</a>
          <a href="#contacts">CONTACTS</a>
          <a href="#help">HELP</a>
          </scrollactive>
        </div>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-center">
      &copy;2018; {{ $vuetify.t('app.title') }} : {{ $vuetify.t('title') }} :{{ $vuetify.t('rrr') }} : {{ $vuetify.t('Footer.rrr') }}
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
.footer-layout {
  width: 50%;
  margin: auto;
}

a {
  text-decoration: none;
  color: white;
  margin: 5px;
}

@media only screen and (max-width: 960px) {
  .footer-layout {
    width: 80%;
    margin: auto;
  }
}
</style>
