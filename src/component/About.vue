<!-- содержимое секции компонента. Все содержимое необходимо размещать внутри тега section -->
<template>
  <section id="about">
    <div class="about__image"></div>
    <div class="about__wrapper">
        <h2 class="about__title">
          Code Battle
        </h2>
        <div class="about__card-wrapper">
          <div class="about__card">
            <v-icon class="xsize">extension</v-icon>
            <div class="about__card-text">Программирование в виде игры</div>  
          </div>
          <div class="about__card">
            <v-icon class="xsize" >supervisor_account</v-icon>
            <div class="about__card-text">Новые знакомства</div>  
          </div>
          <div class="about__card">
            <v-icon class="xsize" >code</v-icon>
            <div class="about__card-text">Практика, а не теория</div>  
          </div>
          <div class="about__card">
            <v-icon class="xsize" >thumb_up</v-icon>
            <div class="about__card-text">Море эмоций</div>  
          </div>
          
        </div>
    </div>
    <p class="about__description">
      Это мини-хакатон для тех, кто любит программирование, 
      искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
      любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
      Все сражения демонстрируются на большом экране в режиме реального времени.
    </p>
  </section>
</template>
<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  name: 'About'
}
</script>
<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  .about__image {
    position: relative;
    height: 500px;
    width: 100%;
    background-image: url('../../static/img/main.jpg');
    background-size: cover;
    opacity: .4;
    border-bottom: 1px solid #39C2D7;
  }
  .about__wrapper {
    height: 500px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .about__title {
    margin-top: 5%;
    font-size: 7em;
    font-family: 'Orbitron', sans-serif;
    color: #222222;
    font-weight: bold;
  }
  .about__card-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: top;
    margin-top: 1%;
  }
  .about__card {
    width: 20%;
    text-align: center;
    font-size: 1.6em;
    font-weight: bolder;
  }
  .about__card-text {
    font-family: 'Play', sans-serif;
    color: #222222;
  }
  .about__description {
    margin: 0 auto;
    font-size: 2em;
    text-align: center;
    width: 80%;
    padding-top: 50px;
    font-family: 'Play', sans-serif;
  }
  
  /* --------------- */
  h2{
    text-align: center;
    font-size: 3em;
  }
  .advantage{
    padding: 0 5%;
  }
  .info_text{
    padding: 80px 80px 40px 80px;
    margin: 0;
    font-size: 30px;
    text-align: center;
    line-height: 1.5;
  }
  .cb-text{
    font-weight: 100;
    font-size: 4.5em;
    text-transform: uppercase;
    color: #222222;
  } 

  .icon{
    margin-top: 50px;
    cursor: default;  
  }
  .card{
    text-align: center;
    margin-bottom: 50px;
  }
  .card_text{
    text-align: center;
    font-size: 30px;
  }
  .xsize{
    margin-top: 50px;
    padding: 20px;
    font-size: 90px;
    color: #464547;
    border-radius: 80px;
  }
  .layout{
    text-align: center;
  }

 @media (max-width: 1024px) {
   .about__title {
    font-size: 5em;
   }
   .xsize{
    font-size: 50px;
    margin: 0;
    padding: 0;
  }
  .about__card-text {
    font-size: .8em;
  }
  .about__image {
    height: 350px;
  }

 }
   
 @media (max-width: 650px) {
  .about__title {
    font-size: 3em;
  }
  .about__image {
    height: 350px;
  }
  .about__card-wrapper {
    margin-top: 4%;
  }
  .about__card {
    width: 40%;
  }
  .about__card-text {
    font-size: .7em;
  }
  .cb-text{
    font-size: 2.7em;
  }
  .info_text{
    padding: 10px;
  }
  .about__description {
    font-size: 1em;
  }
  .xsize{
    font-size: 50px;
    margin: 0;
    padding: 0;
  }
  .card_text{
    font-size: 1.3em;
  }
  .about__card-wrapper {
    flex-wrap: wrap;
  }
}
</style>
