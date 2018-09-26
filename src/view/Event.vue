<template>
  <div class="event-page" v-bind:style="{ backgroundImage : currentEvent.background, 'background-size' : 'cover' }">
    <div id="about" class="anchor"></div>
    <div id="events" class="anchor"></div>
    <div id="games" class="anchor"></div>
    <div id="partners" class="anchor"></div>
    <div id="help" class="anchor"></div>
    <div id="contacts" class="anchor"></div>
    <img class="event-image" v-bind:src="currentEvent.poster_image.uploadcare_url" alt='Картинка мероприятия'>
    <div class="event-registration">
      <!-- <img class="event-registration__logo" src=../../static/img/EPAM_LOGO.png alt="epam_logo"> -->
      <div class="event-registration__name" v-bind:style="{ color : currentEvent.fontColor }">{{ currentEvent.name }}</div>
      <div class="event-registration__buttons">
        <button class="game-button" v-on:click="redirect(currentEvent.gameId)">ПРАВИЛА ИГРЫ</button>
        <button class="reg-button" id='twf' v-if="!currentEvent.isPast" v-bind:data-twf-target-state="this.registrationLink">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
    </div>
    <div class="event-date__wrapper">
      <div class="event-date">
          <div class="event-date__item" v-bind:style="{ color : currentEvent.fontColor }">
            Начало: <br>{{ currentEvent.starts_at | TimeFilter }}
          </div>
          <div class="event-date__item" v-bind:style="{ color : currentEvent.fontColor }">
            Дата: <br>{{ currentEvent.starts_at | DateFilter}}
          </div>
          <div class="event-date__item" v-bind:style="{ color : currentEvent.fontColor }">
            Место проведения: <br>{{ currentEvent.online?'Online':currentEvent.location.address }}
          </div>
      </div>
    </div>
    <v-layout class="event-content">
      <div class="event__info" v-html="currentEvent.description_html" v-bind:style="{ color : currentEvent.fontColor }">
      </div>
      <!-- <v-container v-bind:style="{ color : currentEvent.fontColor }" v-html="currentEvent.description_html"/> -->
    </v-layout>
    <!-- <h2 class="event__title" v-bind:style="{ color : currentEvent.fontColor }">Правила начисления очков</h2>
    <v-container v-bind:style="{ color : currentEvent.fontColor, 'font-size' : '1.6em', 'width':'80%','margin' : '0 auto' }" v-html="currentEvent.rules"/> -->
    <h2 class="event__title" v-if="!currentEvent.online" v-bind:style="{ color : currentEvent.fontColor }">Место проведения</h2>
    <div class="map__container">
      <div class="map__coords" v-bind:style="{ color : currentEvent.fontColor }">{{currentEvent.location.address}}</div>
      <div class="map__wrapper">
        <iframe v-bind:src="currentEvent.map_url"
          width="300px"
          height="300px"
          frameborder="0"></iframe>
      </div>
    </div>
    <!-- <h2 class="event__title">Галерея</h2>
    <div class="game__gallery">
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="pic in currentEvent.pictures" :key="pic.title">
          <img class="pictures" :src="pic.src" :alt="pic.title" />
        </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div> -->
    <!-- <EventPage/> -->
    <!-- <div class="event-video" v-if="currentEvent.id == 658608">
      <div class="video__wrapper">
        <video class="video" controls preload="auto">
          <source src="/static/media/codebattle.webm" type="video/webm">
        </video>
      </div>
    </div> -->
  </div>
</template>
<script>

import EventPage from '@/component/EventPage'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import store from '@/store'
import {CREATE_EVENT_OBJECT} from '../store/actions'
import { mapState } from 'vuex'

export default {
  computed: {
    registrationLink: function () {
      return `{"event_id": ${this.$route.params.id}}`
    },
    ...mapState({
      currentEvent: state => {
        return state.event.currentEvent
      }
    })
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }),
  name: 'Event',
  components: {
    EventPage,
    swiper,
    swiperSlide
  },
  filters: {
    TimeFilter (val) {
      return val.toString().split('').splice(11, 5).join('') || ''
    },
    DateFilter (val) {
      return val.toString().split('').splice(0, 10).join('') || ''
    }
  },
  created () {
    store.dispatch(CREATE_EVENT_OBJECT, this.$route.params.id)
    window.scrollTo(0, 0)
  },
  methods: {
    redirect: function (id) {
      this.$router.push({name: 'game', params: { id }})
    }
  }
}
</script>

