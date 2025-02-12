<script setup>

import SectionUi from '@/components/SectionUi.vue'
</script>

<template>
  <section-ui show-top="true">
    <div class="second-section-container">
      <div class="test">
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
    </div>
  </section-ui>
</template>

<style scoped>
.second-section-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100dvh;
  color: #435B47;
  width: 100%;
  @media screen and (min-width: 800px) {
    gap: 30px;
  }
}

.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.98vw;
  margin-bottom: 40px;
}

img {
  width: 300px;
}

p {
  font-size: 20px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
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
  margin-bottom: 10px;
}
</style>
