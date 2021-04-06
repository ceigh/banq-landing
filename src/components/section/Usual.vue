<template>
<div id='usual' class='container'>
  <h2>Обычная схема рефинансирования:</h2>

  <div class='steps'>
    <div class='step' v-for='i in 3' :key='i'>
      <div class='step-text'>шаг</div>
      <div class='step-number'>{{ i }}</div>
    </div>
  </div>

  <div class='cards'>
    <div class='card' v-for='i in 3' :key='i'
      :style='getCardBgStyle(i)'>
      <p v-if='i === 1'>Связаться с банками</p>
      <p v-if='i === 2' class='text-white'>Запросить условия</p>
      <p v-if='i === 3'>Выбрать предложение</p>
    </div>
  </div>

  <Bracket />

  <div class='but'>
    <p class='blue-heading'>
      НО! Чтобы получить самую низкую ставку нужно:
    </p>
    <p class='but-text'>
      <span class='but-circle'>Повторить</span>
      все то же самое через 3-6 месяцев,
      чтобы еще раз снизить ставку по кредиту.
    </p>
  </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Bracket from './Bracket.vue'

export default defineComponent({
  components: { Bracket },

  methods: {
    getCardBgStyle (i: number): string {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const imgPath = require(`@/assets/img/section/usual/card${i}.png`)
      return `background-image: url('${imgPath}')`
    }
  }
})
</script>

<style lang='scss' scoped>
.container {
  --padding-h: #{$indent};
  --padding-top: #{$indent-4};

  padding: var(--padding-top) var(--padding-h) 0;

  @include lg {
    --padding-top: #{$indent-2};
  }

  @include sm {
    --padding-h: #{$indent-half};
  }
}

h2 {
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto $indent-4;
  max-width: 60%;

  @include lg {
    font-size: 2rem;
    line-height: 1;
    margin: 0;
    max-width: initial;
  }
}

.steps {
  display: flex;
  justify-content: space-between;
  padding: 0 $indent-4;

  @include lg {
    display: none;
  }
}

.step {
  text-align: center;
  flex-basis: 5%;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    border-bottom: 1px solid $gray;
    position: absolute;
    width: 550%;
    left: 250%;
    top: 50%;
    transform: translateY(-50%);
  }

  &-text {
    $spacing: 0.3rem;

    letter-spacing: $spacing;
    margin-right: - $spacing;
    margin-bottom: $indent-half;
    text-transform: uppercase;
    color: $gray;
  }

  &-number {
    font-size: 5rem;
    color: $blue;
  }
}

.cards {
  --padding-top: #{$indent-2};
  --padding-h: #{$indent-2};
  --padding-bottom: #{$indent-half};

  display: flex;
  justify-content: space-between;
  padding: var(--padding-top) var(--padding-h) var(--padding-bottom);

  @include gap($indent-2);

  @include lg {
    --padding-top: #{$indent};
    --padding-h: 0;
    --padding-bottom: 0;

    overflow-x: auto;
  }
}

.card {
  background-size: contain;
  background-repeat: no-repeat;
  width: 23rem;
  height: 32rem;

  @include lg {
    height: 20rem;
    flex: 0 0 15rem;
  }

  p {
    --padding-v: #{1.5 * $indent};

    line-height: 1.2;
    font-size: 2.2rem;
    font-weight: bold;
    padding: var(--padding-v) $indent;

    @include lg {
      --padding-v: #{$indent};

      font-size: 1.5rem;
    }

    &.text-white {
      color: $white;
    }
  }
}

.but {
  max-width: 70%;
  margin: 0 auto;

  @include lg {
    max-width: 90%;
  }

  &-text {
    font-size: 1.5rem;
    font-family: SFUIDisplay-Medium, sans-serif;
    margin: $indent 1rem 0 9rem;
    line-height: 1.7;
    color: $light-black;

    @include lg {
      font-size: 1rem;
      margin-left: 3rem;
    }

    @include xs {
      margin-left: 2rem;
    }
  }

  &-circle {
    position: relative;
    margin-right: 0.5rem;

    &::before {
      content: '';
      background: url('~@/assets/img/section/usual/circle.svg');
      background-repeat: no-repeat;
      position: absolute;
      width: 9rem;
      height: 4.5rem;
      top: -23px;
      left: -8px;

      @include lg {
        width: 6rem;
        top: -14px;
        left: -7px;
      }
    }
  }
}
</style>
