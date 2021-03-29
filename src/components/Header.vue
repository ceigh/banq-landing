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
    <Button text='перезвоните мне' @click='callMeBack' />
  </div>
</header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Button from './Button.vue'

export default defineComponent({
  components: {
    Button
  },

  data () {
    return {
      phoneNumber: '+7 (499) 499-27-05'
    }
  },

  computed: {
    phoneNumberHref (): string {
      return `tel:${this.phoneNumber.replace(/[^0-9]/g, '')}`
    }
  },

  methods: {
    callMeBack (): void {
      // console.log('callMeBack')
    }
  }
})
</script>

<style lang='scss' scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1/1.5 * $indent $indent-2;
  z-index: 1;
  background: $white;
  box-shadow: 0 1rem 4rem rgba($black, 0.1);
  border-bottom: 0.1rem solid $black;
}

.logo img {
  width: 10rem;
}

nav,
.actions {
  @include gap;

  a {
    text-decoration: none;
    color: $black;

    &:hover,
    &:focus {
      color: lighten($black, 33%);
    }

    &:active {
      color: lighten($black, 66%);
    }
  }
}
</style>
