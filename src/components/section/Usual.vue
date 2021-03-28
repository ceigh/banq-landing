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
      <p v-if='i === 1'>Связаться с 10+ банками</p>
      <p v-if='i === 2' class='text-white'>Запросить условия</p>
      <p v-if='i === 3'>Выбрать оптимальное предложение</p>
    </div>
  </div>

  <img class='bracket' src='@/assets/img/section/bracket.svg'
    alt='bracket' />

  <div class='but'>
    <p class='but-heading'>
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

export default defineComponent({
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
$gray: lighten($black, 66%);
$blue: #13438e;

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
    background: $gray;
    position: absolute;
    height: 0.1rem;
    width: 550%;
    left: 250%;
    top: 50%;
    transform: translateY(-50%);
  }

  &-text {
    text-transform: uppercase;
    color: $gray;
    margin-bottom: $indent-half;
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

.bracket {
  display: block;
  max-width: 80%;
  margin: auto;
}

.but {
  max-width: 50%;
  margin: $indent auto 0;
  font-weight: bold;
  text-align: center;

  &-heading {
    color: $blue;
    line-height: 1.2;
    font-size: 5rem;
    margin-bottom: $indent;
  }

  &-text {
    font-size: 1.5rem;
  }
}
</style>
