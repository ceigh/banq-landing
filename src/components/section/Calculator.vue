<template>
<div id='calculator' class='container'>
  <div class='current'>
    <p class='heading'>Текущие условия</p>

    <div class='row'>
      <div class='switch'>
        <p class='subheading'>Процентная ставка</p>
        <div class='switch-number'>
          <button><span>-</span></button>
          <span class='switch-number-value'>{{ rate }} %</span>
          <button><span>+</span></button>
        </div>
      </div>

      <div class='switch'>
        <p class='subheading'>Ежемесячный платеж</p>
        <div class='switch-number'>
          <button><span>-</span></button>
          <span class='switch-number-value'>{{ paymentSplitted }} ₽</span>
          <button><span>+</span></button>
        </div>
      </div>
    </div>
  </div>

  <div class='result'>
    <p class='heading'>Первое рефинансирование</p>
    <div class='row'></div>
    <p class='heading'>Второе рефинансирование</p>
    <div class='row'></div>
  </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      rate: 18,
      payment: 62000
    }
  },

  computed: {
    paymentSplitted (): string {
      return this.payment.toLocaleString('ru-RU')
    }
  }
})
</script>

<style lang='scss' scoped>
.container {
  padding: $indent-2 $indent-4 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: $indent;
}

.subheading {
  font-size: 0.9rem;
  color: $gray;
  margin-bottom: $indent-half;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.switch {
  &-number {
    display: flex;
    align-items: center;

    &-value {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 1/1.5 * $indent-half;
    }
  }

  button {
    $size: 1.5rem;

    cursor: pointer;
    padding: 0;
    width: $size;
    height: $size;
    background: $white;
    color: darken($gray, 33%);
    font-size: 1/1.5 * $size;
    font-weight: bold;
    border: 0.1rem solid $gray;
    border-radius: 100%;

    &:hover,
    &:focus {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
    }

    span {
      display: block;
      height: inherit;
      text-align: center;
    }
  }
}
</style>
