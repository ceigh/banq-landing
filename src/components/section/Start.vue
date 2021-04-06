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

  <div class='columns'>
    <span class='percent'>9%</span>
    <span class='percent'>12%</span>
  </div>
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
$background: #efc1ae;

.container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;

  @include lg {
    --padding-top: #{$indent-4};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: var(--padding-top);
    background: $background;
    max-height: 580px;
    // max-height: calc(150vh - var(--padding-top));
  }

  @include sm {
    --padding-top: #{$indent-3};
  }
}

.content {
  margin: 0 $indent-4 0 $indent-2;
  max-width: 75%;

  @include lg {
    margin: 0 $indent-2;
    background: $background;
    z-index: 1;
  }

  @include md {
    max-width: initial;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.2;
    font-weight: bold;

    @include md {
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

.columns {
  background: url('~@/assets/img/section/start/1.png');
  background-size: cover;
  height: 51rem;
  position: relative;

  @include lg {
    min-height: 220px;
    width: 100%;
    background-position-y: bottom;
  }

  .percent {
    color: $white;
    position: absolute;
    font-size: 5rem;

    @include lg {
      top: unset !important;
      font-size: 3rem;
    }

    @include xs {
      font-size: 2rem;
    }

    &:first-child {
      top: 450px;
      left: 200px;

      @include lg {
        bottom: 30vw;
        left: 22vw;
      }
    }

    &:last-child {
      top: 300px;
      left: 350px;

      @include lg {
        bottom: 50vw;
        left: 39vw;
      }
    }
  }
}
</style>
