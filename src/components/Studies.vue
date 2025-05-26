<script setup>
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const studies = getSectionById('studies')
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen relative">
    <p class="text-[0.7em] marker marker-stu uppercase text-[#1AC587] font-bold absolute top-0 -right-[17em]">Formación</p>
    <h3
      class="filter-black text-base uppercase overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#00a89d] to-[#4aff02]">
      {{ studies.title }}
    </h3>
    <p class="mt-8 text-lg text-gray-400 mb-6">
      {{ studies.subtitle }}
    </p>
    <h5 v-for="(item, index) in studies.content" class= "text-[#1DC884] text-[0.7em] mb-3">{{ item.studies.title }}</h5>
  </div>
</template>