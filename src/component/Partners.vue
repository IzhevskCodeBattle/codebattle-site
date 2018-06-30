<template>
  <section>    
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <swiper-slide><img class="img_center" src="/static/img/Banner.jpg" alt="EPAM"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
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
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        slidesPerView: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
<style scoped>

img{
  width: 90%;
  height: 90%;
}

.img_center{
  position	: relative;
  padding: 15px;
}

  .swiper{
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    width: 100%;
    background-color: white;
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


  .swiper-slide {
    width: 60%;
    /* background-color: #eee; */
    margin-right: 30px;
    flex-shrink: 0;
    height: 100%;
    
  }
  .swiper-slide:nth-child(2n) {
      width: 40%;
  }
  .swiper-slide:nth-child(3n) {
      width: 20%;
  }
</style>
