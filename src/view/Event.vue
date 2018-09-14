<template>
  <v-content class="event-page" v-bind:style="{ backgroundImage : currentEvent.background }">
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
        <button class="game-button" v-on:click="redirect(currentEvent.gameId)">ПОСМОТРЕТЬ ИГРУ</button>
        <button class="reg-button" id='twf' v-if="!isEventPast(currentEvent.starts_at)" v-bind:data-twf-target-state="this.registrationLink">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>  
    </div>
    <div class="event-date__wrapper">
      <div class="event-date">
          <div class="event-date__item" v-bind:style="{ color : currentEvent.fontColor }">
            Начало мероприятия: <br>{{ currentEvent.starts_at | TimeFilter }}
          </div>
          <div class="event-date__item" v-bind:style="{ color : currentEvent.fontColor }">
            Дата: <br>{{ currentEvent.starts_at | DateFilter}}
          </div>
          <div class="event-date__item" v-bind:style="{ color : currentEvent.fontColor }">
            Место проведения: <br>{{ currentEvent.location.address }}
          </div>  
      </div>  
    </div>
    <v-layout class="event-content">
      <v-container v-bind:style="{ color : currentEvent.fontColor }" v-html="currentEvent.description_html"/>
      <h2 class="toolbar">Частные правила <v-btn dark v-on:click="redirect(currentEvent.gameId)">Общие правила</v-btn></h2>
      <v-container v-bind:style="{ color : currentEvent.fontColor }" v-html="currentEvent.rules"/>
      <h2 class="toolbar">Место проведения</h2>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A686aa3c26e946fed512332a4a716efeb1ce27bccb73f4550ad0b767cf3649e92&amp;source=constructor"
              width="100%"
              height="40%"
              frameborder="0">
      </iframe>
      <h2 class="toolbar">Галерея</h2>
      <div class="game__gallery">
        <swiper :options="swiperOption" class="swiper">
          <swiper-slide v-for="pic in currentEvent.pictures" :key="pic.title">
            <img class="pictures" :src="pic.src" :alt="pic.title" />
          </swiper-slide>
            <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- <EventPage/> -->
      <div class="event-video" v-if="currentEvent.id == 658608">
        <div class="video__wrapper">
          <video class="video" controls preload="auto">
            <source src="/static/media/codebattle.webm" type="video/webm">
          </video>
        </div>
      </div>

    </v-layout>
  </v-content>
</template>
<script>

