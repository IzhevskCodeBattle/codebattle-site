<template>
  <section class="partners">
    <div id="partners" class="anchor"></div>
    <h2 class="toolbar">Наши партнеры</h2>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="partner in partners" :key="partner.title">
        <img class="partner__logo" :href="partner.href" :src="partner.src" :alt="partner.title" />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Partners',
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
  .partner__logo{
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
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
    height: 400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    background-color: #CEDB56;
  }
  .swiper-slide{
    display: flex;
    align-items: center;
    margin-right: 0;
  }
</style>
