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
          <span class='switch-number-value'>
            {{ splitNum(payment) }} ₽
          </span>
          <button><span>+</span></button>
        </div>
      </div>
    </div>

    <div class='sum'>
      <p class='subheading'>Сумма кредита</p>
      <div class='switch-number-value'>{{ splitNum(sum) }}</div>
      <input type='range' v-model.number='sum'
        min='100000' max='10000000' step='100000'/>
    </div>

    <div>
      <p class='subheading'>Срок кредита</p>
      <div class='years-container'>
        <div class='years' :class='{ "years-active": years === i }'
          v-for='i in 5' :key='i' @click='years = i'>
          <span>
            {{ i }}
            <span v-if='i === 1'>год</span>
            <span v-else-if='i < 5'>года</span>
            <span v-else>лет</span>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div class='result-col'>
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
        <span class='switch-number-value'>
          {{ splitNum(firstPayment) }} ₽
        </span>
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
        <span class='switch-number-value'>
          {{ splitNum(secondPayment) }} ₽
        </span>
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
      payment: 62000,
      sum: 1_300_000,
      years: 2
    }
  },

  methods: {
    splitNum (num: number): string {
      return num.toLocaleString('ru-RU')
    }
  }
})
</script>

<style lang='scss' scoped>
$dark-gray: darken($gray, 33%);

.container {
  margin: $indent-2 auto 0;
  max-width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  > :first-child {
    border-right: 0.1rem solid $gray;
  }
}

.result-col {
  text-align: right;
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
  margin-bottom: $indent;
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
    color: $dark-gray;
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

.sum {
  margin-bottom: $indent;

  input {
    margin-top: $indent-half;
    margin-bottom: 0;
    width: 80%;
  }
}

$light-gray: lighten($gray, 25%);

.years {
  background: $light-gray;
  color: $dark-gray;
  cursor: pointer;
  padding: $indent-half;
  border-radius: 2rem;
  min-width: 3rem;
  text-align: center;
  font-weight: bold;
  transition: background $duration;

  &-container {
    @include gap($indent-half);

    display: flex;
  }

  &:hover,
  &:focus {
    background: darken($light-gray, 10%);
  }

  &-active {
    background: $black;
    color: $white;

    &:hover,
    &:focus {
      background: $black;
    }
  }
}
</style>
