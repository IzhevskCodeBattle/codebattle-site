<template>
  <div class="about" style="height:100%;width:100%">
    <div class="background">
      <div class="about-text" style="width:400px">
        Code Battle - это мини-хакатон для тех, кто любит программирование, 
        искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
        любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
        Все сражения демонстрируются на большом экране в режиме реального времени.
      </div>    
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
<style scoped>
.background {
  display: flex;
  height: 100%;
  background-image: url(/static/img/Banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  background-attachment: scroll;
  background-position: 50% 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  z-index: 0; 
  align-items: center;
  justify-content: center;
  font-weight: bold;   
}

</style>

