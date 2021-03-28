<template>
<div id='properly' class='container'>
  <img class='arrow' src='@/assets/img/section/usual/arrow.svg'
    alt='arrow' />

  <div class='content'>
    <p class='heading'>Поэтому Banq работает так:</p>

    <div class='blocks'>
      <div class='block' v-for='(block, i) in blocks' :key='i'>
        <img :src='require(`@/assets/img/section/properly/${i + 1}.png`)'
           alt='photo' loading='lazy' />

        <div class='block-info'>
          <p class='block-title'>{{ block.title }}</p>
          <p class='block-text'>{{ block.text }}</p>
        </div>
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
      blocks: [
        {
          title: 'Мы свяжемся с 20+ банками',
          text: `Ваши условия по кредиту будут отправлены в ведущие
          банки без раскрытия контактных данных,
          чтобы вас не мучили звонками.`
        },
        {
          title: 'Найдем подходящие банки',
          text: `Вы получите точные условия с предодобрением от
          банков, которые готовы рефинансировать кредит.`
        },
        {
          title: `Вам останется прийти в банк и
          получить рефинансирование`,
          text: 'Да, все так просто и удобно.'
        },
        {
          title: 'Продолжим искать еще более выгодный вариант',
          text: `Мы снова отправим запросы на рефинансирование через
          определенное время, чтобы вы могли повторно снизить ставку.`
        }
      ]
    }
  }
})
</script>

<style lang='scss' scoped>
.container {
  position: relative;
  margin-top: $indent-half;
  padding-top: $indent-2;
}

.arrow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: $indent-3;
  // to contrast on content bg
  mix-blend-mode: difference;
  filter: invert(100%);
}

.content {
  background: #0d0e2c;
  padding: $indent-3 $indent-2 0;
}

.heading {
  font-size: 5rem;
  line-height: 1.2;
  font-weight: bold;
  color: darken($white, 33%);
  margin-bottom: $indent-3;
}

.block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  height: 150vh;

  &:not(:last-child) {
    margin-bottom: 6 * $indent;
  }

  $img-height: 35rem;

  img {
    height: $img-height;
    position: sticky;
    top: 5.5 * $indent;
  }

  &-info {
    color: $white;
    position: sticky;
    top: 1/2 * $img-height;
    margin-bottom: $indent-3;
  }

  &-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: $indent;
  }

  &-text {
    font-size: 1.5rem;
  }
}
</style>
