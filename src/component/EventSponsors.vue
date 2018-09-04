<template>
  <section>
    <h2>Sponsors</h2>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="sponsor in sponsors" :key="sponsor.title">
        <img :href="sponsor.href" :src="sponsor.src" :alt="sponsor.title" />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'sponsors',
  components: {
    swiper,
    swiperSlide
  },
  data: () => ({
    sponsors: [
      { title: 'EPAM Systems',
        src: '/static/img/sponsors/epam_logo.jpg',
        href: 'http://epam.com'
      },
      { title: 'Sponsor 1',
        src: '/static/img/sponsors/1.png',
        href: 'http://epam.com'
      },
      { title: 'Sponsor 2',
        src: '/static/img/sponsors/2.jpg',
        href: 'http://epam.com'
      },
      { title: 'Sponsor 3',
        src: '/static/img/sponsors/3.jpg',
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
    margin-bottom: 25px;
    background-color: rgba(235, 235, 235);
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
    height: 100%;
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}

</style>
