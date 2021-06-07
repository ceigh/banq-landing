<template>
<header :class='{ active }'>
  <router-link class='logo' to='/'>
    <img src='@/assets/img/logo.svg' alt='banq' />
  </router-link>

  <nav>
    <a href='#usual'>Как делают все</a>
    <a href='#properly'>Как нужно делать</a>
    <a href='#calculator'>Калькулятор</a>
  </nav>

  <div class='actions'>
    <a class='phone-number'
      :href='phoneNumberHref'>{{ phoneNumber }}</a>
    <a class='phone-icon' :class='{ active }'
      :href='phoneNumberHref'>
      <span class='material-icons'>phone</span>
    </a>
    <Button class='button' text='перезвоните мне' href='#call'
      :icon='false' white :border='active' />
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
      active: false
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
      this.active = window.scrollY > 50
    }
  }
})
</script>

<style lang='scss' scoped>
header {
  --padding: #{$indent-2};

  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);
  height: 70px;
  width: calc(100vw - 2 * var(--padding));
  max-width: calc(#{$xl} - 4 * var(--padding));
  z-index: 2;
  transition: background $duration;
  text-transform: uppercase;
  font-size: 15px;
  font-family: SFUIDisplay-Medium, sans-serif;
  white-space: nowrap;

  @include lg {
    --padding: #{$indent};

    padding: $indent-half / 2 var(--padding);
    height: calc(70px - #{$indent-half});
  }

  @include sm {
    --padding: #{$indent-half};

    height: 50px;
  }

  &.active {
    background: $white;
  }
}

.logo img {
  width: 8rem;

  @include sm {
    width: 7rem;
    margin-right: $indent-half / 2;
  }
}

nav,
.actions {
  @include gap;
  @include plain-links;
}

nav {
  @include lg {
    display: none;
  }
}

.actions {
  @include sm {
    font-size: 0.7rem;
  }

  .phone-number,
  .button {
    @include sm {
      display: none;
    }
  }

  .phone-icon {
    display: none;
    background: $white;
    border-radius: 100%;
    margin: 0;
    height: 2rem;
    width: 2rem;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;

    span {
      font-size: 1.2rem;
    }

    @include sm {
      display: flex;
    }

    &.active {
      border: 1px solid $black;
    }
  }
}
</style>
