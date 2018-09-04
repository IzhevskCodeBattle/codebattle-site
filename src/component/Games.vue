<!-- содержимое секции компонента. -->
<template>
  <section>
    <div id="games" class="anchor"></div>
    <h2 class="toolbar">Игры</h2>
    <div class="games__wrapper">
      <div class="game" v-for="card in cards" :key="card.id" v-on:click="redirect(card.id)">
        <img class="game__image" v-bind:src="card.src">
        <div class="game__info">
          <p class="game__name">{{card.title}}</p>
          <div class="game__line"></div>
          <p class="game__status">{{card.status}}</p>
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
      { id: 2,
        title: 'Танчики',
        src: '/static/img/games/battle-city.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'В разработке..'
      },
      { id: 3,
        title: 'Bomberman',
        src: '/static/img/games/bomberman.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        status: 'Игра готова'
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
    justify-content: space-between;
  }
  .game {
    width: 300px;
    height: 300px;
    position: relative;
    cursor: pointer;
    margin: 10px;
    display: flex;
    align-items: center;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-property: box-shadow;
  }
  .game:hover{
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  }
  .game__image{
    width: 300px;
    height: 300px;
    object-fit: cover;
    opacity: 0.3;
  }
  .game__info{
    height: 100%;
    width: 100%;
    position: absolute; 
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin: 30px 0;
    font-size: 30px;
    font-weight: 400;
  }
  .game__author{
    text-align: right;
    font-size: 15px;
    font-style: italic;
    margin: 10px;
  }
  .game__description{
    text-align: justify;
    padding: 0 5px;
  }
  .game__line{
    width: 80%;
    border-bottom: 1px solid #464547;
    opacity: 0.38;
  }
  .game__dummy{
    width: 200px;
  }
  @media (max-width: 600px) {
    .games__wrapper{
      justify-content: space-around;
    }
  }
  /* @media (max-width: 850px) {
    .game{
      width: 100%;
      justify-content: center;
    }
  }
  @media (max-width: 600px) {
    .game__image{
      height: 100px;
      margin-right: 5px;
    }
    .game{
      width: 100%;
      justify-content: center;
    }
    .game__author, .game__description {
      display: none;
    }
  } */
</style>