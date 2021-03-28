<template>
<div class='container'>
  <img class='arrow' src='@/assets/img/section/usual/arrow.svg'
    alt='arrow' />

  <div class='content'>
  </div>
</div>
</template>

<style lang='scss' scoped>
.container {
  position: relative;
  margin-top: $indent-half;
  padding-top: 2 * $indent;
}

.arrow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3 * $indent;
}

.content {
  background: blue;
  height: 5rem;
}
</style>
