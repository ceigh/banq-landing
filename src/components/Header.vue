<template>
<header>
  <a class='logo' href='/'>
    <img src='@/assets/img/logo.svg' alt='banq' />
  </a>

  <nav>
    <a href='#usual'>Как делают все</a>
    <a href='#properly'>Как нужно делать</a>
    <a href='#calculator'>Калькулятор</a>
  </nav>

  <div class='actions'>
    <a :href='phoneNumberHref'>{{ phoneNumber }}</a>
    <Button text='перезвоните мне' href='#call' white />
  </div>
</header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Button from './Button.vue'
import { getPhoneNumberHref } from '@/_'
import { phoneNumber } from '@/const.json'

export default defineComponent({
  components: { Button },

  data () {
    return { phoneNumber }
  },

  computed: {
    phoneNumberHref (): string {
      return getPhoneNumberHref(this.phoneNumber)
    }
  }
})
</script>

<style lang='scss' scoped>
header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 $indent-2;
  height: 70px;
  width: calc(100% - #{2 * $indent-2});
  max-width: calc(#{$xl} - #{2 * $indent-4});
  z-index: 1;
}

.logo img {
  width: 8rem;
}

nav,
.actions {
  @include gap;
  @include plain-links;
}
</style>
