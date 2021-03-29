<template>
<div id='calculator' class='container'>
  <div>
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

  <div>
    <p class='heading'>Первое рефинансирование</p>
    <div class='row'>
      <div>
        <p class='subheading subheading-emph'>Снизили ставку на 3 %</p>
        <div class='switch-number-value'>
          <span>7%</span>
          <strike>10%</strike>
        </div>
      </div>
      <div>
        <p class='subheading'>Ежемесячный платеж</p>
        <span class='switch-number-value'>{{ paymentSplitted }} ₽</span>
      </div>
    </div>

    <p class='heading'>Второе рефинансирование</p>
    <div class='row'>
      <div>
        <p class='subheading subheading-emph'>Снизили ставку на 2 %</p>
        <div class='switch-number-value'>
          <span>7%</span>
          <strike>10%</strike>
        </div>
      </div>
      <div>
        <p class='subheading'>Ежемесячный платеж</p>
        <span class='switch-number-value'>{{ paymentSplitted }} ₽</span>
      </div>
    </div>
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
  gap: $indent-3;

  > :first-child {
    border-right: 0.1rem solid $gray;
  }
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

  &-emph {
    color: $black;
    font-weight: bold;
  }
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: $indent-2;
}

strike {
  margin-left: $indent-half;
}

.switch {
  &-number {
    display: flex;
    align-items: center;

    &-value {
      font-size: 1.5rem;
      font-weight: bold;
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

    $margin: 1/1.5 * $indent-half;

    &:first-child {
      margin-right: $margin;
    }

    &:last-child {
      margin-left: $margin;
    }
  }
}
</style>
