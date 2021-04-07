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

  <p class='blue-heading'>
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
          title: 'Найдем подходящие условия',
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
  --padding-top: #{$indent-2};

  position: relative;
  margin-top: $indent;
  padding-top: var(--padding-top);

  @include lg {
    --padding-top: #{$indent};
  }

  .blue-heading {
    margin-left: 27rem;
    max-width: 60%;

    @include lg {
      margin-left: 10rem;
      max-width: 70%;
    }

    @include sm {
      max-width: 90%;
      margin-left: 4rem;
    }

    @include xs {
      margin-left: 3rem;
    }
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

  @include lg {
    width: 4rem;
  }
}

.content {
  --padding-h: #{$indent-2};
  --padding-top: #{$indent-3};
  --padding-bottom: 0;

  background: #0d0e2c;
  padding: var(--padding-top) var(--padding-h) var(--padding-bottom);

  @include lg {
    --padding-h: #{$indent};
    --padding-top: #{$indent};
    --padding-bottom: #{$indent};
  }

  @include sm {
    --padding-h: #{$indent-half};
  }
}

.heading {
  font-size: 5rem;
  line-height: 1.2;
  font-weight: bold;
  color: $gray;
  margin-bottom: $indent-3;
  max-width: 50%;

  @include lg {
    font-size: 2rem;
    text-align: center;
    max-width: initial;
    margin-bottom: $indent;
  }
}

.block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  height: 150vh;

  @include lg {
    height: auto;
    display: block;
  }

  &:not(:last-child) {
    margin-bottom: 6 * $indent;

    @include lg {
      margin-bottom: $indent-2;
    }
  }

  $top: 22%;

  img {
    height: 70vh;
    max-height: 50rem;
    position: sticky;
    top: $top;

    @include lg {
      height: auto;
      width: 100%;
      position: initial;
      object-fit: contain;
    }
  }

  &-info {
    color: $white;
    position: sticky;
    top: $top;
    margin-bottom: $indent-3;

    @include lg {
      position: initial;
      margin-bottom: $indent;
    }

    @include md {
      text-align: center;
    }
  }

  &-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: $indent;

    @include lg {
      font-size: 1.5rem;
      margin-top: $indent;
    }
  }

  &-text {
    font-size: 1.5rem;
    font-family: SFUIDisplay-Medium, sans-serif;

    @include lg {
      font-size: 1rem;
      margin-top: $indent;
    }
  }

  &-subtext {
    font-size: 1rem;
    font-family: SFUIDisplay-Medium, sans-serif;
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

      @include lg {
        top: -26px;
        height: 1.5rem;
      }
    }
  }
}

.progress {
  --percent: 0%;

  height: 0.5rem;
  background: darken($gray, 33%);
  margin-bottom: $indent;

  @include lg {
    display: none;
  }

  &::after {
    content: '';
    display: block;
    background: lighten($gray, 33%);
    height: inherit;
    width: var(--percent);
  }
}
</style>
