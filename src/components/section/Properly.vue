<template>
<div id='properly' class='container'>
  <img class='arrow' src='@/assets/img/section/usual/arrow.svg'
    alt='arrow' />

  <div class='content'>
    <p class='heading'>Поэтому Banq работает так:</p>

    <div class='blocks'>
      <div class='block' v-for='(block, i) in blocks' :key='i'
        :ref='`block-${i}`'>
        <img :src='require(`@/assets/img/section/properly/${i + 1}.png`)'
          alt='photo' loading='lazy' />

        <div class='block-info'>
          <div class='progress' />
          <p class='block-title'>{{ block.title }}</p>
          <p class='block-text'>{{ block.text }}</p>
          <p v-if='block.subtext' class='block-subtext'>
            {{ block.subtext }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <Bracket />

  <p class='blue-heading rate'>
    Вы получаете самую низкую ставку из всех возможных
  </p>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Bracket from './Bracket.vue'

const blocks: HTMLElement[] = []
const progresses: HTMLElement[] = []

function updateProgress (): void {
  const multiplier = 1.5 // to speed up progress
  blocks.forEach((b, i) => {
    const { top, height } = b.getBoundingClientRect()
    let percent = -100 * multiplier * top / height
    if (percent < 0) percent = 0
    else if (percent > 100) percent = 100
    progresses[i].setAttribute('style', `--percent: ${percent}%`)
  })
}

export default defineComponent({
  components: { Bracket },

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
          text: `Мы будем регулярно отправлять запросы на
          рефинансирование в банки, чтобы вы могли
          повторно снизить ставку.`,
          subtext: 'Это самое главное'
        }
      ]
    }
  },

  mounted () {
    type Refs = Record<string, HTMLElement>
    for (const [k, v] of Object.entries(this.$refs as Refs)) {
      if (!/^block-\d$/.test(k)) return
      blocks.push(v)
      progresses.push(v.querySelector('.progress') as HTMLElement)
    }
    document.addEventListener('scroll', updateProgress)
  },
  unmounted () {
    document.removeEventListener('scroll', updateProgress)
  }
})
</script>

<style lang='scss' scoped>
.container {
  position: relative;
  margin-top: $indent;
  padding-top: $indent-2;

  .blue-heading {
    margin-left: 28rem;
    max-width: 60%;
  }
}

.arrow {
  position: absolute;
  // to contrast on content bg
  mix-blend-mode: difference;
  filter: invert(100%);
  top: -12px;
  left: 40%;
  width: 8rem;
}

.content {
  background: #0d0e2c;
  padding: $indent-3 $indent-2 0;
}

.heading {
  font-size: 5rem;
  line-height: 1.2;
  font-weight: bold;
  color: $gray;
  margin-bottom: $indent-3;
  max-width: 50%;
}

.block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  height: 150vh;

  &:not(:last-child) {
    margin-bottom: 6 * $indent;
  }

  $top: 22%;

  img {
    height: 70vh;
    max-height: 50rem;
    position: sticky;
    top: $top;
  }

  &-info {
    color: $white;
    position: sticky;
    top: $top;
    margin-bottom: $indent-3;
  }

  &-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: $indent;
  }

  &-text {
    font-size: 1.5rem;
  }

  &-subtext {
    font-size: 1rem;
    margin-top: $indent;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      width: 4rem;
      height: 2rem;
      background: url('~@/assets/img/section/properly/arrow.svg');
      background-repeat: no-repeat;
      background-size: contain;
      top: -28px;
      right: -85px;
      transform: rotate(-70deg);
    }
  }
}

.progress {
  --percent: 0%;

  height: 0.5rem;
  background: darken($gray, 33%);
  margin-bottom: $indent;

  &::after {
    content: '';
    display: block;
    background: lighten($gray, 33%);
    height: inherit;
    width: var(--percent);
  }
}

.rate {
  max-width: 40%;
  margin-left: auto;
  margin-right: auto;
}
</style>
