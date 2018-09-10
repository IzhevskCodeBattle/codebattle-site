<!-- содержимое секции компонента. -->
<template>
  <section>
    <div id="events" class="anchor"></div>
    <h2 class="toolbar">События</h2>
    <div class="events__wrapper">
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
            <div class="past-event__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo consequuntur voluptatibus.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- код, который относится непосредственно к компоненту -->
<script>

import timePadService from '@/service/timePadService'

export default {
  data: () => ({
    commingEvent: {},
    pastEvents: []
  }),
  filters: {
    TimeFilter (val) {
      return val.toString().split('').splice(11, 5).join('')
    },
    DateFilter (val) {
      return val.toString().split('').splice(0, 10).join('')
    }
  },
  created: function () {
    this.getCommingEvent()
    this.getTwoPastEvents()
  },
  methods: {
    redirect: function (id) {
      this.$router.push({name: 'event', params: { id }})
    },
    getCommingEvent () {
      timePadService.getEventList().then((res) => { this.commingEvent = res.values[0] })
    },
    getTwoPastEvents () {
      timePadService.getPastEventList().then((res) => { this.pastEvents = res.values })
    }
  }
}
</script>

<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
   .events__wrapper{
    display: flex;
    align-items: center;
    padding: 0 10%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .comming-events {
    padding-right: 3%;
    border-right: 1px solid black;
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
    display: flex;
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

  @media (max-width: 760px) {
    .past-events {
      display: none;
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
      justify-content: space-around;
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
  }

</style>