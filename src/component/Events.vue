<!-- содержимое секции компонента. -->
<template>
  <section>
    <div id="events" class="anchor"></div>
    <h2 class="toolbar">События</h2>
    <div class="events__wrapper">
      <img  class="spinner" @click="hideSpinner()" src="../../static/img/spinner.gif" alt="loading">

      <div v-if="!(pastEvents || commingEvent)" class="event__timepad-error">
        В настоящий момент TimePad недоступен :(
      </div>
      
      <div class="comming-events">
        <div class="event" v-on:click="redirect(commingEvent.id)">
          <img class="event__background" v-bind:src="commingEvent.poster_image.uploadcare_url">
          <div class="event__info">
            <p class="event__name">{{ commingEvent.name }}</p>
            <div class="event__line"></div>
            <p class="event__date">{{ commingEvent.starts_at | TimeFilter }} {{ commingEvent.starts_at | DateFilter }}</p>
          </div>
        </div>
      </div>

      <div class="past-events">
        <div class="past-event" v-for="event in pastEvents" :key="event.id" v-on:click="redirect(event.id)">
          <img class="past-event__background" v-bind:src="event.poster_image.uploadcare_url">
          <div class="past-event__info">
            <div class="past-event__name">{{ event.name }}</div>
            <div class="past-event__date">{{ event.starts_at | TimeFilter }} {{ event.starts_at | DateFilter }}</div>
            <div id="event.id" class="past-event__description">
              {{ getEventDescription(event.id) }}
            </div>
          </div>
        </div>
      </div>

      <!-- <button class="show-old-events" @click="showOldEvents()">показать прошедшие события</button> -->

    </div>
  </section>
</template>
<!-- код, который относится непосредственно к компоненту -->
<script>

import timePadService from '@/service/timePadService'

export default {
  data: () => ({
    commingEvent: {},
    pastEvents: [],
    text: ''
  }),
  filters: {
    TimeFilter (val) {
      return val.toString().split('').splice(11, 5).join('')
    },
    DateFilter (val) {
      return val.toString().split('').splice(0, 10).join('')
    }
  },
  mounted: function () {
    this.downloadEvents()
  },
  methods: {
    redirect: function (id) {
      this.$router.push({name: 'event', params: { id }})
    },
    downloadEvents () {
      Promise.all([timePadService.getEventList(), timePadService.getPastEventList()])
        .then((res) => { this.commingEvent = res[0].values[0]; this.pastEvents = res[1].values; return true })
        .then((res) => { this.showEvents(); this.hideSpinner() })
    },
    showEvents () {
      document.querySelector('.comming-events').style.display = 'block'
      document.querySelector('.past-events').style.display = 'flex'
    },
    showOldEvents () {
      document.querySelector('.past-events').style.display = 'block'
      document.querySelector('.show-old-events').style.display = 'none'
    },
    getEventDescription (id) {
      // return timePadService.getEventById(id).then(res => { this.text = res.description_short })
      switch (id) {
        case 658608: return 'Первый студенческий баттл для учащихся всех ВУЗов!'
        case 607445: return '18 ноября состоится хардкорное мероприятие для разработчиков Ижевска под названием Code Battle.'
      }
    },
    hideSpinner () {
      document.querySelector('.spinner').style.display = 'none'
    }
  }
}
</script>

<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
   .spinner {
     display: block;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     z-index: 5;
     height: 50px;
     width: 50px;
   }

   .events__wrapper{
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 10%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .comming-events {
    display: none;
    padding-right: 3%;
    border-right: 1px solid #a9a9a9 ;
    width: 40%;
    height: auto;
  }
  .event {
    position: relative;
    overflow: hidden;
    position: relative;
    max-width: 400px;
    max-height: 400px;
    cursor: pointer;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-property: box-shadow;
  }
  .event:hover{
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  }
  .event__background{
    width: 400px;
    height: 400px;
    object-fit: cover;
    opacity: 0.4;
    
  }
  .event__line{
    width: 80%;
    border-bottom: 1px solid #464547;
    opacity: 0.38;
  }
  .event__info{
    height: 100%;
    width: 100%;
    position: absolute; 
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .event__name{
    width: 90%;
    margin: 26% 0;
    padding: 0;
    text-align: center;
    font-size: 40px;
    font-weight: bolder;
    color: #464547;
  }
  .event__date{
    margin: 30px 0;
    font-size: 20px;
  }

  .past-events {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    height: 400px;
  }

  .past-event {
    margin-left: 20px;
    display: flex;
    flex-direction: row;
  }
  .past-event:hover{
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  }
  .past-event__background {
    max-width: 180px;
    max-height: 180px;
    object-fit: cover;
    opacity: 0.4;
  }
  .past-event__info {
    margin-left: 20px;
  }
  .past-event__name {
    font-weight: bold;
    font-size: 1.8em;
    margin-bottom: 0;
  }
  .past-event__date {
    margin: 0;
  }
  .past-event__description {
    max-width: 300px;
  }
  .event__timepad-error{
    height: 200px;
    margin: 5% auto;
    font-size: 2em;
    text-align: center;
    color: #D35D47;
  }
  .show-old-events {
    display: none;
  }

  @media (max-width: 760px) {
    .comming-events {
      padding: 0;
    }
    .past-events {
      display: none;
      width: 100%;
      height: 100%;
    }
    .past-event {
      margin-top: 5%;
      margin-left: 0;
    }
    .past-event:first-child {
      border-top: 1px solid rgba(0,0,0,.1);
      padding-top: 3%;
    }
    .past-event:last-child {
      /* border-bottom: 1px solid rgba(0,0,0,.1); */
      padding-bottom: 3%;
    }
    .show-old-events {
      display: block;
      margin-top: 5%;
      font-size: 1em;
      border: 1px solid black;
      padding: 3px 10px;
      background-color: gray;
    }
    .show-old-events:focus {
      outline: none;
    }
    .events__wrapper {
      flex-direction: column;
      align-items: center;
    }
    .comming-events {
      width: 100%;
      border-right: none;
    }
    .event {
      width: 300px;  
      height: 300px;
      margin: 0 auto;
    }
 }

  @media (max-width: 600px) {
    .events__wrapper{
      justify-content: center;
      align-items: center;
    }
    .event {
      width: 250px;  
      height: 250px;
      margin: 0 auto;
    }
    .event__name {
      font-size: 35px;
      margin: 4% 0;
    }
    .past-event__background {
      height: 100px;
      width: 100px;
    }
    .past-event__info {
      font-size: 0.8em;
    }
  }

</style>