import EventPage from '@/component/EventPage'
import timePadService from '@/service/timePadService'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data: () => ({
    currentEvent: {
      'created_at': '2018-02-01T09:45:15+0300',
      'starts_at': '2018-02-27T14:00:00+0300',
      'ends_at': '2018-02-27T19:00:00+0300',
      name: 'CODE BATTLE for students',
      'description_short': '',
      'description_html': '<p><strong>Что тебя ждет?</strong></p><p>Создание супер бота, который сможет решать головоломки и выйдет в финал!</p><p> </p><p><strong>Тебе понадобятся:</strong></p><p>- ноутбук (если у тебя его нет, мы предоставим)</p><p>- минимальные знания одного из языков программирования: C#, Java, JavaScript, С++, Python, Go</p><p>- желание победить!</p><p><em>Ход игры будет демонстрироваться на большом экране в режиме реального времени</em></p><p><em>Общая продолжительность мероприятия 4 часа с кофе-брейком и награждением победителей)</em></p><p> </p><p><span style="color:rgb(0,0,0);">Участие абсолютно бесплатное! </span><span style="color:rgb(0,0,0);">Количество мест ограничено!</span></p><p><strong>Если остались вопросы</strong> звони 8-919-918-59-97, следи за новостями здесь vk.com/izhcodebattle</p>',
      url: '',
      'poster_image': {
        default_url: 'https:\\ucare.timepad.ru/d704ad13-aab8-47d5-b264-da7c2a395762/-/preview/308x600/-/format/jpeg/poster_event_658608.jpg',
        uploadcare_url: '//ucare.timepad.ru/d704ad13-aab8-47d5-b264-da7c2a395762/'
      },
      locale: 'ru',
      location: {
        country: 'Россия',
        city: 'Ижевск',
        address: 'ДК Интеграл, ул. Студенческая, 7',
        coordinates: [
          '56.870976',
          '53.174408'
        ]
      }
    },
    registrationLink: '',
    eventInfo: [
      { id: 798207,
        gameId: '2',
        src: "url('../static/img/mettal_27.jpg')",
        fontColor: 'white',
        pictures: [],
        rules: 'Порядок начисления очков и правила расчета для данного мероприятия находятся в разработке.'
      },
      { id: 658608,
        gameId: '1',
        src: '/static/img/games/bomberman.png',
        pictures: [
          { title: 'Картинка 1',
            src: '/static/img/games/bomberman/map3.jpg'
          },
          { title: 'Картинка 2',
            src: '/static/img/games/bomberman/bomberman.png'
          },
          { title: 'Картинка 3',
            src: '/static/img/games/bomberman/map1.jpg'
          },
          { title: 'Картинка 4',
            src: '/static/img/games/bomberman/map2.jpg'
          },
          { title: 'Картинка 5',
            src: '/static/img/games/bomberman/map4.jpg'
          },
          { title: 'Картинка 6',
            src: '/static/img/games/bomberman/map5.jpg'
          },
          { title: 'Картинка 7',
            src: '/static/img/games/bomberman/map6.jpg'
          },
          { title: 'Картинка 8',
            src: '/static/img/games/bomberman/map7.jpg'
          }
        ],
        rules: ''
      },
      { id: 607445,
        gameId: '1',
        src: '/static/img/games/bomberman.png',
        pictures: [
          { title: 'Картинка 1',
            src: '/static/img/games/bomberman/map3.jpg'
          },
          { title: 'Картинка 2',
            src: '/static/img/games/bomberman/bomberman.png'
          },
          { title: 'Картинка 3',
            src: '/static/img/games/bomberman/map1.jpg'
          },
          { title: 'Картинка 4',
            src: '/static/img/games/bomberman/map2.jpg'
          },
          { title: 'Картинка 5',
            src: '/static/img/games/bomberman/map4.jpg'
          },
          { title: 'Картинка 6',
            src: '/static/img/games/bomberman/map5.jpg'
          },
          { title: 'Картинка 7',
            src: '/static/img/games/bomberman/map6.jpg'
          },
          { title: 'Картинка 8',
            src: '/static/img/games/bomberman/map7.jpg'
          }
        ],
        rules: ''
      }
    ],
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
      return val.toString().split('').splice(11, 5).join('')
    },
    DateFilter (val) {
      return val.toString().split('').splice(0, 10).join('')
    }
  },
  created () {
    timePadService.getEventById(this.$route.params.id)
      .then(res => {
        this.currentEvent = res
        this.currentEvent.background = this.eventInfo.find(item => { return item.id === res.id }).src
        this.currentEvent.fontColor = this.eventInfo.find(item => { return item.id === res.id }).fontColor
        this.currentEvent.gameId = this.eventInfo.find(item => { return item.id === res.id }).gameId
        this.currentEvent.pictures = this.eventInfo.find(item => { return item.id === res.id }).pictures
        this.currentEvent.rules = this.eventInfo.find(item => { return item.id === res.id }).rules
      })
    this.registrationLink = `{"event_id": ${this.$route.params.id}}`
    window.scrollTo(0, 0)
  },
  methods: {
    redirect: function (id) {
      this.$router.push({name: 'game', params: { id }})
    },
    isEventPast (date) {
      return new Date(date) < new Date()
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

    .event-page {
      font-size: 1.2em;
    }

    .event-content {
      width: 80%;
      margin:0 auto;
      display: block;
    }
    .event-registration {
      position: absolute;
      top: 2%;
      left: 5%;
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
      font-size: 1.1vw;
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
        height: 20%;
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
        font-size: .65em;
      }
      .game-button {
        margin-left: 0;
        margin-top: 2%;
        font-size: .65em;
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
