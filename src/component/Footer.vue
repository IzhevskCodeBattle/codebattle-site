<template>
<v-footer app absolute class="footer-layout justify-center" height="64px">
  <div class="justify-center">
    <v-btn :href="icon.href" v-for="icon in icons" :key="icon.icon" icon>
      <v-icon size="25px">{{ icon.icon }}</v-icon>
    </v-btn>
  </div>
  <div class="justify-center">
    <scrollactive ref="scrollactive">
      <a href="#about" class="scrollactive-item">ABOUT</a>
      <a href="#events" class="scrollactive-item">EVENTS</a>
      <a href="#games" class="scrollactive-item">GAMES</a>
      <a href="#contacts">CONTACTS</a>
      <a href="#help">HELP</a>
    </scrollactive>
  </div>
  <v-divider d-block></v-divider>
  &copy;2018 {{ 'app.title'|translate }} {{ $vuetify.t('locales.ru') }}
  <a href="https://github.com/IzhevskCodeBattle/codebattle-site" class="link_git">
    <img alt="link git" src="/static/img/fork-me.png" />
  </a>
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
      { icon: 'fab fa-github-alt', href: 'https://github.com/IzhevskCodeBattle' },
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

.link_git{
  position: fixed;
  right: -5px;
  bottom: -10px;
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
