<template>
<v-footer app absolute class="footer-layout" height="64px">
  <div class="justify-center" d-block>
    <v-btn :href="icon.href" v-for="icon in icons" :key="icon.icon" icon>
      <v-icon size="25px">{{ icon.icon }}</v-icon>
    </v-btn>
  </div>
  <div class="justify-center" d-block>
    <scrollactive ref="scrollactive">
      <a href="#about" class="scrollactive-item">ABOUT</a>
      <a href="#events" class="scrollactive-item">EVENTS</a>
      <a href="#games" class="scrollactive-item">GAMES</a>
      <a href="#contacts">CONTACTS</a>
      <a href="#help">HELP</a>
    </scrollactive>
  </div>
  <v-divider d-block></v-divider>
  <v-layout class="justify-center" d-block>
    &copy;2018 {{ 'app.title'|translate }} {{ $vuetify.t('locales.ru') }}
  </v-layout>
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
  width: 100%;
  margin: auto;
  display: block;
  text-align: center;
}

a {
  text-decoration: none;
  margin: 5px;
}

@media only screen and (max-width: 960px) {
  .footer-layout {
    width: 100%;
    margin: auto;
    display: block;
  }
}
</style>
