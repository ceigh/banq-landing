<template>
<a :href='href' v-if='href'>
  <button>
    {{ text }}
    <span class='material-icons md-18'>north_east</span>
  </button>
</a>

<button v-else>
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
  padding: $indent-half $indent;
  color: $white;
  background: $black;
  transition: background $duration;

  &:hover,
  &:focus {
    background: lighten($black, 33%);
  }

  &:active {
    background: lighten($black, 66%);
  }

  span {
    margin-left: 1/3 * $indent-half;
  }
}
</style>
