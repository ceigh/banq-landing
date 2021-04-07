<template>
<div class='container'>
  <div class='content'>
    <h1>Рефинансирование кредитов, выгодное вам, а не банкам</h1>
    <p>
      Banq - это сервис, который бесплатно берет на себя все:
      от анализа вашей ситуации до общения с банками.
      <br />
      Вы получаете лучшие условия в кратчайшие сроки.
    </p>
    <Button text='подробнее' href='#usual' big />
  </div>

  <img src='@/assets/img/section/start/2.png' alt='columns' />
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: { Button }
})
</script>

<style lang='scss' scoped>
.container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;

  @include lg {
    --padding-top: #{$indent-2};

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - var(--padding-top));
    overflow: hidden;
    padding-top: var(--padding-top);
  }

  @include md {
    --padding-top: #{$indent-4};

    justify-content: space-between;
  }

  @include sm {
    --padding-top: #{$indent-3};
  }
}

.content {
  margin: 0 $indent-4 0 $indent-2;
  max-width: 75%;

  @include lg {
    margin: 0;
    z-index: 1;
  }

  @include md {
    max-width: initial;
  }

  h1,
  p {
    @include lg {
      padding: 0 $indent-half;
    }
  }

  h1 {
    font-size: 4rem;
    line-height: 1.2;
    font-weight: bold;

    @include md {
      font-size: 3rem;
    }

    @include sm {
      font-size: 2rem;
    }
  }

  p {
    --margin: #{$indent};

    font-family: SFUIDisplay-Medium, sans-serif;
    font-size: 1.5rem;
    margin: var(--margin) 0;
    color: $light-black;

    @include sm {
      --margin: #{$indent-half};

      font-size: 1rem;
    }
  }

  a {
    @include lg {
      display: none;
    }
  }
}

img {
  min-height: 670px;
  height: 100vh;
  max-height: 1024px;
  width: 100%;
  object-fit: cover;
  object-position: left;

  @include lg {
    display: none;
  }
}
</style>
