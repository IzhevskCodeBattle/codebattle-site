<!-- содержимое секции компонента. -->
<template>
  <section>
    <div id="events" class="anchor"></div>
    <h2 class="toolbar">События</h2>
    <div class="events__wrapper">
      <div v-if="!events" class="event__timepad-error">
        В настоящий момент TimePad недоступен :(
      </div>
      <div class="event"
           @mouseover="showMark(event.id)" 
           v-bind:class="{ pastevent: isEventPast(event.starts_at) }" 
           v-for="event in events" :key="event.id" v-on:click="redirect(event.id)"
       >
        <img class="event__background" v-bind:src="event.poster_image.uploadcare_url">
        <div class="event__info" id="">
          <p class="event__name">{{ event.name }}</p>
          <div class="event__line"></div>
          <p class="event__date">{{ event.starts_at | TimeFilter }} {{ event.starts_at | DateFilter }}</p>
        </div>
        <!-- <div class="past-mark" v-bind:id="event.id" v-if=" new Date(event.starts_at) < new Date()"></div> -->
        <div v-if="isEventPast(event.starts_at)" class="panzer" v-bind:id="event.id">
          <div class="banner">Событие завершено</div>
        </div>
      </div>
      <div class="event__dummy"></div>
      <div class="event__dummy"></div>
      <div class="event__dummy"></div>
    </div>
  </section>
</template>
<!-- код, который относится непосредственно к компоненту -->
<script>
import timePadService from '@/service/timePadService'
export default {
  data: () => ({
    events: []
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
    this.createEventList()
  },
  methods: {
    redirect: function (id) {
      this.$router.push({name: 'event', params: { id }})
    },
    createEventList () {
      Promise.all([timePadService.getEventList(), timePadService.getPastEventList()]).then(res => { this.events = res[0].values.concat(res[1].values) })
    },
    showMark (id) {
      document.getElementById(id).style.display = 'block'
    },
    isEventPast (date) {
      return new Date(date) < new Date()
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
    justify-content: space-around;
  }
  .event {
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 300px;
    position: relative;
    cursor: pointer;
    margin: 20px;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-property: box-shadow;
  }
  .pastevent {
    opacity: .6;
  }
  .past-mark {
    display: none;
    content: "";
    position: absolute;
    z-index: 5;
    top: 150px;
    left: 150px;
    width: 150px;
    height: 150px;
    background: url("../../static/img/done.svg");
    background-size: cover;
    background-repeat: no-repeat;
    animation: showMark 1s forwards;
    transform: translate(-50%, -50%)
  }
  .panzer {
    display: none; 
    content: "";
    position: absolute;
    z-index: 5;
    width: 50px;
    height: 50px;
    top: 250px;
    left: 0;
    background: url("../../static/img/panzer.png");
    background-size: cover;
    background-repeat: no-repeat;
    animation: panzer 2s forwards;
  }
  .banner {
    width: 240px;
    height: 40px;
    margin-left: -240px;
    background-color: #D35D47;
    opacity: 1;
    padding-left: 30px;
    font-size: 1.2em;
    font-weight: bold;
  }
  .event:hover{
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  }
  .event__background{
    width: 300px;
    height: 300px;
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
    width: 100%;
    margin: 30px 0;
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
  .event__timepad-error{
    height: 200px;
    margin: 5% auto;
    font-size: 2em;
    text-align: center;
    color: #D35D47;
  }
  .event__dummy{
    width: 300px;
    margin: 20px;
  }
  @media (max-width: 600px) {
    .events__wrapper{
      justify-content: space-around;
    }
  }

  @keyframes showMark {
    0% {width: 0; height: 0;}
    25% {width: 200px; height: 200px;}
		50% {width: 100px; height: 100px;}
    75% {top: 150px; left: 150px;}
    /* 100% {top:50px; left: 250px; width: 50px; height: 50px;} */
  }
  @keyframes panzer {
    100% {margin-left: 240px;}
  }
</style>