<script setup>
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const studies = getSectionById('studies')
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <p class="text-[0.7em] marker marker-stu uppercase text-[#ff0000] font-bold absolute top-0 -right-[17em]">Formación</p>
    <h3
      class="text-xl uppercase overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#4aff02] to-[#fdfd04]">
      {{ studies.title }}
    </h3>
    <p class="mt-8 text-lg text-gray-400 text-center" id="description">
      {{ studies.content }}
    </p>
  </div>
</template>