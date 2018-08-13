<template>
  <swiper :options="swiperOptionPlayers" :style="{ height: imageHeight }">
    <swiper-slide v-for="partner in partners" :key="partner.place">
      <v-badge overlap color="orange">
        <span slot="badge">{{partner.place}}</span>
        <v-card flat>
          <v-card-media contain d-block>
              <img :href="partner.href" :src="partner.src" :alt="partner.title" />
          </v-card-media>
          <v-card-text>
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
  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '50'
        case 'sm': return '100'
        case 'md': return '125'
        case 'lg': return '250'
        case 'xl': return '250'
      }
    }
  },
  data: () => ({
    partners: [
      { place: 1,
        title: 'EPAM Systems',
        src: '/static/img/partners/epam_logo.jpg',
        href: 'http://epam.com'
      },
      { place: 2,
        title: 'Partner 1',
        src: '/static/img/partners/1.png',
        href: 'http://epam.com'
      },
      { place: 3,
        title: 'Partner 2',
        src: '/static/img/partners/2.jpg',
        href: 'http://epam.com'
      },
      { place: 4,
        title: 'Partner 3',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      },
      { place: 5,
        title: 'EPAM Systems',
        src: '/static/img/partners/epam_logo.jpg',
        href: 'http://epam.com'
      },
      { place: 6,
        title: 'Partner 1',
        src: '/static/img/partners/1.png',
        href: 'http://epam.com'
      },
      { place: 7,
        title: 'Partner 2',
        src: '/static/img/partners/2.jpg',
        href: 'http://epam.com'
      },
      { place: 8,
        title: 'Partner 3',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      },
      { place: 9,
        title: 'Partner 3',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      },
      { place: 10,
        title: 'Partner 3',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      }
    ],
    swiperOptionPlayers: {
      centeredSlides: true,
      slidesPerView: 10,
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

</style>

