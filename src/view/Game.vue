<template>
  <v-content>
    <a name="content"></a>
    <img class="game-image" :src="img" alt='Картинка мероприятия'>
    <div class="game">
      <img class="game__logo" src=../../static/img/EPAM_LOGO.png alt="epam_logo">
      <div class="game__name">{{ name }}</div>
    </div>
    <div class="game__main">
      <div class="game__description">
        <h5 class="description__tittle">Правила игры</h5>
        <div class="description__main">
          Каждый участник разрабатывает своего бота-бомбермена. 
        </div>
        <div class="description__main__section">Поле</div>
        <div class="description__main">
          Поле поделено на ячейки. В каждой ячейке может находится один объект: 
          разрушаемая стенка, неразрушаемая стенка, бомба, бомбермен, митчопер, 
          либо ячейка может быть свободной. Все участники мероприятия играют одновременно на одном поле. 
        </div>
        <div class="description__main__section">Ход</div>
        <div class="description__main">
          За время одного тика (1 секунда) бомбермен может выполнить одно действие: 
          передвинуться в соседнюю свободную ячейку, установить бомбу и 
          переместиться на свободную ячейку или остаться на месте. 
        </div>
        <div class="description__main__section">Бомба</div>
        <div class="description__main">
          Бомба взрывается через 5 тиков (секунд). Взрывная волна уничтожает разрушаемые стенки, 
          бомберменов и митчоперов. Размер взрывной волны — 4 ячейки. Каждый объект, уничтоженный взрывом, 
          восстанавливается в случайной свободной ячейке поля в следующий ход. 
          Подорваться можно и на своей, и на чужой бомбе.
        </div>
        <div class="description__main__section">Митчопер</div>
        <div class="description__main">
          На своем пути герой может повстречать митчопера — красный воздушный шарик, который преследует и 
          уничтожает бомберменов. 
        </div>
        <div class="description__main__section">Порядок начисления очков</div>
        <div class="description__main">
          Очки начисляются за уничтожение объектов: разрушаемая стенка — 10 очков, митчопер — 100 очков, 
          другой бомбермен — 1000 очков. Очки суммируются. За гибель бомбермена очки не снимаются. 
        </div>
        <div class="description__main">
        Побеждает игрок набравший максимальное количество очков к концу игры. Длительность игры будет 
        определена на месте ведущим.
        </div>
      </div>
      
      <div class="game__gallery">
        <swiper :options="swiperOption" class="swiper">
          <swiper-slide v-for="pic in pictures" :key="pic.title">
            <img class="pictures" :src="pic.src" :alt="pic.title" />
          </swiper-slide>
           <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </v-content>
</template>


<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Game',
  components: {
    swiper,
    swiperSlide
  },
  data: () => ({
    name: 'Bomberman',
    img: '/static/img/games/fon.jpg',
    pictures: [
      { title: 'Картинка 1',
        src: '/static/img/games/mit1.jpg'
      },
      { title: 'Картинка 2',
        src: '/static/img/games/mit2.jpg'
      },
      { title: 'Картинка 3',
        src: '/static/img/games/mit3.jpg'
      }
    ],
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }),
  created () {
    window.scrollTo(0, 0)
  }
}
</script>


<style scoped>
    @font-face {
      font-family: SourceSansPro;
      src: url(../../static/fonts/SourceSansPro-BoldIt.otf);
    }
    @font-face {
      font-family: SourceSansPro-lt;
      src: url(../../static/fonts/SourceSansPro-It.otf);
    }
    .game{
      position: absolute;
      top: 5%;
      left: 5%;
    }
    .game__name {
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 4em;
      font-weight: bold;
      text-align: left;
      padding-left: 0;
      color: #464547;
    }
    .game__logo {
      width: 30%;
      height: 10%;
    }
    .game-image {
      position: relative;
      width: 100%;
      height: 400px;
      display: flex;
      margin: 0 auto;
      opacity: .5;
    }
    .game__main{
      display: block;
      align-items: top;
      margin: 0 auto;
      margin-top: 5%;
      margin-bottom: 5%;
      width: 90%;
      font-size: 1.6em;
      font-family: 'Play', sans-serif;
      /* font-weight: bold; */
      color: #464547; 
    }
    .game__description{
      padding: 15px;
      width: 100%;
    }
    .description__tittle{
      font-size: 1.4em;
      text-align: center;
      font-weight: bold;
    }
    .description__main{
      text-align: justify;
      text-align-last:left;
      text-indent: 15px;
    }
    .description__main__section{
      margin: 20px 15px 0 15px;
      text-decoration-line: underline;
      font-weight: bold;
    }

    /* ГАЛЕРЕЯ */
    .game__gallery{
      padding: 15px;
      width: 100%;
    }
    
    .pictures{
    max-height: 500px;
    object-fit: cover;
    cursor: pointer;
    margin: 0 auto;
  }
  .swiper{
    text-align: center;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .swiper-container {
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .swiper-slide{
    display: flex;
    align-items: center;
    margin-right: 0;
  }

  .swiper-button-prev{
    filter: opacity(70%) grayscale(.80) 
  }
  .swiper-button-next{
    filter: opacity(70%) grayscale(.80)
  }


    @media (max-width: 850px) {
      .game__main{
        display: block;
      }
      .game{
        top: 5%;
        left: 4%;
      } 
      .game-image {
      height: 300px;
      }
      .game__description{
        width: 100%;
      }
      .game__gallery{
        width: 100%;
      }
      .pictures{
        max-height: 400px;
      }
      .swiper-button-prev{
        filter: opacity(0%)
      }
      .swiper-button-next{
        filter: opacity(0%)
       }
    }
    @media (max-width: 600px) {
      .game{
        top: 1%;
        left: 2%;
      } 
      .game-image {
      height: 170px;
      }
      .game__name {
        font-size: 2.3em;
        justify-content: flex-start;
        padding-left: 15px; 
      }
      .game__main{
        display: block;
      }
      .game__description{
        width: 100%;
      }
      .game__gallery{
        width: 100%;
      }
      .pictures{
        max-height: 150px;
      }
      .swiper-button-prev{
        filter: opacity(0%)
      }
      .swiper-button-next{
        filter: opacity(0%)
       }
    }
</style>