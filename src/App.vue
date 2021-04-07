<template>
<Header />
<SectionStart />
<SectionUsual />
<SectionProperly />
<SectionCalculator />
<SectionForm />
<Footer />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { checkVisibility } from './_'

import Header from './components/Header.vue'
import SectionStart from './components/section/Start.vue'
import SectionUsual from './components/section/Usual.vue'
import SectionProperly from './components/section/Properly.vue'
import SectionCalculator from './components/section/Calculator.vue'
import SectionForm from './components/section/Form.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    SectionStart,
    SectionUsual,
    SectionProperly,
    SectionCalculator,
    SectionForm,
    Footer
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
