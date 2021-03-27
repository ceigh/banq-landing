<template>
<div class='container'>
  <div class='content'>
    <h1>Рефинансирование кредитов, выгодное вам, а не банкам</h1>
    <p>
      Banq - это сервис, который бесплатно берет на себя все:
      от анализа вашей ситуации до общения с банками. Вы получаете
      лучшие условия в кратчайшие сроки.
    </p>
    <Button text='Узнать подробнее'/>
  </div>

  <div class='columns'>
    <span class='percent'>9%</span>
    <span class='percent'>12%</span>
  </div>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Button
  }
})
</script>

<style lang='scss' scoped>
.container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
}

.content {
  color: $black;
  margin: 0 $indent;
  max-width: 80%;

  h1 {
    font-size: 65px;
    line-height: 1.2;
    font-weight: bold;
  }

  p {
    font-size: 24px;
    margin: $indent 0;
  }
}

.columns {
  background: url('~@/assets/img/section/start/1.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 45rem;
  position: relative;

  .percent {
    color: $white;
    position: absolute;
    font-size: 5rem;

    &:first-child {
      top: 400px;
      left: 170px;
    }

    &:last-child {
      top: 250px;
      left: 300px;
    }
  }
}
</style>
