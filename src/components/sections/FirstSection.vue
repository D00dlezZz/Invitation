<script setup>

import SectionUi from '@/components/SectionUi.vue'
</script>

<template>
<section-ui show-bottom="true" show-top="true">
<div class="first-section-wrapper">
  <h1>Иван & Ирина</h1>
  <div class="img-flex">
    <img src="../../../public/icons/preview.png" alt="">
  </div>
</div>
</section-ui>
</template>

<style scoped>
.first-section-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
}
h1 {
  margin-bottom: 2.77vw;
  margin-left: -10px;
}
.img-flex {
  display: flex;
}

img {
  width: 100vw;
  max-width: 420px;
  margin-left: -10px;
  @media screen and (max-width: 800px) {
    max-width: 370px;
  }
}
</style>
