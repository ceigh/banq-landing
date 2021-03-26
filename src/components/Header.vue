<template>
<header>
  <div class='content'>
    <a href='/'>
      <img src='@/assets/img/logo.svg' alt='banq' />
    </a>

    <nav>
      <a href='#'>Как делают все</a>
      <a href='#'>Как нужно делать</a>
      <a href='#'>Калькулятор</a>
    </nav>

    <div class='actions'>
      <a :href='phoneNumberHref'>{{ phoneNumber }}</a>
      <Button>перезвоните мне</Button>
    </div>
  </div>
</header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      phoneNumber: '+7 (499) 499-27-05'
    }
  },

  computed: {
    phoneNumberHref (): string {
      return `tel:${this.phoneNumber.replace(/[^0-9]/g, '')}`
    }
  }
})
</script>

<style lang='scss' scoped>
header {
  --indent: #{$indent};
  --half-indent: calc(var(--indent) / 2);

  padding: var(--indent);
}

.content {
  margin: auto;
  max-width: calc(#{$xl} - (var(--indent) * 2));
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav,
.actions {
  :not(:last-child) {
    margin-right: var(--half-indent);
  }

  a {
    color: black;
    text-decoration: none;

    &:hover,
    &:focus {
      color: tint(black);
    }

    &:active {
      color: tint(black, 66%);
    }
  }
}
</style>
