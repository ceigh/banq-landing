<template>
{{ result }}
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import Tween from '@tweenjs/tween.js'

function animate () {
  if (Tween.update()) requestAnimationFrame(animate)
}

export default defineComponent({
  props: {
    value: {
      required: true,
      type: Number as PropType<number>
    }
  },

  data () {
    return {
      tweeningValue: 0
    }
  },

  computed: {
    result (): string {
      return this.tweeningValue.toLocaleString('ru-RU')
    }
  },

  watch: {
    value (newValue, oldValue) {
      this.tween(oldValue, newValue)
    }
  },

  mounted () {
    this.tweeningValue = this.value
  },

  methods: {
    tween (startValue: number, endValue: number) {
      new Tween.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 200)
        .onUpdate(({ tweeningValue }) => {
          this.tweeningValue = Math.round(tweeningValue)
        })
        .start()
      animate()
    }
  }
})
</script>
