<template>
<a :href='href' v-if='href'>
  <button :class='{ white, big, border }'>
    {{ text }}
    <span v-if='icon' class='material-icons md-15'>north_east</span>
  </button>
</a>

<button :class='{ white, big, border }' v-else>
  {{ text }}
  <span v-if='icon' class='material-icons md-15'>north_east</span>
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
    },
    big: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    border: {
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
  --padding: #{$indent};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0;
  border-radius: 0.7rem;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0 var(--padding);
  height: 45px;
  color: $white;
  background: $black;
  transition: 0.5s ease;
  width: 180px;
  font-size: 12px;
  letter-spacing: 0.1em;
  font-family: SFUIDisplay-Medium, sans-serif;

  @include sm {
    --padding: #{$indent-half / 2};

    letter-spacing: initial;
    width: auto;
    height: 35px;
    font-size: 0.7rem;
  }

  &:hover {
    background: lighten($black, 33%);
  }

  span {
    margin-left: 1/3 * $indent-half;
  }

  &.white {
    color: $black;
    background: $white;

    &:hover {
      color: $white;
      background: $black;
    }
  }

  &.big {
    height: 60px;

    @include sm {
      height: 45px;
    }
  }

  &.border {
    border: 1px solid $black;
  }
}
</style>
