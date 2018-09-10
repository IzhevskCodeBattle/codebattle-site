<!-- содержимое секции компонента. Все содержимое необходимо размещать внутри тега section -->
<template>
  <section id="about">
    <div class="about__image"></div>
    <div class="about__wrapper">
      <img src="../../static/img/logo_with_text.png" alt="main_logo">
      <button class="registration-button" id="twf" v-bind:data-twf-target-state="this.registrationLink">зарегистрироваться</button>
    </div>
    <p class="about__description">
      Это мини-хакатон для тех, кто любит программирование, 
      искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
      любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
      Все сражения демонстрируются на большом экране в режиме реального времени.
    </p>
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
  </section>
</template>
<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  name: 'About',
  data: () => ({
    registrationLink: `{"event_id": 798207}`
  })
}
</script>
<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  .about__image {
    position: relative;
    height: 500px;
    width: 125.5%;
    margin-left: -13%;
    background-image: url('../../static/img/main-banner.jpg');
    background-size: cover;
    background-position: 0 15%;
    box-shadow: 0px 10px 33px -6px rgba(0,0,0,1);   
  }
  .about__wrapper {
    height: 500px;
    position: absolute;
    top: 1%;
    left: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .registration-button {
    background-color: #730606;
    color: white;
    font-size: 1.8em;
    padding: 10px 20px;
    border: 2px solid white;
    margin-top: 3%;
  }
  .registration-button:focus {
    outline: none;
  }
  .about__wrapper img {
    width: 70%;
    height: 70%;
  }
  .about__title {
    margin-top: 5%;
    font-size: 7em;
    font-family: 'Orbitron', sans-serif;
    color: #222222;
    font-weight: bold;
  }
  .about__card-wrapper {
    width: 80%;
    margin: 0 auto;
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
    color: #222222;
  }
  .about__description {
    margin: 0 auto;
    font-size: 2em;
    text-indent: 2em;
    text-align: justify;
    width: 80%;
    padding-top: 50px;
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
    height: 300px;
  }
 }

 @media (max-width: 950px) {
   .about__image {
     width: 100%;
     margin: 0;
   }
 }
   
 @media (max-width: 650px) {
  .about__title {
    font-size: 3em;
  }
  .about__image {
    height: 350px;
    width: 100%;
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
