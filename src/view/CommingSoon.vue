<template>

      <div class="about">
        <div class="banner">
          <img src="static\img\Banner.jpg" alt="Parallax" width="100%">
        </div>

        <div class="about-text">
            Code Battle - это мини-хакатон для тех, кто любит программирование, 
            искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
            любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
            Все сражения демонстрируются на большом экране в режиме реального времени.
        </div>


      </div>
</template>




<script>
import Countdown from 'vuejs-countdown'
export default {
  name: 'CommingSoon',
  components: { Countdown }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
 .banner{
   min-height: 100%;
 }
</style>
