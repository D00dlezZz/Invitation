<script setup>
import FirstSection from '@/components/sections/FirstSection.vue'
import SecondSection from '@/components/sections/SecondSection.vue'
import ThirdSection from '@/components/sections/ThirdSection.vue'
import FourthSection from '@/components/sections/FourthSection.vue'
</script>

<template>
 <div class="app-container">
   <first-section/>
   <second-section/>
   <third-section/>
   <fourth-section/>
 </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
}
</style>
