<script setup>

import SectionUi from '@/components/SectionUi.vue'
</script>

<template>
  <section-ui show-bottom="true" show-top="true">
    <div class="fourth-section-container">
      <div class="details-wrap">
        <h1>Детали</h1>
        <p>МЫ БУДЕМ РАДЫ, ЕСЛИ ВЫ ПОДДЕРЖИТЕ ЦВЕТОВУЮ ПАЛИТРУ НАШЕЙ СВАДЬБЫ:</p>
      </div>
      <img src="../../../public/icons/dress-code.png" alt="" class="dress-code">
      <div>
        <p>НАШИ ПОЖЕЛАНИЯ ПО ПОДАРКАМ:</p>
        <img src="../../../public/icons/presents.png" alt="" class="presents">
      </div>
    </div>
  </section-ui>
</template>

<style scoped>

.fourth-section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  gap: 30px;
  height: 100vh;
}
.details-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
}

.dress-code {
  width: 70%;
}

.presents {
  width: 70%;
  margin-top: 30px;
}

p {
  font-size: 20px;
}
</style>
