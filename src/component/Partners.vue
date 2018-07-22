<template>
  <section>
    <h2 class="toolbar">Partners</h2>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="partner in partners" :key="partner.title">
        <img :href="partner.href" :src="partner.src" :alt="partner.title" />
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
  // methods: {
  //   epam_site () {
  //   }
  // },
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
  img{
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }

  h2{
    text-align: center;
    font-size: 3em;
    /* padding-bottom: 15px; */
  }
  .swiper{
    text-align: center;
    /* font-size: 38px;
    font-weight: 700; */
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
    height: 300px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}

</style>
