<!-- содержимое секции компонента. -->
<template>
  <section class="games__margin-wrapper">
    <div class="anchor" id="games"></div>
    <h2 class="toolbar">Игры</h2>
    <div class="games__wrapper">
      <div class="game" v-for="card in cards" :key="card.id" @click="redirect(card.id)">
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

// import { mapState } from 'vuex'

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
      { id: 3,
        title: 'LodeRunner',
        src: '/static/img/games/loderunner-min.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'Игра готова',
        isComplite: true
      },
      { id: 2,
        title: 'Battle City',
        src: '/static/img/games/battlecity.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'Игра готова',
        isComplite: true
      },
      { id: 4,
        title: 'Лунолёт',
        src: '/static/img/games/lunolet.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'Игра готова',
        isComplite: true
      },
      { id: 5,
        title: 'StarMarines',
        src: '/static/img/games/star_marines.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'Игра готова',
        isComplite: true
      },
      { id: 6,
        title: 'Snake',
        src: '/static/img/games/snake.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'Игра готова',
        isComplite: true
      }
    ]
  }),
  computed: {
    // ...mapState({
    //   cards: state => {
    //     return state.games.cards
    //   }
    // }),
    imageHeight () {
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
      this.$router.push('#games')
      this.$router.push({name: 'game', params: { id }})
    }
  }
}
</script>

<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  .anchor{
    height: 20px;
    position: relative;
  }
  .games__margin-wrapper{
    margin: 0 10%;
    background-color: #fff;
    background-color: #e3e3e3cc;
  }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    opacity: .7;
  }
  .game__info{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .game__name{
    width: 100%;
    margin: 30px 0;
    padding: 0;
    text-align: center;
    font-size: 40px;
    font-weight: bolder;
    color: #464547;
  }
  .game__status{
    color: #464547;
    font-size: 30px;
    font-weight: 400;
    left: 0;
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
    width: 250px;
    margin: 10px;
  }
  @media (max-width: 950px) {
    .games__margin-wrapper{
      margin: 0;
    }
  }
  @media (max-width: 600px) {
    .games__wrapper{
      justify-content: space-around;
    }
    .game__dummy {
      display: none;
    }
    .games__margin-wrapper{
      margin: 0;
    }
  }
</style>