<!-- содержимое секции компонента. -->
<template>
  <section class="games">
    <a name="games"/>
    <v-layout column>
      <h2 class="toolbar">Games</h2>
      <v-layout row wrap>
        <v-flex class='xs12 sm6 md4 lg4' v-for="card in cards" :key="card.title">
          <v-card :to="{ name: 'game', params: { id: card.id }}">
            <img :src="card.src"/>
            <v-card-title primary-title class="headline cards">{{card.title}}</v-card-title>
            <v-card-text class="title_all">
              {{card.title_all}}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <!-- <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </section>
</template>

<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  data: () => ({
    cards: [
      { id: 1,
        title: 'Assassin’s Creed IV: Black Flag',
        src: '/static/img/games/game1.jpg',
        title_all: 'Четвертая часть Assassins Creed перенесет вас в эпоху пиратства. Вам придется побывать в шкуре знаменитого пирата – ассасина Эдварда Кенуэйя, его история расскажет много интересных подробностей о культе тихих убийц во времена Золотой эпохи пиратства.'
      },
      { id: 2,
        title: 'Grand Theft Auto V',
        src: '/static/img/games/game2.jpg',
        title_all: 'Действие игры происходит в вымышленном штате Сан-Андреас, прообразом которого послужила Южная Калифорния. Сюжет в однопользовательском режиме строится вокруг приключений троих грабителей, устраивающих всё более дерзкие ограбления и противостоящих как организованной преступности, так и правоохранительным ведомствам. '
      },
      { id: 3,
        title: 'Assassin’s Creed IV: Black Flag',
        src: '/static/img/games/game1.jpg',
        title_all: 'Четвертая часть Assassins Creed перенесет вас в эпоху пиратства. Вам придется побывать в шкуре знаменитого пирата – ассасина Эдварда Кенуэйя, его история расскажет много интересных подробностей о культе тихих убийц во времена Золотой эпохи пиратства.'
      },
      { id: 4,
        title: 'Grand Theft Auto V',
        src: '/static/img/games/game2.jpg',
        title_all: 'Действие игры происходит в вымышленном штате Сан-Андреас, прообразом которого послужила Южная Калифорния. Сюжет в однопользовательском режиме строится вокруг приключений троих грабителей, устраивающих всё более дерзкие ограбления и противостоящих как организованной преступности, так и правоохранительным ведомствам. '
      },
      { id: 5,
        title: 'Assassin’s Creed IV: Black Flag',
        src: '/static/img/games/game1.jpg',
        title_all: 'Четвертая часть Assassins Creed перенесет вас в эпоху пиратства. Вам придется побывать в шкуре знаменитого пирата – ассасина Эдварда Кенуэйя, его история расскажет много интересных подробностей о культе тихих убийц во времена Золотой эпохи пиратства.'
      },
      { id: 6,
        title: 'Grand Theft Auto V',
        src: '/static/img/games/game2.jpg',
        title_all: 'Действие игры происходит в вымышленном штате Сан-Андреас, прообразом которого послужила Южная Калифорния. Сюжет в однопользовательском режиме строится вокруг приключений троих грабителей, устраивающих всё более дерзкие ограбления и противостоящих как организованной преступности, так и правоохранительным ведомствам. '
      }
    ]
  })
}
</script>



<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
  .games{
    padding-top: 25px;
    padding-bottom: 50px;
  }
  h2{
    text-align: center;
    font-size: 3em;
    padding-bottom: 15px;
  }
  .card{
    overflow: hidden;
    margin: 2px;
  }  
  .title_all{
    text-align: justify;
    font-size: 1.3em;
  }
</style>