<template>
    <section id="about">
        <div class="about__banner-wrapper">
            <img class="about__banner" src="../../static/img/snake_banner.jpg">
            <div class="about__buttons-wrapper">
                <div class="about__buttons">
                    <div class="about__button" @click="redirectToGame()">Правила</div>
                    <div class="about__button"><a :href="this.registrationLink" target="_blank">Принять участие</a></div>
                    <div class="about__button" @click="redirectToEvent()">О мероприятии</div>
                </div>
            </div>
        </div>
        <div class="about__info-wrapper">
            <div class="about__info">
                {{ this.location }}
            </div>
        </div>
        <div class="about__description">
            Это мини-хакатон для тех, кто любит программирование,
            искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален:
            любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками.
            Все сражения демонстрируются на большом экране в режиме реального времени.
        </div>
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
    </section>
</template>

<script>
    export default {
        name: 'About',

        data: () => ({
            registrationLink: `https://epa.ms/CB5`,
            location: '29 февраля 13:00 Рестопаб "Устинов" (ул. М. Горького, д84)',
            actualGameId: 6,
            actualEventId: 1
        }),

        methods: {
            changeHash () {
                this.$router.push('#about')
            },

            redirectToGame: function () {
                this.$router.push(`/game/${this.actualGameId}`)
            },

            redirectToEvent: function () {
                this.$router.push(`/event/${this.actualEventId}`)
            }

        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }

    .about__banner-wrapper {
        position: relative;
        overflow: hidden;
    } 

    .about__banner {
        width: 100%;
        height: 100%;
        margin-top: 56px;
    }

    .about__buttons-wrapper {
        position: absolute;
        width: 100%;
        color: #8cc540;
        display: flex;
        justify-content: space-around;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
    }

    .about__buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .about__button {
        text-transform: uppercase;
        font-size: 150%;
        border: 2px solid #8cc540;
        padding: 5px;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    }

    .about__button:hover {
        border: 1px solid #8cc540;
    }

    .about__info-wrapper {
        height: 30px;
        font-size: 130%;
        background-color: #e3e3e3cc;
        margin: -4px 10% 0 10%;
        display: flex;
        align-items: baseline;
        justify-content: space-around;
    }

    .about__info {
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        width: 60%;
        border-bottom: 1px solid #2f4e05;
    }


    .about__description {
        background-color: #e3e3e3cc;
        margin: 0 10%;
        padding: 30px;
        text-align: center;
        font-size: 150%;
        margin-top: 0px;
    }

    .about__card-wrapper {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: top;
        background-color: #e3e3e3cc;
    }

    .about__card {
        width: 20%;
        text-align: center;
        font-size: 1.6em;
    }

    .about__card-text {
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-family: 'Oswald', sans-serif;
    }


    @media (max-width: 1267px) {
        .about__button {
            font-size: 100%;
        }
        
        .about__card-text {
            font-size: .8em;
        }
    }

    @media (max-width: 950px) {
        #about {
            background-color: #e3e3e3cc;
        }

        .about__banner {
            width: 150%;
            margin-left: -25%;
        }

        .about__info-wrapper {
            margin: -5px 0 0 0;
        }

        .about__description {
            margin: 0;
        }

        .about__card-wrapper {
            margin: 0;
            width: 100%;
        }

        .about__info {
            width: 75%;
        }


    }

    @media (max-width: 580px) {
        .about__button {
            font-size: 110%;
        }

        .about__banner {
            width: 200%;
            margin-left: -50%;
        }

        .about__info {
            width: 90%;
            font-size: 90%;
        }
    }


    @media (max-width: 440px) {
        .about__banner {
            width: 220%;
            margin-left: -60%;
        }

        .about__buttons-wrapper {
            bottom: 5px;
        }

        .about__card-wrapper {
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }

        .about__info {
            width: 90%;
            font-size: 75%;
        }

    }

    @media (max-width: 321px) {
        .about__button {
            font-size: 90%;
        }

        .about__info {
            width: 90%;
            font-size: 65%;
        }

    }

</style>