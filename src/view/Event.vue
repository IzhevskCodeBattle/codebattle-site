<template>
  <v-content>
    <img class="event-image" v-bind:src="currentEvent.poster_image.uploadcare_url" alt='Картинка мероприятия' width='60%' height='auto'>
    <div class="event-registration">
      <img class="event-registration__logo" src=../../static/img/EPAM_LOGO.png alt="epam_logo">
      <div class="event-registration__name">{{ currentEvent.name }}</div>
      <button class="reg-button" id='twf' v-bind:data-twf-target-state="this.registrationLink">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      <button class="game-button">ПРЕДСТОЯЩАЯ ИГРА</button>
    </div>
    <div class="event-date__wrapper">    
      <div class="event-date">
          <div class="event-date__item">Организатор: <br>{{ currentEvent.organization.name }}</div>
          <div class="event-date__item">
            Начало мероприятия: <br>{{ currentEvent.starts_at | TimeFilter }}
          </div>
          <div class="event-date__item">
            Дата: <br>{{ currentEvent.starts_at | DateFilter}}
          </div>
          <div class="event-date__item">
            Место проведения: <br>{{ currentEvent.location.address }}
          </div>  
      </div>  
    </div>
    <div class="event-main">
      <div class="event-main__description"> 
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
  </v-content>
</template>
<script>

import EventPage from '@/component/EventPage'
import timePadService from '@/service/timePadService'

export default {
  data: () => ({
    currentEvent: {},
    registrationLink: ''
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
      return new Date(val).toLocaleString().split('').splice(0, 9).join('')
    }
  },
  created () {
    timePadService.getEventById(this.$route.params.id).then(res => { this.currentEvent = res }).then(() => console.log(this.currentEvent))
    this.registrationLink = `{"event_id": ${this.$route.params.id}}`
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
      top: 8%;
      left: 5%;
    }
    .event-registration__name {
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 4em;
      font-weight: bold;
      text-align: center;
      color: #464547;
    }
    .event-registration__logo {
      width: 30%;
      height: 10%;
    }
    .event-image {
      position: relative;
      width: 100%;
      height: 40%;
      display: flex;
      margin: 0 auto;
      opacity: .5;
    }
    .reg-button {
      text-align: center;
      padding: 10px;
      background-color: #39c2d7;
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      border: none;
      border-radius: 3px;
    }
    .game-button {
      text-align: center;
      padding: 10px;
      background-color: #CEDB56;
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      border: none;
      border-radius: 3px;
      margin-left: 2%;
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
      border-top: 1px solid #39c2d7;
    }
    .event-date__item {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: Roboto;
      font-size: 1vw;
      color: #96979d;
      font-size: 1.2em;
      border-right: 1px solid darkgrey;
      padding: 3%;
      height: 80px;
      width: 25%;
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
