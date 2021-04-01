<template>
<div id='calculator' class='container'>
  <div class='content'>
    <div>
      <p class='heading'>Текущие условия</p>

      <div class='row'>
        <div class='switch'>
          <p class='subheading'>Процентная ставка</p>
          <div class='switch-number'>
            <button @click='dec("rate")'>-</button>
            <span class='switch-number-value'>{{ rate }}%</span>
            <button @click='inc("rate")'>+</button>
          </div>
        </div>

        <div class='switch'>
          <p class='subheading'>Ежемесячный платеж</p>
            <span class='switch-number-value'>
              {{ splitNum(payment) }} ₽
            </span>
        </div>
      </div>

      <div class='sum'>
        <p class='subheading'>Сумма кредита</p>
        <div class='switch-number-value'>{{ splitNum(sum) }}</div>
        <input type='range' v-model.number='sum'
          min='10000' max='5000000' step='10000'/>
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
      <div>
        <p class='heading'>Первое рефинансирование</p>
        <div class='row'>
          <div>
            <p class='subheading subheading-emph percents-circle'>
              Снизили ставку
              <span>на {{ downRate1 }}%</span>
            </p>
            <div class='switch-number-value'>
              <span>{{ downedRate1 }}%</span>
              <span class='strike'>{{ rate }}%</span>
            </div>
          </div>
          <div>
            <p class='subheading'>Ежемесячный платеж</p>
            <span class='switch-number-value'>
              {{ splitNum(downedPayment1) }} ₽
            </span>
          </div>
        </div>
      </div>

      <div>
        <p class='heading'>Второе рефинансирование</p>
        <div class='row'>
          <div>
            <p class='subheading subheading-emph percents-circle'>
              Снизили ставку
              <span>на {{ downRate2 }}%</span>
            </p>
            <div class='switch-number-value'>
              <span>{{ downedRate2 }}%</span>
              <span class='strike'>{{ downedRate1 }}%</span>
            </div>
          </div>
          <div>
            <p class='subheading'>Ежемесячный платеж</p>
            <span class='switch-number-value'>
              {{ splitNum(downedPayment2) }} ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='saving'>
    <span class='saving-heading'>
      <AnimatedInt :value='saving' /> ₽
    </span>
    <p class='saving-text'>
      Вот сколько вы сэкономите, если рефинансируете кредит два раза.
      Банки снижают ставку, исходя из существующего процента по
      кредиту, поэтому выгодно рефинансировать кредит несколько раз.
      По закону вы можете рефинансировать кредит без ограничений.
    </p>
  </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import AnimatedInt from '@/components/AnimatedInt.vue'

type Changable = 'rate'
type Limits = Record<Changable, number>

const downRate1 = 3
const downRate2 = 2

const mins: Limits = { rate: 1 + downRate1 + downRate2 }
const steps: Limits = { rate: 1 }
const maxs: Limits = { rate: 99 }

export default defineComponent({
  components: { AnimatedInt },

  data () {
    return {
      rate: 18,
      sum: 1_300_000,
      years: 2,
      downRate1,
      downRate2
    }
  },

  computed: {
    months (): number {
      return 12 * this.years
    },

    payment (): number {
      return this.getPayment(this.rate)
    },

    downedRate1 (): number {
      return this.rate - downRate1
    },
    downedRate2 (): number {
      return this.downedRate1 - downRate2
    },

    downedPayment1 (): number {
      return this.getPayment(this.downedRate1)
    },
    downedPayment2 (): number {
      return this.getPayment(this.downedRate2)
    },

    saving (): number {
      const { months } = this
      return months * (this.payment - this.downedPayment2)
    }
  },

  methods: {
    splitNum (num: number): string {
      return num.toLocaleString('ru-RU')
    },

    dec (key: Changable): void {
      const curr = this[key]
      const upd = curr - steps[key]
      const min = mins[key]
      this[key] = upd < min ? min : upd
    },
    inc (key: Changable): void {
      const curr = this[key]
      const upd = curr + steps[key]
      const max = maxs[key]
      this[key] = upd > max ? max : upd
    },

    // https://journal.tinkoff.ru/guide/credit-payment/#five
    getPayment (rate: number): number {
      const monthRate = rate / 100 / 12
      const x = (1 + monthRate) ** this.months
      const annuity = monthRate * x / (x - 1)
      return Math.round(this.sum * annuity)
    }
  }
})
</script>

<style lang='scss' scoped>
$dark-gray: darken($gray, 33%);

.container {
  margin: 0 auto $indent-3;
  padding-top: $indent-4;
  max-width: 80%;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;

  $padding: $indent-4;

  > :first-child {
    border-right: 0.1rem solid $gray;
    padding-right: $padding;
  }

  > :last-child {
    padding-left: $padding;
  }
}

.result-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .row {
    margin-bottom: 0;
  }
}

.percents-circle {
  position: relative;

  &::before {
    content: '';
    background: url('~@/assets/img/section/usual/circle.svg');
    background-repeat: no-repeat;
    position: absolute;
    width: 4rem;
    height: 2.5rem;
    top: -12px;
    right: 52px;
  }

  span {
    margin-left: 0.5rem;
  }
}

.heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: $indent;
}

.subheading {
  font-size: 0.9rem;
  font-weight: bold;
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

.strike {
  margin-left: $indent-half;
  color: $gray;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 4rem;
    height: 1px;
    background: $gray;
    top: 50%;
    left: -7px;
    transform: translateY(-50%);
  }
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
    padding: 0 0 5px;
    width: $size;
    height: $size;
    background: $white;
    color: $dark-gray;
    font-size: 1/1.5 * $size;
    font-weight: bold;
    border: 1px solid $gray;
    border-radius: 100%;

    &:hover,
    &:focus {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
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
    width: 100%;
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
    display: flex;
    justify-content: space-between;
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

.saving {
  text-align: center;
  font-weight: bold;
  margin-top: $indent-2;

  &-heading {
    font-size: 3rem;
    margin: 0 auto 1.3 * $indent;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      background: url('~@/assets/img/section/calculator/arrow.png');
      height: 4rem;
      width: 7rem;
      background-size: contain;
      background-repeat: no-repeat;
      transform: rotate(130deg);
      position: absolute;
      left: -8.5rem;
      top: 1rem;
    }
  }

  &-text {
    font-size: 1.5rem;
    font-weight: normal;
    margin: auto;
    max-width: 70%;
    line-height: 1.2;
  }
}
</style>
