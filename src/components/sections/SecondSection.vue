<script setup>

import SectionUi from '@/components/SectionUi.vue'
</script>

<template>
  <section-ui show-top="true">
    <div class="second-section-container">
      <div class="second-section-wrap">
        <h3>Дорогие гости!</h3>
        <p>В НАШЕЙ ЖИЗНИ ПРОИЗОЙДЕТ ОЧЕНЬ ВАЖНОЕ СОБЫТИЕ - НАША СВАДЬБА!
          ПОЗВОЛЬТЕ ПРИГЛАСИТЬ ВАС РАЗДЕЛИТЬ С НАМИ РАДОСТЬ ЭТОГО ДНЯ</p>
      </div>
      <img src="../../../public/icons/calendar.png" alt="">
      <div class="second-section-wrap location">
        <h3>Локация:</h3>
        <p>РЕСТОРАН “ЗАВИДНОЕ”<br/>
          РАБОЧИЙ ПОСЕЛОК ИЗМАЙЛОВО, 23, СТР. 1</p>
      </div>
    </div>
  </section-ui>
</template>

<style scoped>
.second-section-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  gap: 6.98vw;
  margin: 0 auto;
  color: #435B47;
  width: 100%;
  @media screen and (min-width: 800px) {
    gap: 30px;
    justify-content: center;
  }
}
img {
  width: 300px;
  margin-bottom: 30px;
}

p {
  font-size: 20px;
}

.second-section-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
}

.location {
  max-width: 100%;
}

h3 {
  margin-bottom: 25px;
}
</style>