<style scoped>
    @font-face {
      font-family: SourceSansPro;
      src: url(../../static/fonts/SourceSansPro-BoldIt.otf);
    }
    @font-face {
      font-family: SourceSansPro-lt;
      src: url(../../static/fonts/SourceSansPro-It.otf);
    }
    .map__container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      height: 300px;
      margin: 0 auto;
    }
    .map__coords{
      color: inherit;
      font-size: 1.5em;
      text-align: center;
      margin-right: 7%;
    }
    .map__wrapper{
      position: relative;
    }
    .event-page {
      font-size: 1.2em;
    }
    .event-content {
      width: 80%;
      margin:0 auto;
      display: block;
    }
    .event__info{
      font-size: 1.6em;
      font-weight: 300;
      color: inherit;
      text-align: justify;
    }
    .event__title{
        text-align: center;
        font-size: 30px;
        font-weight: normal;
        border-bottom: 1px solid darkgrey;
        color: inherit;
        margin: 30px 10% 20px;
    }
    .event-registration {
      position: absolute;
      top: 5%;
      left: 15%;
    }
    .event-registration__name {
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 4em;
      font-weight: bold;
      text-align: left;
      padding-left: 0;
      color: #464547;
    }
    .event-registration__logo {
      width: 30%;
      height: 10%;
    }
    .event-image {
      position: relative;
      width: 100%;
      height: 400px;
      display: flex;
      margin: 0 auto;
      opacity: .5;
      object-fit: cover;
    }

    .reg-button {
      text-align: center;
      padding: 10px;
      background-color: #39c2d7;
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      border: none;
      border-radius: 3px;
      margin-left: 2%;
    }
    .game-button {
      text-align: center;
      padding: 10px;
      background-color: #CEDB56;
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      border: none;
      border-radius: 3px;
    }
    .reg-button:focus {
      outline: none;
    }
    .game-button:focus {
      outline: none;
    }
    .event-date {
      width: 70%;
      height: 15%;
      margin: 0 auto;
      padding: 2% 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    .event-date__wrapper {
      width: 100%;
      background-color: #f9f9f9;
      margin-bottom: 3%;
      border-top: 1px solid darkgrey;
      border-bottom: 1px solid darkgrey;
      background: rgba(249, 249, 249, 0);
    }
    .event-date__item {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: Roboto;
      font-size: 1.6vw;
      color: #96979d;
      border-right: 1px solid darkgrey;
      padding: 3%;
      height: 80px;
      width: 30%;
    }
    .event-date__item:last-child {
      width: 40%;
    }
    .event-date__item:last-child {
      border: none;
    }
    .event-main {
      display: flex;
      align-items: top;
      justify-content: center;
      width: 70%;
      margin: 0 auto;
      margin-bottom: 10%;
      font-size: 1.6em;
    }
    .event-video {
      margin-bottom: 10%;
    }
    .video {
      width: 80%;
    }
    .video__wrapper{
      display: flex;
      justify-content: space-around;
     align-items: flex-start;
    }
    .event-main__description {
      width: 70%;
      font-family: 'Play', sans-serif;
      font-weight: bold;
      color: #464547;
      padding-right: 3%;
    }
    .event-main__description::before {
      content: '"';
    }
    .event-main__description::after {
      content: '"';
    }
    .event-main__map-wrapper {
      width: 40%;
      height: 300px;
    }

    /* ГАЛЕРЕЯ */
    .game__gallery{
      display: flex;
      padding: 15px;
      width: 100%;
      margin-bottom: 20px;
    }

    .pictures{
    max-height: 500px;
    object-fit: cover;
    cursor: pointer;
    margin: 0 auto;
  }
  .swiper{
    text-align: center;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .swiper-container {
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .swiper-slide{
    display: flex;
    align-items: center;
    margin-right: 0;
  }
  .swiper-button-prev{
    filter: opacity(70%) grayscale(.80)
  }
  .swiper-button-next{
    filter: opacity(70%) grayscale(.80)
  }
/* ////////////////////////////////// */
    @media (max-width: 1024px) {
      .event-registration__name {
        font-size: 3em;
      }
      .event-main__description {
        font-size: 1.2em;
      }
      .event-date__item {
        font-size: 1em;
      }

    }
    @media (max-width: 780px) {
      .event-image {
        height: 300px;
      }
      .event-registration {
        top: 3%;
        left: 6%;
      }
      .event-registration__name {
        width: 100%;
        font-size: 2em;
        text-align: left;
      }
      .reg-button {
        font-size: 1em;
      }
      .game-button {
        margin-left: 0;
        margin-top: 2%;
        font-size: 1em;
      }
      .event-date {
        flex-direction: column;
      }
      .event-date__item {
        border-right: none;
        border-bottom: 1px solid darkgrey;
        width: 100%;
        font-size: 0.9em;
      }
      .event-main {
        display: flex;
        flex-direction: column;
      }
      .event-main__description {
        font-size: 1em;
        width: 100%;
        text-align: center;
        margin-top: 7%;
      }
      .event-main__map-wrapper {
        width: 100%;
        height: 200px;
        margin-top: 2%;
        margin-bottom: 50%;
      }
      .pictures{
        max-height: 400px;
      }
      .swiper-button-prev{
        filter: opacity(0%)
      }
      .swiper-button-next{
        filter: opacity(0%)
       }
    }
    @media (max-width: 600px) {
      .game-button, .reg-button {
        font-size: .9em;
      }
      .map__container{
        flex-direction: column;
        justify-content: flex-start;
        height: 400px;
      }
      .map__coords{
        margin: 0;
        margin-bottom: 20px;
      }
      .event-date__item:last-child {
        width: 100%;
      }
      .event-registration{
        top: 3%;
        left: 5%;
      }
      .pictures{
        max-height: 150px;
      }
      .swiper-button-prev{
        filter: opacity(0%)
      }
      .swiper-button-next{
        filter: opacity(0%)
       }
    }

</style>
