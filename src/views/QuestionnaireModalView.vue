<script setup>
import emailjs from '@emailjs/browser';

const formParams = {
  name: '',
  alcohol: {
    champagne: false,
    whiteWine: false,
    redWine: false,
    vodka: false,
    whiskey: false,
    rum: false
  },
  allergy: '',
  childAge: '',
  separateMenu:'',
  alcoholList: ''
}

const sendMail = () => {
  emailjs.send("service_khfwutq", "template_cpgvq59", formParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
  console.log(formParams)
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
        <div class="checkbox-container">
          <div class="checkbox-wrap">
            <input type="checkbox" v-model="formParams.alcohol.champagne"/>
            <label>Шампанское</label>
          </div>
          <div class="checkbox-wrap">
            <input type="checkbox"  v-model="formParams.alcohol.redWine"/>
            <label>Вино красное</label>
          </div>
          <div class="checkbox-wrap">
            <input type="checkbox"  v-model="formParams.alcohol.whiteWine"/>
            <label>Вино белое</label>
          </div>
          <div class="checkbox-wrap">
            <input type="checkbox"  v-model="formParams.alcohol.vodka"/>
            <label>Водка</label>
          </div>
          <div class="checkbox-wrap">
            <input type="checkbox"  v-model="formParams.alcohol.whiskey"/>
            <label>Виски</label>
          </div>
          <div class="checkbox-wrap">
            <input type="checkbox"  v-model="formParams.alcohol.rum"/>
            <label>Ром</label>
          </div>
        </div>
      </div>
      <div class="input-wrap">
        <p>Есть ли аллергия/непереносимость каких либо продуктов:</p>
        <input type="text" placeholder="Орехи, морковь и плохие конкурсы"  v-model="formParams.allergy">
      </div>
      <p>Вопросы для тех, у кого есть дети:</p>
      <div class="input-wrap">
        <p>Укажите возраст ребенка:</p>
        <input type="text" placeholder="28 лет"  v-model="formParams.childAge">
      </div>
      <div class="input-wrap">
        <p>Нужно ли ребенку заказывать отдельные (определенные) блюда?</p>
        <input type="text" placeholder="Фуагра и черная икра"  v-model="formParams.separateMenu">
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
  gap: 20px;
}

.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.button {
  margin-top: 10px;
}

.checkbox-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  justify-items: start;
}

.checkbox-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Gothic A1", serif;
  font-weight: 400;
  font-style: normal;
  color: #435B47;
}
</style>
