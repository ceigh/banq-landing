<template>
<div class='container'>
  <div class='col-1'>
    <a class='logo' :href='publicPath'>
      <img src='@/assets/img/logo.svg' alt='banq' />
    </a>

    <p class='desc'>
      Banq - это не банк. Мы ищем рефинансирование по самой низкой
      ставке среди всех предложений на рынке.
    </p>

    <p class='phone'>
      <span>
        Телефон
        <span class='office'>
          офиса в Москве
        </span>
      </span>
      <a :href='phoneNumberHref'>{{ phoneNumber }}</a>
    </p>
  </div>

  <nav>
    <p>Меню</p>
    <a class='nav-item' href='#usual'>
      Как делают все
      <span class='material-icons md-15'>navigate_next</span>
    </a>
    <a class='nav-item' href='#properly'>
      Как нужно делать
      <span class='material-icons md-15'>navigate_next</span>
    </a>
    <a class='nav-item' href='#calculator'>
      Калькулятор
      <span class='material-icons md-15'>navigate_next</span>
    </a>
    <span>
      ©
      <a :href='publicPath'>banq-finance.ru</a>
      {{ year }}
    </span>
  </nav>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { getPhoneNumberHref } from '@/_'
import { phoneNumber } from '@/const.json'

export default defineComponent({
  data () {
    return {
      phoneNumber,
      year: new Date().getFullYear(),
      publicPath: process.env.BASE_URL
    }
  },

  computed: {
    phoneNumberHref (): string {
      return getPhoneNumberHref(this.phoneNumber)
    }
  }
})
</script>

<style lang='scss' scoped>
$dark-gray: darken($gray, 33%);

.container {
  display: flex;
  justify-content: space-between;
  padding: $indent $indent-2;

  @include lg {
    padding: $indent $indent-half;
    flex-direction: column;
  }
}

.logo {
  width: 8rem;
  display: block;

  @include lg {
    width: 7rem;
    margin: 0 auto;
  }

  img {
    width: inherit;
  }
}

.col-1 {
  @include plain-links;

  .desc {
    margin-top: $indent;
    max-width: 50%;
    line-height: 1.2;

    @include lg {
      max-width: initial;
      margin-top: $indent-half;
      font-size: 0.8rem;
      text-align: center;
    }
  }

  .phone {
    margin-top: $indent-4;

    @include lg {
      margin-top: $indent-half;
      font-size: 0.8rem;
      text-align: center;
    }

    .office {
      @include lg {
        display: none;
      }
    }
  }

  span {
    color: $dark-gray;
    margin-right: 1/2 * $indent-half;
  }
}

nav {
  @include plain-links($dark-gray);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include lg {
    margin-top: $indent;
  }

  $border: 1px solid lighten($gray, 20%);

  .nav-item {
    @include lg {
      padding: $indent-half 0;
      border-top: $border;
      font-size: 0.9rem;
      display: flex;
      justify-content: space-between;
    }

    &:last-of-type {
      @include lg {
        border-bottom: $border;
        margin-bottom: $indent;
      }
    }

    .material-icons {
      display: none;

      @include lg {
        display: initial;
      }
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;

    &:first-child {
      margin-top: 0.6rem;

      @include lg {
        display: none;
      }
    }
  }

  span {
    @include plain-links;

    @include lg {
      text-align: center;
    }
  }
}
</style>
