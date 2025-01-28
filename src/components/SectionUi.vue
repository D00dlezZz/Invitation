<script setup>
defineProps({
  showBottom: true,
  showTop: true,
})
</script>

<template>
<div class="section-wrap">
  <div v-if="showTop">
    <img src="../../public/top-left.png" alt="" class="top-left" />
    <img src="../../public/top-right.png" alt="" class="top-right">
  </div>
  <slot></slot>
  <div v-if="showBottom">
    <img src="../../public/bottom-left.png" alt="" class="bottom-left">
    <img src="../../public/bottom-right.png" alt="" class="bottom-right">
  </div>
</div>
</template>

<style scoped>
.section-wrap {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
}

img {
  position: absolute;
}

.top-left {
  top: 0;
  left: 0;
  width: 173px;
}

.top-right {
  top: 0;
  right: 0;
  width: 216px;
}

.bottom-left {
  bottom: 0;
  left: 0;
  width: 100px;
}
.bottom-right {
  bottom: 0;
  right: 0;
  width: 133px;
}
</style>
