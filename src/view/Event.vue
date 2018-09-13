<template>
  <v-content v-bind:style="{ backgroundImage : currentEvent.background }">
    <img class="event-image" v-bind:src="currentEvent.poster_image.uploadcare_url" alt='Картинка мероприятия'>
    <div class="event-registration">
      <img class="event-registration__logo" src=../../static/img/EPAM_LOGO.png alt="epam_logo">
      <div class="event-registration__name" v-bind:style="{ color : currentEvent.fontColor }">{{ currentEvent.name }}</div>
      <div class="event-registration__buttons">
        <button class="game-button">ПОСМОТРЕТЬ ИГРУ</button>
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
    <div class="event-main">
      <div class="event-main__description" v-bind:style="{ color : currentEvent.fontColor }"> 
        <i>{{ currentEvent.description_short }}</i>
      </div>
      <div class="event-main__map-wrapper">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A686aa3c26e946fed512332a4a716efeb1ce27bccb73f4550ad0b767cf3649e92&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameborder="0">
          </iframe>
      </div>
    </div>
    <!-- <EventPage/> -->
    <div class="event-video" v-if="currentEvent.id == 658608">
      <div class="video__wrapper">
        <video class="video" controls preload="auto">
          <source src="/static/media/codebattle.webm" type="video/webm">
        </video>
       </div>
    </div>
  </v-content>
</template>
<script>

import EventPage from '@/component/EventPage'
import timePadService from '@/service/timePadService'

export default {
  data: () => ({
    currentEvent: {},
    registrationLink: '',
    background: [
      { id: 798207,
        src: "url('../static/img/mettal_27.jpg')",
        fontColor: 'white'
      },
      { id: 658608,
        src: '/static/img/games/bomberman.png'
      },
      { id: 607445,
        src: '/static/img/games/bomberman.png'
      }
    ]
  }),
  name: 'Event',
  components: {
    EventPage
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
    timePadService.getEventById(this.$route.params.id).then(res => { this.currentEvent = res; this.currentEvent.background = this.background.find(item => { return item.id === res.id }).src; this.currentEvent.fontColor = this.background.find(item => { return item.id === res.id }).fontColor }).then(() => console.log(this.currentEvent))
    this.registrationLink = `{"event_id": ${this.$route.params.id}}`
    window.scrollTo(0, 0)
  },
  methods: {
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
      height: 252px;
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
      font-size: 1.6em;
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
    }

</style>
