<script setup>
</script>

<template>
 <div class="app-container">
    <router-view/>
 </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: 1s cubic-bezier(0.5, 0, 0.5, 1);
}
</style>
