<script setup>
import emailjs from '@emailjs/browser';

const formParams = {
  name: ''
}


const sendMail = () => {
  emailjs.send("service_khfwutq", "template_cpgvq59", formParams)
}
</script>

<template>
<div class="questionnaire-modal-wrapper">
  <form class="questionnaire-wrapper">
    <p>*Просим вас заполнить анкету индивидуально, что бы мы могли учесть ответы каждого гостя</p>
    <div>
      <div>
        <p>Ваше имя и фамилия:</p>
        <input type="text" placeholder="Имя Фамилия" v-model="formParams.name">
      </div>
      <div @click="sendMail">Отправить</div>
    </div>
  </form>
</div>
</template>

<style scoped>
.questionnaire-modal-wrapper {
  width: 100vw;
  height: 100vh;
  background: red;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
}

.questionnaire-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 53px;
  max-width: 1080px;
}
</style>
