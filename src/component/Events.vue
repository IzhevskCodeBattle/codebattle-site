<!-- содержимое секции компонента. -->
<template>
  <section>
    <div id="events" class="anchor"></div>
    <h2 class="toolbar">События</h2>
    <div class="events__wrapper">
      <div v-if="!events" class="event__timepad-error">
        В настоящий момент TimePad недоступен :(
      </div>
      <div class="event" v-for="event in events" :key="event.id" v-on:click="redirect(event.id)">
        <img class="event__background" v-bind:src="event.poster_image.uploadcare_url">
        <div class="event__info">
          <p class="event__name">{{ event.name }}</p>
          <div class="event__line"></div>
          <p class="event__date">{{ event.starts_at | TimeFilter }} {{ event.starts_at | DateFilter }}</p>
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
    // events: [
    //   { id: 1,
    //     name: 'Мероприятие №1',
    //     status: 'Online',
    //     src: '/static/img/events/event1.jpg',
    //     time: '16:00',
    //     date: '15.02.18',
    //     period: '2 дня',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 2,
    //     name: 'Мероприятие №2',
    //     status: 'Offline',
    //     src: '/static/img/events/event2.jpg',
    //     time: '18:00',
    //     date: '15.02.18',
    //     period: '3 часа',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 3,
    //     name: 'Мероприятие №3',
    //     status: 'Online',
    //     src: '/static/img/events/event1.jpg',
    //     time: '16:00',
    //     date: '15.02.18',
    //     period: '2 дня',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 4,
    //     name: 'Мероприятие №4',
    //     status: 'Offline',
    //     src: '/static/img/events/event2.jpg',
    //     time: '18:00',
    //     date: '15.02.18',
    //     period: '3 часа',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 11,
    //     name: 'Мероприятие №1',
    //     status: 'Online',
    //     src: '/static/img/events/event1.jpg',
    //     time: '16:00',
    //     date: '15.02.18',
    //     period: '2 дня',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 12,
    //     name: 'Мероприятие №2',
    //     status: 'Offline',
    //     src: '/static/img/events/event2.jpg',
    //     time: '18:00',
    //     date: '15.02.18',
    //     period: '3 часа',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 13,
    //     name: 'Мероприятие №3',
    //     status: 'Online',
    //     src: '/static/img/events/event1.jpg',
    //     time: '16:00',
    //     date: '15.02.18',
    //     period: '2 дня',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 14,
    //     name: 'Мероприятие №4',
    //     status: 'Offline',
    //     src: '/static/img/events/event2.jpg',
    //     time: '18:00',
    //     date: '15.02.18',
    //     period: '3 часа',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 21,
    //     name: 'Мероприятие №1',
    //     status: 'Online',
    //     src: '/static/img/events/event1.jpg',
    //     time: '16:00',
    //     date: '15.02.18',
    //     period: '2 дня',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 22,
    //     name: 'Мероприятие №2',
    //     status: 'Offline',
    //     src: '/static/img/events/event2.jpg',
    //     time: '18:00',
    //     date: '15.02.18',
    //     period: '3 часа',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 23,
    //     name: 'Мероприятие №3',
    //     status: 'Online',
    //     src: '/static/img/events/event1.jpg',
    //     time: '16:00',
    //     date: '15.02.18',
    //     period: '2 дня',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   },
    //   { id: 24,
    //     name: 'Мероприятие №4',
    //     status: 'Offline',
    //     src: '/static/img/events/event2.jpg',
    //     time: '18:00',
    //     date: '15.02.18',
    //     period: '3 часа',
    //     members: 15,
    //     description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
    //   }
    // ]
    events: []
  }),
  filters: {
    TimeFilter (val) {
      return val.toString().split('').splice(11, 5).join('')
    },
    DateFilter (val) {
      console.log(val)
      return val.toString().split('').splice(0, 10).join('')
    }
  },
  created: function () {
    timePadService.getEventList().then(res => { this.events = res.values; console.log(this.events) })
  },
  methods: {
    redirect: function (id) {
      this.$router.push({name: 'event', params: { id }})
    }
  }
}
</script>

<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  .events__wrapper{
    display: flex;
    align-items: center;
  }
  .event {
    width: 300px;
    height: 300px;
    position: relative;
    cursor: pointer;
    margin: 20px;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-property: box-shadow;
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