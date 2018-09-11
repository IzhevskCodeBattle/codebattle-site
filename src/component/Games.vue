<!-- содержимое секции компонента. -->
<template>
  <section>
    <div id="games" class="anchor"></div>
    <h2 class="toolbar">Игры</h2>
    <div class="games__wrapper">
      <div class="game" v-for="card in cards" :key="card.id" v-on:click="redirect(card.id)">
        <img class="game__image" v-bind:src="card.src">
        <div v-if="!card.isComplite" class="shadow"></div>
        <div v-if="!card.isComplite" class="game__status">
          {{ card.title }} <br>
          <img src="../../static/img/settings.png" alt="in_dev_icon"> <br>
          {{ card.status }}
        </div>
      </div>
      <div class="game__dummy"></div>
      <div class="game__dummy"></div>
      <div class="game__dummy"></div>
    </div>
  </section>
</template>
<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  data: () => ({
    cards: [
      { id: 1,
        title: 'Bomberman',
        src: '/static/img/games/bomber.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'Игра готова',
        isComplite: true
      },
      { id: 2,
        title: 'Танчики',
        src: '/static/img/games/battle-city.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'В разработке...',
        isComplite: false
      },
      { id: 3,
        title: 'LodeRunner',
        src: '/static/img/games/loderunner.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'В разработке...',
        isComplite: false
      }
    ]
  }),
  computed: {
    imageHeight () {
      // console.log(this.$vuetify.breakpoint.name)
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': return '300px'
        case 'md': return '300px'
        case 'lg': return '300px'
        case 'xl': return '300px'
      }
    }
  },
  methods: {
    redirect: function (id) {
      this.$router.push({name: 'game', params: { id }})
    }
  }
}
</script>

<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  .games__wrapper{
    padding: 0 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-around;
  }
  .game {
    width: 250px;
    height: 250px;
    position: relative;
    cursor: pointer;
    margin: 10px;
    display: flex;
    align-items: center;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-property: box-shadow;
  }
  .game:hover {
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  }
  .devgame {
    opacity: .3;
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    opacity: .7; 
  }
  .game__image {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
  .game__status {
    position: absolute;
    top: 55px;
    left: 55px;
    font-size: 2em;
    color: black;
    text-align: center;
    
  }
  .game__status img {
    height: 50px;
    width: 50px;
  }
  .game__dummy {
    width: 300px;
    margin: 20px;
  }
  @media (max-width: 600px) {
    .games__wrapper{
      justify-content: space-around;
    }
    .game__dummy {
      display: none;
    }
  }
</style>