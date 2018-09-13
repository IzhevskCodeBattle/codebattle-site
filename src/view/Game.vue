<template>
  <v-content v-bind:style="{ backgroundImage : game.background }">
    <a name="content"></a>
    <img class="game-image" :src="game.img" alt='Картинка мероприятия'>
    <div class="game">
      <img class="game__logo" src=../../static/img/EPAM_LOGO.png alt="epam_logo">
      <div class="game__name">{{ game.name }}</div>
      <div class="game__link" v-if="game.link"><a :href="game.link" target="_blank">ПРИМЕРЫ БОТОВ</a></div>
    </div>
    <div class="game__main">
      <div class="game__description">
      </div>
      <div class="game__gallery">
        <swiper :options="swiperOption" class="swiper">
          <swiper-slide v-for="pic in pictures" :key="pic.title">
            <img class="pictures" :src="pic.src" :alt="pic.title" />
          </swiper-slide>
           <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
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
    games: [{
      id: 1,
      name: 'Bomberman',
      img: '/static/img/bomberman_banner.jpg',
      link: 'https://github.com/IzhevskCodeBattle/codebattle-bomberman-clients',
      background: '',
      pictures: [
        { title: 'Картинка 1',
          src: '/static/img/games/bomberman/map3.jpg'
        },
        { title: 'Картинка 2',
          src: '/static/img/games/bomberman/bomberman.png'
        },
        { title: 'Картинка 3',
          src: '/static/img/games/bomberman/map1.jpg'
        },
        { title: 'Картинка 4',
          src: '/static/img/games/bomberman/map2.jpg'
        },
        { title: 'Картинка 5',
          src: '/static/img/games/bomberman/map4.jpg'
        },
        { title: 'Картинка 6',
          src: '/static/img/games/bomberman/map5.jpg'
        },
        { title: 'Картинка 7',
          src: '/static/img/games/bomberman/map6.jpg'
        },
        { title: 'Картинка 8',
          src: '/static/img/games/bomberman/map7.jpg'
        }
      ],
      description: `<h2 class="description__tittle">Правила игры</h2>
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
        </div>`
    },
    {
      id: 2,
      name: 'Танчики',
      img: '/static/img/panzer.jpg',
      link: 'https://github.com/IzhevskCodeBattle/codebattle-battlecity-clients',
      background: '',
      description: `<h2 class="description__tittle">Правила игры</h2>
        <div class="description__main">
          Каждый участник разрабатывает своего бота для танчиков, который обыграет других ботов по очкам.
        </div>
        <div class="description__main__section">Ход</div>
        <div class="description__main">
          Игра пошаговая, каждую такт (секунду) сервер посылает твоему клиенту (боту) состояние обновленного поля на текущий момент и ожидает ответа команды танку. 
          За следующий такт игрок должен успеть дать команду танку. Если не успел — танк остается на месте.
        </div>
        <div class="description__main__section">Поле</div>
        <div class="description__main">
          Поле поделено на клетки. В каждой клетке может находится один объект:
          <ul>
            <li>танк игрока (свой)</li>
            <li>вражеский танк</li>
            <li>AI танк (если режим игры с AI)</li>
            <li>неразрушаемая стена</li>
            <li>разрушаемая стена</li>
            <li>ёж (hedgehog - неразрушаемое препятствие через которое не может проехать танк,
            но может через него стрелять, а также может быть подбит другим танков)</li>
            <li>снаряд, выпущенный танком. Снаряд при попадании в танк отнимает 1 жизнь.
            Если запас жизней танка = 0 - танк погибает. Каждый танк начинает игру с <strong>1</strong> жизнью.</li>
            <li>препятствия (песок и ров - замедляющие ход танка на 1 ход,
            болото - если танк оказался в болоте он больше <strong>не может</strong> двигаться по карте до момента гибели)</li>
            <li>Доп. патроны (увеличивающие запас доступных снарядов танка на <strong>5</strong>.
            Начальное кол-во патронов танка = <strong>10</strong>)</li>
            <li>Доп. жизнь (увеличивает запас жизней танка на <strong>1</strong>)</li>
            <li>Телепорт - при входе в телепорт танк будет перемещен в случайный другой телепорт на карте
            (если выход из телепорт не занят других объектом).</li>
          </ul>
        </div>
        <div class="description__main__section">Команды</div>
        <div class="description__main">
          <ul>
            <li><em>UP</em>, <em>DOWN</em>, <em>LEFT</em>, <em>RIGHT</em> – приводят к повороту и передвижению танка в заданном направлении на 1 клетку</li>
            <li><em>ACT</em> - выстрел снаряда. Команды движения можно комбинировать с командами выстрела,
            разделяя их через запятую – это значит что за один такт игры будет выстрел, а потом движение (LEFT, ACT)
            или наоборот (ACT, LEFT).</li>
          </ul>
        </div>
        <div class="description__main__section">Порядок начисления очков</div>
        <div class="description__main">
          <ul>
            <li>Очки прибавляются за уничтожение вражеского танка</li>
            <li>Очки вычитаются за гибель своего танка</li>
          </ul>
        Побеждает игрок набравший максимальное количество очков к концу игры. Длительность игры и количество очков будут определены на месте ведущим.
        </div>`
    },
    {
      id: 3,
      name: 'LodeRunner',
      img: '/static/img/games/loderunner.jpg',
      link: '',
      background: '',
      description: `<h2 class="description__tittle">Правила игры</h2>
        <div class="description__main">
          Каждый участник должен написать своего бота для героя, который обыграет героев других игроков по очкам. 
        </div>
        <div class="description__main__section">Поле</div>
        <div class="description__main">
          Все играют на одном поле. 
          Герой может передвигаться по свободным ячейкам во все четыре стороны. 
          Герой может вскарабкаться по лестнице (ввер/вниз), а так же передвигаться по трубе (влево/вправо). 
          С трубы можно спрыгнуть вниз. Герой падает до тех пор, пока не приземлится.
        </div>
        <div class="description__main__section">Враг</div>
        <div class="description__main">
          Враг - это охотник, беленький бот, который следит за жертвой, пока ее не настигнет - в этот момент герой отправляется в байтовый рай.
        </div>
        <div class="description__main__section">Ямка</div>
        <div class="description__main">
          Каждый игрок может просверлить ямку в разрушаемой стене (есть еще неразрушаемые). 
          Ямка со временем зарастает. Так можно спастись от охотника.
          Если просверленная ямка создает дыру в полу, то герой может пролететь сквозь нее не застрявая.
        </div>
        <div class="description__main__section">Порядок начисления очков</div>
        <div class="description__main">
          На своем пути герой может повстречать золото и врага. 
          За золото герой получит бонусные очки. За врага - штрафные :).
        </div>
        <div class="description__main">
          Штрафные очки так же предусмотрены за падение самого героя в свою или чужую ямку из которой он не сможет выбраться. 
          Если ямка чужая - конкурент-участник получит очки.
        </div>
        <div class="description__main">
          За каждую новую кучку золота герой получает немного больше очков, чем за предыдущую. 
          Счетчик сбрасывается при потере героя - выгодно собирать золото и не терять героя. Очки суммируются. 
          Побеждает игрок с большим числом очков (до условленного времени).
        </div>`
    }],
    pictures: [],
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      // pagination: {
      //   el: '.swiper-pagination'
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }),
  created () {
    this.gameId = this.$route.params.id
    this.game = this.games.find(game => game.id === Number(this.gameId))
    this.pictures = this.game.pictures
    window.scrollTo(0, 0)
  },
  mounted () {
    let gameDescription = document.querySelector('.game__description')
    gameDescription.innerHTML = this.game.description
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
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 6em;
      font-weight: bold;
      text-align: left;
      padding-left: 0;
      color: #464547;
    }
    .game__link{
      cursor: pointer;
      width: 150px;
      text-align: center;
      padding: 10px;
      border: none;
      border-radius: px;
      background-color: #464547; 
    }
    .game__link a{
      cursor: pointer;
      text-decoration: none;
      color: #ffffff;
      font-size: 1em;
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
      object-fit: cover;
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
      color: #464547; 
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
        top: 3%;
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
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.