<script setup>
defineProps({
  showBottom: true,
  showTop: true,
})
</script>

<template>
<div class="section-wrap page">
  <div v-if="showTop">
    <img src="../../public/icons/top-left.png" alt="" class="top-left" />
    <img src="../../public/icons/top-right.png" alt="" class="top-right">
  </div>
  <slot></slot>
  <div v-if="showBottom">
    <img src="../../public/icons/bottom-left.png" alt="" class="bottom-left">
    <img src="../../public/icons/bottom-right.png" alt="" class="bottom-right">
  </div>
</div>
</template>

<style scoped>
.section-wrap {
  display: flex;
  position: relative;
}

img {
  position: absolute;
}

.top-left {
  top: 0;
  left: 0;
  width: 19vh;
}

.top-right {
  top: 0;
  right: 0;
  width: 19vh;
}

.bottom-left {
  bottom: 0;
  left: 0;
  width: 9vh;
}
.bottom-right {
  bottom: 0;
  right: 0;
  width: 12vh;
}
</style>
