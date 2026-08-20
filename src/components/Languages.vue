<script setup>  
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const languages = getSectionById('languages')
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <h3
      class="filter-black overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#8c069e] to-[#fd8904]">
      {{ languages.title }}
    </h3>
    <p class="mt-8 text-lg text-center">
      {{ languages.content }}
    </p>
  </div>
</template>