<template>
  <Header />
  <SectionStart />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from './components/Header.vue'
import SectionStart from './components/section/Start.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    SectionStart
  }
})
</script>
