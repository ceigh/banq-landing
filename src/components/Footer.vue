<template>
<div class='container'>
  <div class='col-1'>
    <a class='logo' :href='publicPath'>
      <img src='@/assets/img/logo.svg' alt='banq' />
    </a>

    <p class='desc'>
      Banq - это не банк. Мы ищем рефинансирование по самой низкой
      ставке среди всех предложений на рынке.
    </p>

    <p class='phone'>
      <span>Телефон офиса в Москве</span>
      <a :href='phoneNumberHref'>{{ phoneNumber }}</a>
    </p>
  </div>

  <nav>
    <p>Меню</p>
    <a href='#usual'>Как делают все</a>
    <a href='#properly'>Как нужно делать</a>
    <a href='#calculator'>Калькулятор</a>
    <span>
      ©
      <a :href='publicPath'>banq.ru</a>
      {{ year }}
    </span>
  </nav>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { getPhoneNumberHref } from '@/_'
import { phoneNumber } from '@/const.json'

export default defineComponent({
  data () {
    return {
      phoneNumber,
      year: new Date().getFullYear(),
      publicPath: process.env.BASE_URL
    }
  },

  computed: {
    phoneNumberHref (): string {
      return getPhoneNumberHref(this.phoneNumber)
    }
  }
})
</script>

<style lang='scss' scoped>
$dark-gray: darken($gray, 33%);

.container {
  display: flex;
  justify-content: space-between;
  padding: $indent $indent-2;
}

.logo img {
  width: 8rem;
}

.col-1 {
  @include plain-links;

  .desc {
    margin-top: $indent;
    max-width: 50%;
    line-height: 1.2;
  }

  .phone {
    margin-top: $indent-4;
  }

  span {
    color: $dark-gray;
    margin-right: 1/2 * $indent-half;
  }
}

nav {
  @include plain-links($dark-gray);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 1.2rem;
    font-weight: bold;

    &:first-child {
      margin-top: 0.6rem;
    }
  }

  span {
    @include plain-links;
  }
}
</style>
