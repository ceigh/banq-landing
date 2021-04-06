<template>
<input :value='modelValue'
  @input='emitUpdate($event.target.value)'/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],

  methods: {
    emitUpdate (value: string): void {
      this.$emit('update:modelValue', value)
    },
    clear (): void {
      this.emitUpdate('')
    }
  }
})
</script>

<style lang='scss' scoped>
input {
  $border-width: 2px;

  border: none;
  border-bottom: $border-width solid lighten($gray, 15%);
  padding: 1/1.3 * $indent-half $indent-half;
  font-size: 1.2rem;
  transition: background $duration;

  @include lg {
    font-size: 1rem;
  }

  &:hover,
  &:focus {
    background: darken($white, 10%);
  }

  &:active {
    background: darken($white, 20%);
  }

  &:focus {
    outline: none;
    border-bottom: $border-width solid $black;
  }

  &:not(:placeholder-shown):valid {
    border-bottom: $border-width solid $black;
  }

  &:invalid {
    box-shadow: none;
    border-bottom: $border-width solid lighten(red, 25%);
  }
}
</style>
