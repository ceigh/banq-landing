<template>
<header :class='{ active }'>
  <a class='logo' :href='publcPath'>
    <img src='@/assets/img/logo.svg' alt='banq' />
  </a>

  <nav>
    <a href='#usual'>Как делают все</a>
    <a href='#properly'>Как нужно делать</a>
    <a href='#calculator'>Калькулятор</a>
  </nav>

  <div class='actions'>
    <a :href='phoneNumberHref'>{{ phoneNumber }}</a>
    <Button text='перезвоните мне' href='#call' :icon='false' white />
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
    return {
      phoneNumber,
      active: false,
      publcPath: process.env.BASE_URL
    }
  },

  computed: {
    phoneNumberHref (): string {
      return getPhoneNumberHref(this.phoneNumber)
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (): void {
      this.active = window.scrollY > 100
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
  transition: background $duration;
  text-transform: uppercase;
  font-size: 15px;

  &.active {
    background: $white;
  }
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
