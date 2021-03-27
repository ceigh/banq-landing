<template>
<div class='container'>
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
$indent-4: 4 * $indent;
$gray: lighten($black, 66%);

.container {
  padding: 0 $indent;
}

h2 {
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  margin: $indent-4 auto;
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
    color: #13438e;
  }
}

.cards {
  @include gap;

  display: flex;
  justify-content: space-between;
  padding: 2 * $indent;
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
</style>
