<template>
<SectionStart />
<SectionUsual />
<SectionProperly />
<SectionCalculator />
<SectionForm />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { checkVisibility } from '../_'

import SectionStart from '../components/section/Start.vue'
import SectionUsual from '../components/section/Usual.vue'
import SectionProperly from '../components/section/Properly.vue'
import SectionCalculator from '../components/section/Calculator.vue'
import SectionForm from '../components/section/Form.vue'

export default defineComponent({
  components: {
    SectionStart,
    SectionUsual,
    SectionProperly,
    SectionCalculator,
    SectionForm
  },

  mounted () {
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
  },
  unmounted () {
    window.removeEventListener('scroll', checkVisibility)
  }
})
</script>
