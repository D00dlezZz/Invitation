<script setup>

import SectionUi from '@/components/SectionUi.vue'
</script>

<template>
  <section-ui show-top="true">
    <div class="second-section-container">
      <div class="afs">
        <h3>Дорогие гости!</h3>
        <p>В НАШЕЙ ЖИЗНИ ПРОИЗОЙДЕТ ОЧЕНЬ ВАЖНОЕ СОБЫТИЕ - НАША СВАДЬБА!
          ПОЗВОЛЬТЕ ПРИГЛАСИТЬ ВАС РАЗДЕЛИТЬ С НАМИ РАДОСТЬ ЭТОГО ДНЯ</p>
      </div>
      <img src="../../../public/calendar.png" alt="">
      <div class="afs">
        <h3>Локация:</h3>
        <p>РЕСТОРАН “ЗАВИДНОЕ”
          РАБОЧИЙ ПОСЕЛОК ИЗМАЙЛОВО, 23, СТР. 1</p>
      </div>
    </div>
  </section-ui>
</template>

<style scoped>
.second-section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
  color: #435B47;
  width: 100%;
}
img {
  width: 300px;
}

.afs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 90px;
  max-width: 320px;
  gap: 30px;
}

h3 {
  font-family: "Great Vibes", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  color: #435B47;
}
</style>
