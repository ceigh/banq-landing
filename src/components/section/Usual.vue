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
      НО! Чтобы получить самую низкую ставку, нужно:
    </p>
    <p class='but-text'>
      Повторить все то же самое через 3-6 месяцев,
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
  padding: $indent-4 $indent 0;
}

h2 {
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto $indent-4;
  max-width: 60%;
}

.steps {
  display: flex;
  justify-content: space-between;
  padding: 0 $indent-4;
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
  @include gap;

  display: flex;
  justify-content: space-between;
  padding: $indent-2 $indent-2 $indent-half;
}

.card {
  background-size: contain;
  background-repeat: no-repeat;
  width: 23rem;
  height: 32rem;

  p {
    line-height: 1.2;
    font-size: 2.5rem;
    font-weight: bold;
    padding: 1.5 * $indent $indent;

    &.text-white {
      color: $white;
    }
  }
}

.but {
  max-width: 50%;
  margin: $indent auto 0;

  &-text {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: $indent;
  }
}
</style>
