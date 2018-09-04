<!-- содержимое секции компонента. -->
<template>
  <section>
    <div id="events" class="anchor"></div>
    <h2 class="toolbar">События</h2>
    <div class="events__wrapper">
      <div v-if="!events" class="event__timepad-error">
        В настоящий момент TimePad недоступен :(
      </div>
      <div class="event" v-bind:class="{ pastevent: new Date(event.starts_at) < new Date() }" v-for="event in events" :key="event.id" v-on:click="redirect(event.id)">
        <img class="event__background" v-bind:src="event.poster_image.uploadcare_url">
        <div class="event__info">
          <p class="event__name">{{ event.name }}</p>
          <div class="event__line"></div>
          <p class="event__date">{{ event.starts_at | TimeFilter }} {{ event.starts_at | DateFilter }}</p>
        </div>
        <div class="past-mark" v-if=" new Date(event.starts_at) < new Date()"></div>
      </div>
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
  }
  .event {
    position: relative;
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
    content: "";
    position: absolute;
    z-index: 5;
    top: 20px;
    left: 240px;
    width: 40px;
    height: 40px;
    background: url("../../static/img/done.svg");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 2;

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
  @media (max-width: 600px) {
    .events__wrapper{
      justify-content: space-around;
    }
  }
</style>