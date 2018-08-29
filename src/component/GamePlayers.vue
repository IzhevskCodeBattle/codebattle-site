<template>
  <swiper :options="swiperOptionPlayers">
    <swiper-slide v-for="partner in partners" :key="partner.place">
      <v-badge overlap color="orange" style="margin-top: 10px;">
        <span slot="badge">{{partner.place}}</span>
        <v-card flat>
          <v-card-media contain d-block >
              <img :href="partner.href" :src="partner.src" :alt="partner.title" />
          </v-card-media>
          <v-card-text style="text-align: center;">
            {{partner.title}}
          </v-card-text>
        </v-card>
      </v-badge>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'GamePlayers',
  components: {
    swiper,
    swiperSlide
  },
  // computed: {
  //   imageHeight () {
  //     switch (this.$vuetify.breakpoint.name) {
  //       case 'xs': return '50'
  //       case 'sm': return '100'
  //       case 'md': return '125'
  //       case 'lg': return '250'
  //       case 'xl': return '250'
  //     }
  //   }
  // },
  data: () => ({
    partners: [
      { place: 1,
        title: 'Player 1',
        src: '/static/img/partners/epam_logo.jpg',
        href: 'http://epam.com'
      },
      { place: 2,
        title: 'Player 2',
        src: '/static/img/partners/1.png',
        href: 'http://epam.com'
      },
      { place: 3,
        title: 'Player 3',
        src: '/static/img/partners/2.jpg',
        href: 'http://epam.com'
      },
      { place: 4,
        title: 'Player 4',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      },
      { place: 5,
        title: 'Player 5',
        src: '/static/img/partners/epam_logo.jpg',
        href: 'http://epam.com'
      },
      { place: 6,
        title: 'Player 6',
        src: '/static/img/partners/1.png',
        href: 'http://epam.com'
      },
      { place: 7,
        title: 'Player 7',
        src: '/static/img/partners/2.jpg',
        href: 'http://epam.com'
      },
      { place: 8,
        title: 'Player 8',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      },
      { place: 9,
        title: 'Player 9',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      },
      { place: 10,
        title: 'Player 10',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      }
    ],
    swiperOptionPlayers: {
      centeredSlides: false,
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  })
}
</script>
<style scoped>
    img{
      min-width: 100%;
      min-height: 100%;
      width: 100%;
      height: 100%;
    }
</style>

