<template>
  <footer>
    <div class="footer__wrapper">
        <v-btn :href="icon.href" v-for="icon in icons" :key="icon.icon" icon>
          <v-icon size="25px">{{ icon.icon }}</v-icon>
        </v-btn>
             
        <scrollactive ref="scrollactive">
          <router-link to="/home#about" class="scrollactive-item">О НАС</router-link>
          <router-link to="/home#events" class="scrollactive-item">СОБЫТИЯ</router-link>
          <router-link to="/home#games" class="scrollactive-item">ИГРЫ</router-link>
          <router-link to="/home#contacts">КОНТАКТЫ</router-link>
          <router-link to="/home#help">ПОМОЩЬ</router-link>
        </scrollactive>
     
    </div>
    <v-divider d-block></v-divider>
    <!-- &copy;2018 {{ 'app.title'|translate }} {{ $vuetify.t('locales.ru') }} -->
    <a href="https://github.com/IzhevskCodeBattle" class="link_git">
      <img alt="link git" src="/static/img/fork-me.png" />
    </a>
  </footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: 'fab fa-vk', href: 'https://vk.com/izhcodebattle' },
      { icon: 'fab fa-facebook', href: 'https://ru-ru.facebook.com/epamizh/' },
      { icon: 'fab fa-github-alt', href: 'https://github.com/IzhevskCodeBattle' },
      { icon: 'fab fa-instagram', href: 'https://www.instagram.com/epam_izh/' }
    ]
  })
}
</script>

<style scoped>
.footer__wrapper{
  margin: 0 auto;
}
.footer__links a{
  color: #008ACE;
}
.footer-layout {
  width: 60%;
  margin-left: 20%;
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

@media only screen and (max-width: 950px) {
  .footer-layout {
    width: 100%;
    margin: auto;
    display: block;
  }
}
</style>
