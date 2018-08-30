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
          <p class="game__author">{{card.author}}</p>
          <p class="game__description">{{card.title_all}}</p>
        </div>
      </div>
      <div class="game__dummy"></div>
      <div class="game__dummy"></div>
      <div class="game__dummy"></div>
      <div class="game__dummy"></div>
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
        title: 'Название игры №1',
        src: '/static/img/games/2048.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 2,
        title: 'Название игры №2',
        src: '/static/img/games/battle-city.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 3,
        title: 'Название игры №3',
        src: '/static/img/games/bomberman.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 4,
        title: 'Название игры №4',
        src: '/static/img/games/collapse.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 5,
        title: 'Название игры №5',
        src: '/static/img/games/fifthteen.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 6,
        title: 'Название игры №6',
        src: '/static/img/games/hex.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 7,
        title: 'Название игры №6',
        src: '/static/img/games/kubik.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 8,
        title: 'Название игры №6',
        src: '/static/img/games/loderunner.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 9,
        title: 'Название игры №6',
        src: '/static/img/games/minesweeper.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 10,
        title: 'Название игры №6',
        src: '/static/img/games/moebius.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 11,
        title: 'Название игры №6',
        src: '/static/img/games/puzzlebox.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 12,
        title: 'Название игры №6',
        src: '/static/img/games/quake2d.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 13,
        title: 'Название игры №6',
        src: '/static/img/games/reversi.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 14,
        title: 'Название игры №6',
        src: '/static/img/games/snake.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 15,
        title: 'Название игры №6',
        src: '/static/img/games/snakebattle.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 17,
        title: 'Название игры №6',
        src: '/static/img/games/spacerace.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 18,
        title: 'Название игры №6',
        src: '/static/img/games/sudoku.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    align-content: center;
  }
  .game {
    width: 200px;
    height: 400px;
    cursor: pointer;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-property: box-shadow;
  }
  .game:last-child{
    margin: 0;
  }
  .game:hover{
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  }
  .game__image{
    width: 200px;
    height: 200px;
  }
  .game__name{
    font-size: 20px;
    color: #464547;
    font-weight: bolder;
    margin: 10px;
    text-align: center;
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
  .game__dummy{
    width: 200px;
  }
</style>