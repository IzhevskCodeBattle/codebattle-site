<template>
  <footer>
    <div class="footer__wrapper">
        <div class="icons-wrapper">
          <v-btn :href="icon.href" v-for="icon in icons" :key="icon.icon" icon>
            <v-icon class="icon" size="25px">{{ icon.icon }}</v-icon>
          </v-btn>
        </div>  
        <div class="scrollactive">  
          <scrollactive ref="scrollactive" style="margin: 0 auto">
            <router-link to="/home#about" class="scrollactive-item">О НАС</router-link>
            <router-link to="/home#events" class="scrollactive-item">СОБЫТИЯ</router-link>
            <router-link to="/home#games" class="scrollactive-item">ИГРЫ</router-link>
            <router-link to="/home#partners" class="scrollactive-item">НАШИ ПАРТНЕРЫ</router-link>
          </scrollactive>
        </div>
        <div class="footer__info">
          <span>Появились вопросы? Напиши нам: <p class="info__email">nataliia_sidorova@epam.com</p></span>
        </div>
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
  background-color: #464547;
  margin: 0 10%;
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

.icon {
  color: white!important;
}

.scrollactive {
  display: flex;
  margin: 0 auto;
  width: auto;
  text-align: center;
  padding-bottom: 1%;
}

.scrollactive-item {
  color: white;
}

.icons-wrapper {
  width: 185px;
  margin: 0 auto;
  padding-top: 1%;
}

a {
  text-decoration: none;
  margin: 5px;
}
.footer__info{
  font-size: 15px;
  color: #fff;
  text-align: center;
}
.info__email{
  cursor: pointer;
  display: inline-block;
  margin: 0;
}

@media only screen and (max-width: 950px) {
  .footer-layout {
    width: 100%;
    margin: auto;
    display: block;
  }
  .footer__wrapper {
    margin: 0;
    width: 100%;
  }
}
</style>
