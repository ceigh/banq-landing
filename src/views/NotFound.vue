<template>
<div class='container'>
  <h1>Страница не найдена.</h1>
</div>
</template>

<style lang='scss' scoped>
.container {
  --padding-v: #{1.4 * $indent-4};
  --padding-h: #{$indent-2};

  padding: var(--padding-v) var(--padding-h);

  @include lg {
    --padding-v: #{1.7 * $indent-4};
  }

  @include md {
    --padding-h: #{$indent};
  }

  @include sm {
    --padding-h: #{$indent-half};
  }
}

h1 {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;

  @include lg {
    font-size: 3rem;
  }

  @include md {
    font-size: 2.5rem;
  }

  @include sm {
    font-size: 1.5rem;
  }
}
</style>
