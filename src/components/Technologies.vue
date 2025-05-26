<script setup>  
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const technologies = getSectionById('technologies')
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen bg-emerald relative">
    <p class="text-[0.7em] marker marker-tech uppercase text-emerald-500 font-bold absolute top-0 -right-[17em]">Tecnologías</p>
    <h3
      class="text-base uppercase filter-black overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#8c069e] to-[#fd8904]">
      {{ technologies.title }}
    </h3>
    <div v-for="(item, index) in technologies.content"
    class="bg-[#242424] py-5 h-full"
    :key="index">
      <h5 class= "text-[#B34D84] text-[0.7em] mb-2">{{ item.type.title }}</h5>
      <p class="text-gray-400">{{ item.type.desc }}</p>
    </div>
  </div>
</template>