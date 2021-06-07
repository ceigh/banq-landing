<template>
<div class='container'>
  <div class='col-1'>
    <router-link class='logo' to='/'>
      <img src='@/assets/img/logo.svg' alt='banq' />
    </router-link>

    <p class='desc'>
      Banq - это не банк. Мы ищем рефинансирование по самой низкой
      ставке среди всех предложений на рынке.
    </p>

    <p class='links'>
      <span>
        Телефон
        <span class='office'>
          офиса в Москве
        </span>
      </span>
      <a :href='phoneNumberHref'>{{ phoneNumber }}</a>

      <router-link class='privacy' to='/privacy'>
        Политика обработки данных
      </router-link>
    </p>
  </div>

  <nav>
    <div class='menu' v-if='$route.name === "home"'>
      <p>Меню</p>
      <span class='link nav-item' v-scroll-to='"#usual"'>
        Как делают все
        <span class='material-icons md-15'>navigate_next</span>
      </span>
      <span class='link nav-item' v-scroll-to='"#properly"'>
        Как нужно делать
        <span class='material-icons md-15'>navigate_next</span>
      </span>
      <span class='link nav-item' v-scroll-to='"#calculator"'>
        Калькулятор
        <span class='material-icons md-15'>navigate_next</span>
      </span>
    </div>

    <span>
      ©
      <router-link to='/'>banq-finance.ru</router-link>
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
      year: new Date().getFullYear()
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

  .links {
    --margin-top: #{$indent-4};

    margin-top: var(--margin-top);

    @include lg {
      --margin-top: #{$indent-half};

      font-size: 0.8rem;
      text-align: center;
    }

    .office {
      @include lg {
        display: none;
      }
    }

    .privacy {
      @include lg {
        display: block;
        margin-top: var(--margin-top);
      }
    }

    :not(:last-child) {
      margin-right: 1/2 * $indent-half;
    }
  }

  span {
    color: $dark-gray;
  }
}

@mixin col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

nav {
  @include plain-links($dark-gray);
  @include col;

  @include lg {
    margin-top: $indent;
  }

  .menu {
    @include col;

    min-height: 70%;
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
