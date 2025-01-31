<script setup>

import SectionUi from '@/components/SectionUi.vue'
</script>

<template>
<section-ui show-bottom="true">
  <div class="third-section-container">
    <div class="event-program-warp">
      <h1>Программа:</h1>
      <div class="event-time-wrap">
        <p class="time">13:00</p>
        <span class="event">-</span>
        <p class="event">СБОР ГОСТЕЙ</p>
      </div>
      <div class="event-time-wrap">
        <p class="time">14:00</p>
        <span class="event">-</span>
        <p class="event">ЦЕРЕМОНИЯ</p>
      </div>
      <div class="event-time-wrap">
        <p class="time">15:00</p>
        <span class="event">-</span>
        <p class="event">БАНКЕТ</p>
      </div>
    </div>
    <div class="questionnaire-wrap">
      <h2>Дорогие гости!</h2>
      <p class="questionnaire-text">Просим Вас подтвердить свое присутствие до 1 мая, что бы мы могли планировать свою свадьбу наилучшим образом</p>
      <p class="questionnaire-text">Ответьте пожалуйста на несколько вопросов, которые мы для вас подготовили:</p>
      <router-link :to="{name: 'questionnaire'}" target="_blank" class="button">АНКЕТА ГОСТЯ</router-link>
    </div>
    <p class="additional-info">В случае возникновения вопросов, касаемо торжества, обращайтесь к нашему координатору:<br/>
      +7 963 603 90 06 - Евгения</p>
  </div>
</section-ui>
</template>

<style scoped>
.third-section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
}

.event-program-warp {
  margin-top: 40px;
}

.event-time-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.time {
  font-family: "Great Vibes", serif;
  font-weight: 400;
  font-style: normal;
  color: #435B47;
  font-size: 50px;
}

.event {
  font-size: 20px;
}

h1 {
  font-size: 60px;
  margin-bottom: 30px;
}

h2 {
  font-size: 60px;
}
.questionnaire-wrap {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border: 6px solid #435B47;
  margin-top: 20px;
  gap: 20px;
  max-width: 500px;
}

.questionnaire-text {
  text-align: center;
  font-size: 20px;
}
.button {
  width: 75%;
  border: none;
  background: #435B47;
  font-size: 15px;
  padding: 10px;
  color: #CFC2B1;
  text-align: center;
  text-decoration: none;
  font-family: "Gothic A1", serif;
  font-weight: 400;
  font-style: normal;
}

.additional-info {
  text-align: center;
  width: 60%;
  font-size: 15px;
  margin-top: 30px;
}
</style>
