<script setup>

import SectionUi from '@/components/SectionUi.vue'
</script>

<template>
<section-ui>
<div class="test-section">
  <h1>Иван & Ирина</h1>
  <div class="img-flex">
    <img src="../../../public/preview.png" alt="" class="test">
  </div>
</div>
</section-ui>
</template>

<style scoped>
.test {
  width: 430px;
}
.test-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-size: 54px;
  margin-top: 190px;
  font-family: "Great Vibes", serif;
  font-weight: 400;
  font-style: normal;
  color: #435B47;
}
.img-flex {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-left: -10px;
}
</style>
