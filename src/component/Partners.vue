<template>
  <section class="partners" id="partners">
    <h2 class="toolbar">Наши партнеры</h2>
    <div class="swiper-wrapper">
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="partner in partners" :key="partner.title">
          <a target="_blank" :href="partner.href" ><img class="partner__logo" :src="partner.src" :alt="partner.title" /></a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'

export default {
  name: 'Partners',
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState({
      partners: state => {
        return state.partners.partners
      }
    })
  },
  data: () => ({
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
    margin: 0 10%;
    background-color: #fff;
    background-color: #e3e3e3cc;
    padding-bottom: 4%;
  }
  .partner__logo{
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
    margin: 0 auto;
  }
  .toolbar{
    margin: 0 10% 50px
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
    justify-content: center;
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
  @media (max-width: 950px) {
    .partners{
      margin: 0;
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
    .partners{
      margin: 0;
    }
  }
</style>
