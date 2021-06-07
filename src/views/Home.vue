<template>
<SectionStart />
<SectionUsual />
<SectionProperly />
<SectionCalculator />
<SectionForm />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { isVisible } from '../_'

import SectionStart from '../components/section/Start.vue'
import SectionUsual from '../components/section/Usual.vue'
import SectionProperly from '../components/section/Properly.vue'
import SectionCalculator from '../components/section/Calculator.vue'
import SectionForm from '../components/section/Form.vue'

let elementsToCheckVisibility: Element[]

export default defineComponent({
  components: {
    SectionStart,
    SectionUsual,
    SectionProperly,
    SectionCalculator,
    SectionForm
  },

  mounted () {
    const selectors = `h2, .card p, .blue-heading, .but-text,
#properly p, .saving-text, #call .heading`
    elementsToCheckVisibility = [...document.querySelectorAll(selectors)]

    const { checkVisibility } = this
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
  },

  unmounted () {
    window.removeEventListener('scroll', this.checkVisibility)
  },

  methods: {
    checkVisibility (): void {
      elementsToCheckVisibility.forEach(e => {
        if (isVisible(e)) (e as HTMLElement).dataset.isVisible = '1'
      })
    }
  }
})
</script>
