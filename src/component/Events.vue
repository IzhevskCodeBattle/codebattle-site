<template>
  <section class="events__margin-wrapper">
    <div class="anchor" id="events"></div>
    <h3 class="toolbar">События</h3>
    <div class="events__wrapper">

      <div v-if="!pastEvents" class="event__timepad-error">
        В настоящий момент TimePad недоступен :(
      </div>
      <div v-if="!commingEvent" class="comming-events__error">
        События планируются..
      </div>

      <div v-if="!spinner && commingEvent" class="comming-events">
        <div class="event" v-on:click="redirect(commingEvent.id)">
          <div class="event__info">
            <div 
                class="event__background" 
                v-bind:style="{ background: `url(${commingEvent.preview_image})`}">
            </div>
            <p class="event__name">{{ commingEvent.name }}</p>
            <div class="event__line"></div>
            <p class="event__date">{{ commingEvent.starts_at | TimeFilter }} {{ commingEvent.starts_at | DateFilter }}</p>
          </div>
        </div>
      </div>

        <!-- temp spinner -->
      <img class="spinner" src="../../static/img/spinner.gif" alt="loading">
      
      <div v-if="!spinner && pastEvents" class="past-events">
        <div class="past-event" v-for="event in pastEvents" :key="event.id" v-on:click="redirect(event.id)">
          <div class="past-event__info">
            <div class="past-event__name">{{ event.name }}</div>
            <div class="past-event__date">{{ event.starts_at | TimeFilter }} {{ event.starts_at | DateFilter }}</div>
            <p id="event.id" class="past-event__description">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- <button class="show-old-events" @click="showOldEvents()">показать прошедшие события</button> -->

    </div>
  </section>
</template>

<script>
import store from '@/store'
import { CREATE_COMING_EVENT, CREATE_EVENT_LIST } from '../store/actions'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      pastEvents: state => {
        return state.events.pastEvents
      },
      commingEvent: state => {
        return state.events.commingEvent
      },
      spinner: state => {
        return state.events.spinner.isActive
      },
      isCommimgEvent: state => {
        return state.events.isCommimgEvent
      }
    })
  },
  beforeCreate () {
    store.dispatch(CREATE_COMING_EVENT)
    store.dispatch(CREATE_EVENT_LIST)
  },
  filters: {
    TimeFilter (val) {
      return val ? val.toString().split('').splice(11, 5).join('') : ''
    },
    DateFilter (val) {
      return val ? val.toString().split('').splice(0, 10).join('') : ''
    }
  },
  methods: {
    redirect: function (id) {
      this.$router.push('#events')
      this.$router.push({name: 'event', params: { id }})
    }
  }
}
</script>

<style scoped>
    .anchor{
      height: 20px;
      position: relative;
    }
    .spinner {
        display: block;
        position: absolute;
        top: 50%;
        left: 70%;
        transform: translate(-50%, -50%);
        z-index: 2;
        height: 50px;
        width: 50px;
    }
    .events__margin-wrapper{
        margin: 0 10%;
        background-color: #fff;
        background-color: #e3e3e3cc;
    }
    .events__wrapper{
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 10%;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .comming-events {
        display: block;
        padding-right: 3%;
        width: 40%;
        height: auto;
    }
    .comming-events__error{
        width: 40%;
        text-align: center;
        font-size: 2em;
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
        opacity: .4;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        background-position: 50% -46% !important;
    }
    .event__line{
        width: 80%;
        border-bottom: 1px solid #464547;
        opacity: 0.38;
    }
    .event__info{
        height: 100%;
        width: 100%;
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
        color: #000000;
        z-index: 5;
    }
    .event__date{
        margin: 30px 0;
        font-size: 20px;
        z-index: 5;
    }
  .past-events {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid #a9a9a9 ;
    width: 60%;
    height: 400px;
    border-left: 1px solid #a9a9a9 ;
  }
  .past-event {
    padding: 10px;
    /* margin: 10px; */
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
  .past-event:last-child {
    margin-bottom: 0;
  }

  .past-event:hover{
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  }
  .past-event__background {
    /* max-width: 120px;
    max-height: 120px; */
    object-fit: cover;
    opacity: 0.4;
  }
 
  .past-event__name {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 0;
  }
  .past-event__date {
    margin: 0;
  }
  .past-event__description {
    max-width: 325px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  P {
    margin: 0;
  }
  @media (max-width: 950px) {
    .events__margin-wrapper{
      margin: 0;
    }
  }
  @media (max-width: 760px) {

    .spinner {
        display: none;
    }  
    .comming-events {
      padding: 0;
      margin-bottom: 30px;
    }
    .past-events {
      display: flex;
      width: 100%;
      height: 100%;
      border-left: none;
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
    }
    .comming-events__error {
      width: 100%;
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
    .past-event__description {
      max-width: 260px;
      max-height: 33px;
    }
    .events__margin-wrapper{
      margin: 0;
    }
  }
</style>