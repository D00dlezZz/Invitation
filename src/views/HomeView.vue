<script setup>
import FirstSection from '@/components/sections/FirstSection.vue'
import ThirdSection from '@/components/sections/ThirdSection.vue'
import SecondSection from '@/components/sections/SecondSection.vue'
import FourthSection from '@/components/sections/FourthSection.vue'

</script>

<template>
  <div class="scroll-wrapper">
    <first-section class="page"/>
    <second-section class="page"/>
    <third-section class="page"/>
    <fourth-section class="page"/>
</div>
</template>

<style>
.scroll-wrapper {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  @media screen and (max-width: 800px) {
    height: calc(100vh - 60px);
  }
}

.page {
  height: 100%;
  scroll-snap-align: center;
}
</style>
