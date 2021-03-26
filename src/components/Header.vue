<template>
<header>
  <div class='content'>
    <a href='/'>
      <img src='@/assets/img/logo.svg' alt='banq' />
    </a>

    <nav>
      <a href='#'>Как делают все</a>
      <a href='#'>Как нужно делать</a>
      <a href='#'>Калькулятор</a>
    </nav>

    <div class='actions'>
      <a href='tel:74994992705'>+7 (499) 499-27-05</a>
      <Button>перезвоните мне</Button>
    </div>
  </div>
</header>
</template>

<style lang='scss' scoped>
@mixin gap {
  :not(:last-child) {
    margin-right: var(--half-indent);
  }
}

header {
  --indent: 2rem;
  --half-indent: calc(var(--indent) / 2);

  padding: var(--indent);
}

.content {
  margin: auto;
  max-width: calc(1920px - (var(--indent) * 2));
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav,
.actions {
  @include gap;
}
</style>
