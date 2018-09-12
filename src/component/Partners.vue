<template>
  <section class="partners">
    <div id="partners" class="anchor"></div>
    <h2 class="toolbar">Наши партнеры</h2>
    <div class="swiper-wrapper">
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="partner in partners" :key="partner.title">
          <img class="partner__logo" :href="partner.href" :src="partner.src" :alt="partner.title" />
        </swiper-slide>
      </swiper>
    </div>
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
      { title: 'ISTU',
        src: '/static/img/partners/istu_logo.png',
        href: 'http://www.istu.ru/'
      },
      { title: 'UDSU',
        src: '/static/img/partners/udgu_logo.png',
        href: 'http://udsu.ru/'
      },
      { title: 'KVANTORIUM',
        src: '/static/img/partners/kvantorium_logo.png',
        href: 'http://kvant18.ru/'
      },
      { title: 'GGPI',
        src: '/static/img/partners/ggpi_logo.png',
        href: 'http://www.ggpi.org/news.php'
      }
    ],
    swiperOption: {
      spaceBetween: 30,
      slidesPerView: 3,
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
  .partners {
    margin-bottom: 4%;
  }
  .partner__logo{
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
    margin: 0 auto;
  }
  .swiper-wrapper {
    width: 80%;
    overflow: hidden;
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
    height: 200px;
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
  @media (max-width: 1144px) {
    .swiper-container{
      height: 150px;
    }
    .partner__logo{
      width: 100px;
      height: 100px;
    }
  }
  @media (max-width: 600px) {
    .swiper-container{
      height: 100px;
    }
    .partner__logo{
      width: 60px;
      height: 60px;
    }
  }
</style>
