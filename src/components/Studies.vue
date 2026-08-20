<script setup>
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const studies = getSectionById('studies')
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen relative text-center">
    <h3
      class="filter-black overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#00a89d] to-[#4aff02]">
      {{ studies.title }}
    </h3>
    <p class="mt-8 text-lg mb-6">
      {{ studies.subtitle }}
    </p>
    <div v-for="(item, index) in studies.content">
      <h5 class= "text-[#1DC884] text-2xl mb-3">{{ item.studies.title }}</h5>
      <p class="mb-4 text-[#00a89d] text-sm">{{ item.studies.date }}</p>
    </div>
  </div>
</template>