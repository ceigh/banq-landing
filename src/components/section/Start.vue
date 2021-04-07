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

  <img src='@/assets/img/section/start/columns.png' alt='columns' />
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
  grid-template-columns: 1.7fr 1fr;
  align-items: center;

  @include lg {
    --padding-top: #{$indent-4};
    --padding-h: #{$indent-2};
    --height: 120vh;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-top) var(--padding-h) 0;
    height: calc(var(--height) - var(--padding-top));
    background: url('~@/assets/img/section/start/columns.png');
    background-size: cover;
    background-position-y: bottom;
    min-height: 1360px;
    max-height: 2650px;
  }

  @include md {
    --padding-top: #{$indent-3};
    --padding-h: #{$indent};

    min-height: 970px;
    max-height: 1600px;
  }

  @include sm {
    --padding-top: #{1.2 * $indent-3};
    --padding-h: #{$indent-half};
    --height: 105vh;

    justify-content: flex-start;
    min-height: 640px;
    max-height: 800px;
  }

  @include xs {
    --height: 130vh;

    max-height: 680px;
  }
}

.content {
  margin: 0 $indent-4 0 $indent-2;
  max-width: 75%;

  @include lg {
    margin: 0;
    max-width: 100%;
  }

  @include md {
    max-width: 80%;
  }

  @include sm {
    max-width: 90%;
  }

  @include xs {
    max-width: 100%;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.2;

    @include md {
      font-size: 3rem;
    }

    @include sm {
      font-size: 2.1rem;
    }

    @include xs {
      font-size: 1.9rem;
    }
  }

  p {
    --margin-v: #{$indent};

    font-family: SFUIDisplay-Medium, sans-serif;
    font-size: 1.5rem;
    margin: var(--margin-v) 0;
    color: $light-black;

    @include sm {
      --margin-v: #{$indent-half};

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
  object-position: bottom;

  @include lg {
    display: none;
  }
}
</style>
