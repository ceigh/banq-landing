<template>
<div id='call' class='container'>
  <p class='heading'>
    Если хотите снизить платеж по кредиту - заполните заявку
  </p>

  <form @submit.prevent='send'>
    <div v-show='isLoading' class='overlay' />

    <p>Укажите ваши данные</p>
    <div class='inputs'>
      <Input inputmode='decimal' placeholder='Ставка по кредиту'
        pattern='^[0-9,.% -]+$' minlength='1' maxlength='6'
        v-model='rate' />

      <Input placeholder='Ваше имя' minlength='2' maxlength='128'
        v-model.trim='name' />

      <Input type='tel' inputmode='tel' pattern='^[0-9() +-]+$'
        minlength='5' maxlength='16' required v-model.trim='phone'
        placeholder='Номер телефона *' />

      <Button type='submit' text='Отправить заявку' :icon='false' />

      <span class='success' v-if='isSuccess'>Заявка была отправлена</span>
      <span class='error' v-if='error'>{{ error }}</span>
    </div>
  </form>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import emailjs from 'emailjs-com'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

emailjs.init(process.env.VUE_APP_EMAILJS_ID)

export default defineComponent({
  components: {
    Input,
    Button
  },

  data () {
    return {
      rate: '',
      name: '',
      phone: '',
      error: '',
      isLoading: false,
      isSuccess: false
    }
  },

  methods: {
    async send (): Promise<void> {
      this.error = ''
      this.isSuccess = false

      const service = process.env.VUE_APP_EMAILJS_SERVICE
      const template = process.env.VUE_APP_EMAILJS_TEMPLATE

      const { rate, name, phone } = this

      this.isLoading = true
      try {
        await emailjs.send(service, template, {
          rate, name, phone
        })
        this.isSuccess = true
      } catch (e) { this.error = e.message || 'Ошибка' }
      this.isLoading = false
    }
  }
})
</script>

<style lang='scss' scoped>
.container {
  max-width: 50%;
  margin: 0 auto $indent-3;
  padding-top: $indent-4;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba($white, 0.9);
  border-radius: inherit;
}

.heading {
  font-size: 5rem;
  font-weight: bold;
  color: $black;
  text-align: center;
  margin-bottom: $indent-2;
}

form {
  border-radius: 1.5rem;
  border: $border;
  background: $white;
  box-shadow: $shadow;
  padding: $indent-3 $indent;
  margin: auto;
  max-width: 60%;
  text-align: center;
  position: relative;

  p {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: $indent-2;
  }
}

.inputs {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: auto;

  :not(:last-child) {
    margin-bottom: 1.5 * $indent;
  }

  .success {
    color: lighten(green, 10%);
  }

  .error {
    color: lighten(red, 25%);
  }
}
</style>
