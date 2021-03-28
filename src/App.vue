<template>
<Header />
<SectionStart />
<SectionUsual />
<SectionProperly />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Header from './components/Header.vue'
import SectionStart from './components/section/Start.vue'
import SectionUsual from './components/section/Usual.vue'
import SectionProperly from './components/section/Properly.vue'

export default defineComponent({
  components: {
    Header,
    SectionStart,
    SectionUsual,
    SectionProperly
  }
})
</script>
