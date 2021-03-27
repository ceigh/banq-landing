<template>
<Header />
<SectionStart />
<SectionUsual />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Header from './components/Header.vue'
import SectionStart from './components/section/Start.vue'
import SectionUsual from './components/section/Usual.vue'

export default defineComponent({
  components: {
    Header,
    SectionStart,
    SectionUsual
  }
})
</script>
