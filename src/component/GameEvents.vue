<template>
   <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="partner in partners" :key="partner.title">
        <img :href="partner.href" :src="partner.src" :alt="partner.title" />
      </swiper-slide>
    </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'GameEvents',
  components: {
    swiper,
    swiperSlide
  },
  data: () => ({
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
    ],
    swiperOption: {
      spaceBetween: 30,
      slidesPerView: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  })
}
</script>
<style scoped>

</style>

