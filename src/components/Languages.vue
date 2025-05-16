<script setup>  
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const languages = getSectionById('languages')
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <p class="marker marker-lang uppercase text-emerald-500 font-bold absolute top-0 -right-[12em]">Idiomas</p>
    <h3
      class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
      {{ languages.title }}
    </h3>
    <p class="mt-8 text-xl text-gray-400 text-center" id="description">
      {{ languages.content }}
    </p>
  </div>
</template>