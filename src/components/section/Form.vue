<template>
<div id='call' class='container'>
  <p class='heading'>
    Если хотите снизить платеж по кредиту - заполните заявку
  </p>

  <form @submit.prevent='send'>
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
    </div>
  </form>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: { Input, Button },

  data () {
    return {
      rate: '',
      name: '',
      phone: ''
    }
  },

  methods: {
    send (): void {
      // console.log(this.rate, this.name, this.phone)
    }
  }
})
</script>

<style lang='scss' scoped>
.container {
  max-width: 50%;
  margin: 0 auto $indent-4;
  padding-top: $indent-4;
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
  background: $white;
  box-shadow: $shadow;
  padding: $indent-3 $indent-2;
  margin: auto;
  max-width: 60%;
  text-align: center;

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
}
</style>
