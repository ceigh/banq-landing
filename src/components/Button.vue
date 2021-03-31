<template>
<a :href='href' v-if='href'>
  <button :class='{ white }'>
    {{ text }}
    <span class='material-icons md-18'>north_east</span>
  </button>
</a>

<button :class='{ white }' v-else>
  {{ text }}
  <span v-if='icon' class='material-icons md-18'>north_east</span>
</button>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    text: {
      required: true,
      type: String as PropType<string>
    },
    href: {
      type: String as PropType<string>,
      default: ''
    },
    icon: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    white: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  }
})
</script>

<style lang='scss' scoped>
a {
  text-decoration: none;
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0;
  border-radius: 0.7rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 $indent;
  height: 60px;
  color: $white;
  background: $black;
  transition: 0.5s ease;

  &:hover {
    background: lighten($black, 33%);
  }

  span {
    margin-left: 1/3 * $indent-half;
  }

  &.white {
    color: $black;
    background: $white;
    border: 1px solid $black;

    &:hover {
      color: $white;
      background: $black;
    }
  }
}
</style>
