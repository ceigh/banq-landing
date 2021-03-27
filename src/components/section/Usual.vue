<template>
<div class='container'>
  <h2>Обычная схема рефинансирования:</h2>

  <div class='steps'>
    <div class='step' v-for='i in 3' :key='i'>
      <div class='step-text'>шаг</div>
      <div class='step-number'>{{ i }}</div>
    </div>
  </div>
</div>
</template>

<style lang='scss' scoped>
$indent-4: 4 * $indent;
$gray: lighten($black, 66%);

.container {
  padding: 0 $indent;
}

h2 {
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  margin: $indent-4 auto;
  max-width: 60%;
}

.steps {
  display: flex;
  justify-content: space-between;
  padding: 0 $indent-4;
}

.step {
  text-align: center;
  flex-basis: 5%;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 500%;
    left: 250%;
    height: 0.1rem;
    background: $gray;
  }

  &-text {
    text-transform: uppercase;
    color: $gray;
    margin-bottom: $indent-half;
  }

  &-number {
    font-size: 5rem;
    color: #13438e;
  }
}
</style>
