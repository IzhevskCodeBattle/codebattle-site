<!-- содержимое секции компонента. Все содержимое необходимо размещать внутри тега section -->
<template>
  <section id="about">
    <div class="about__image"></div>
    <div class="about__wrapper">
      <!-- <img src="../../static/img/logo_with_text.png" alt="main_logo"> -->
      <div class="event-info">2 марта в 13.30</div>
      <div class="event-info">Ресторан Welten</div>
      <div class="event-info">(ул. Пушкинская, 130а)</div>
      <div class="event-button">
        <v-btn class="registration-button white--text" href="/game/5">Правила</v-btn>
        <v-btn class="registration-button white--text" id="twf" v-bind:data-twf-target-state="this.registrationLink">Принять участие</v-btn>
        <v-btn class="registration-button white--text" href="/event/901674">О мероприятии</v-btn>
      </div>
    </div>
    <div class="abount__margin-wrapper">
      <p class="about__description">
        Это мини-хакатон для тех, кто любит программирование,
        искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален:
        любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками.
        Все сражения демонстрируются на большом экране в режиме реального времени.
      </p>
      <div class="about__card-wrapper">
        <div class="about__card">
          <v-icon class="xsize">extension</v-icon>
          <div class="about__card-text">Программирование как игра</div>
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
  </section>
</template>
<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  name: 'About',
  data: () => ({
    registrationLink: `{"event_id": 901674}`
  })
  methods: {
    changeHash () {
      this.$router.push('#about')
    }
  }
}
</script>
<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  .about__image {
    position: relative;
    height: 800px;
    background-image: url('../../static/img/sm_banner.jpg');
    background-size: cover;
    background-position: 0 0;
    box-shadow: 0px 10px 33px -6px rgba(0,0,0,1);
  }
  .abount__margin-wrapper{
    margin: 0 10%;
    background-color: #fff;
    background-color: #e3e3e3cc;
  }
  .event-info {
    color: #fff;
    font-size: 2.3em;
    text-align: center;
  }
  .event-button {
    display: inherit;
    flex-direction: column;
  }
  .about__wrapper {
    height: 475px;
    position: absolute;
    top: 6%;
    left: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .registration-button {
    background-color: #0054e6a6 !important;
    color: white;
    font-size: 1.8em;
    padding: 10px 20px;
    border: 2px solid white;
    margin-top: 10%;
    height: auto !important;
  }

  .registration-button:focus {
    outline: none;
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

 @media (max-width: 1024px) {
  .about__image {
    height: 400px;
  }
   .about__title {
    font-size: 5em;
   }
   .event-info {
     font-size: 1.5em;
   }
   .xsize{
    font-size: 50px;
    margin: 0;
    padding: 0;
  }

  .about__wrapper {
    top: 2.5%;
    height: 300px;
  }

  .about__card-text {
    font-size: .8em;
  }
  .registration-button {
    font-size: 1.4em;
    /* padding: 10px 20px; */
    margin-top: 3%;
  }
 }

 @media (max-width: 950px) {
  .about__wrapper {
    left: 70%;
    top: 2%;
    height: 300px;
  }
  .about__image {
    width: 100%;
    margin: 0;
    height: 390px;
  }
  .abount__margin-wrapper{
    margin: 0;
  }
 }

 @media (max-width: 650px) {
  .event-info {
    font-size: 1.2em;
    text-align: center;
  }
  .about__title {
    font-size: 3em;
  }
  .about__image {
    height: 300px;
    width: 100%;
    background-position: 50% 0;
  }
  .about__wrapper {
    top: -7%;
    left: 0%;
    width: 100%;
    height: 500px;
    transform: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
  .abount__margin-wrapper{
    margin: 0;
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
@media (max-width: 520px) {
  .registration-button {
    font-size: .8em;
  }
}
@media (max-width: 360px) {
  .event-button {
    display: grid;
  }
  .event-info {
    font-size: 0.9em;
  }
  .about__wrapper {
    top: -7%;
  }
}
</style>
