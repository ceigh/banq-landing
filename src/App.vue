<template>
  <div>
    <SectionStart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionStart from './components/section/Start.vue'

export default defineComponent({
  name: 'App',
  components: {
    SectionStart
  }
})
</script>
