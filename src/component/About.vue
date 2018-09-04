<!-- содержимое секции компонента. Все содержимое необходимо размещать внутри тега section -->
<template>
  <section id="about">
    <v-flex>
      <v-card flat>
        <v-card-text class="info_text">
          <span class="cb-text">Code Battle</span>
          <p class="description">
            Это мини-хакатон для тех, кто любит программирование, 
            искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
            любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
            Все сражения демонстрируются на большом экране в режиме реального времени.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-layout row wrap class="advantage">
      <v-flex xs6 sm6 md3 lg3>
        <v-card flat>
          <v-icon class="xsize">extension</v-icon>
          <v-card-text class="card_text">Программирование в виде игры</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 sm6 md3 lg3>
        <v-card flat>
          <v-icon class="xsize" >supervisor_account</v-icon>
          <v-card-text class="card_text">Новые знакомства</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 sm6 md3 lg3>
        <v-card flat>
          <v-icon class="xsize" >code</v-icon>
          <v-card-text class="card_text">Практика, а не теория</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 sm6 md3 lg3>
        <v-card flat>
          <v-icon class="xsize" >thumb_up</v-icon>
          <v-card-text class="card_text">Море эмоций</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
    font-size: 80px;
    color: #76cdd8;
    border-radius: 80px;
  }
  .layout{
    text-align: center;
  }
 @media (max-width: 600px) {
  .cb-text{
    font-size: 2.7em;
  }
  .info_text{
    padding: 10px;
  }
  .description{
    font-size: 0.7em;
  }
  .xsize{
    font-size: 50px;
    margin: 0;
    padding: 0;
  }
  .card_text{
    font-size: 1.3em;
  }
}
</style>
