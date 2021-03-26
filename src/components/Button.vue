<template>
<button>
  {{ text }}
  <span class='material-icons md-18'>north_east</span>
</button>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    text: {
      required: true,
      type: String as PropType<string>
    }
  }
})
</script>

<style lang='scss' scoped>
button {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  border: 0;
  border-radius: $indent-half / 2;
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
}
</style>
