<script setup>
import emailjs from '@emailjs/browser';
import IconClose from '@/components/IconClose.vue'

const formParams = {
  name: ''
}

const sendMail = () => {
  emailjs.send("service_khfwutq", "template_cpgvq59", formParams)
}
</script>

<template>
<div class="questionnaire-modal-wrapper">
  <form class="questionnaire-form-wrapper">
    <p class="questionnaire-form__remark">*Просим вас заполнить анкету индивидуально, что бы мы могли учесть ответы каждого гостя</p>
    <div class="form-container">
      <div class="input-wrap">
        <p>Ваше имя и фамилия:</p>
        <input type="text" placeholder="Имя Фамилия" v-model="formParams.name">
      </div>
      <div class="input-wrap">
        <p>Ваши предпочтения по напиткам:</p>
      </div>
      <div class="input-wrap">
        <p>Есть ли аллергия/непереносимость каких либо продуктов:</p>
        <input type="text" placeholder="Орехи, морковь и плохие конкурсы">
      </div>
      <p>Вопросы для тех, у кого есть дети:</p>
      <div class="input-wrap">
        <p>Укажите возраст ребенка:</p>
        <input type="text" placeholder="28 лет">
      </div>
      <div class="input-wrap">
        <p>Нужно ли ребенку заказывать отдельные (определенные) блюда?</p>
        <input type="text" placeholder="Фуагра и черная икра">
      </div>
      <div class="button" @click="sendMail">Отправить</div>
    </div>
  </form>
</div>
</template>

<style scoped>
.questionnaire-modal-wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  background: #0D11239E;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0 ;
}

.questionnaire-form-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 40px;
  background: #CFC2B1;
  border-radius: 4px;
  gap: 20px;
  max-width: 500px;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
}

.questionnaire-form__remark {
  text-align: center;
}

.close-icon {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1010;
  background: red;
  width: 20px;
  height: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
