<template>
<div class='container'>
  <p class='heading'>
    Если хотите снизить платеж по кредиту - заполните заявку
  </p>

  <form @submit.prevent='send'>
    <p>Укажите ваши данные</p>
    <div class='inputs'>
      <input type='number' min='6' max='99' step='1'
        inputmode='numeric' placeholder='Ставка по кредиту'
        v-model='rate' />

      <input placeholder='Имя' v-model.trim='name' />

      <input type='tel' inputmode='tel' :pattern='phoneRgxp'
        placeholder='Телефон' required v-model.trim='phone' />

      <Button type='submit' text='Отправить заявку' :icon='false' />
    </div>
  </form>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Button
  },

  data () {
    return {
      rate: '',
      name: '',
      phone: '',
      phoneRgxp: '^[0-9() +-]+$'
    }
  },

  methods: {
    send (): void {
      // console.log('send')
    }
  }
})
</script>

<style lang='scss' scoped>
.container {
  max-width: 50%;
  margin: 0 auto $indent-4;
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

  input {
    $border-width: 0.15rem;
    $ok-border: $border-width solid $black;

    border: none;
    border-bottom: $border-width solid $gray;
    padding: 1/1.3 * $indent-half 1.5 * $indent-half;
    font-size: 1.2rem;
    transition: background $duration;

    &:hover {
      background: darken($white, 10%);
    }

    &:focus {
      background: darken($white, 10%);
      outline: none;
      border-bottom: $ok-border;
    }

    &:not(:placeholder-shown) {
      border-bottom: $ok-border;
    }

    &:invalid {
      border-bottom: $border-width solid lighten(red, 25%);
      box-shadow: none;
    }
  }
}
</style>
