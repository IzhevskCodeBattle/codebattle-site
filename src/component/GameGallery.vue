<template>
  <swiper :options="swiperOptionTop" :style="{ height: imageHeight }">
    <swiper-slide v-for="partner in partners" :key="partner.title">
      <img :href="partner.href" :src="partner.src" :alt="partner.title" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'GameGallery',
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '50px'
        case 'sm': return '100px'
        case 'md': return '125px'
        case 'lg': return '250px'
        case 'xl': return '250px'
      }
    }
  },
  data: () => ({
    swiperOptionTop: {
      centeredSlides: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    },
    partners: [
      { title: 'EPAM Systems',
        src: '/static/img/partners/epam_logo.jpg',
        href: 'http://epam.com'
      },
      { title: 'Partner 1',
        src: '/static/img/partners/1.png',
        href: 'http://epam.com'
      },
      { title: 'Partner 2',
        src: '/static/img/partners/2.jpg',
        href: 'http://epam.com'
      },
      { title: 'Partner 3',
        src: '/static/img/partners/3.jpg',
        href: 'http://epam.com'
      }
    ]
  })
}
</script>
<style scoped>
.swiper-slide img {
  height: 100%;
}
</style>

