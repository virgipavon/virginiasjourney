<script setup>
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const jobs = getSectionById('experience')
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen relative mt-30">
    <p class="text-[0.7em] marker marker-exp uppercase text-[#1AC587] font-bold absolute top-0 -right-[17em]">Experiencia</p>
    <h3
      class="filter-black text-base uppercase overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#00a89d] to-[#4aff02]">
      {{ jobs.title }}
    </h3>
    <div class="flex mt-10 gap-5 w-[200vw]">
      <div
        v-for="(item, index) in jobs.content"
        :key="index"
        :class= "[ index % 2 === 0
          ? 'bg-gradient-to-br from-[#161616] to-[#00a89d]'
          : 'bg-gradient-to-br from-[#161616] to-[#4aff02]' ]"
        class="p-[2px] rounded-xl mb-10 min-h-[200px]">
        <div class="bg-[#242424] rounded-[10px] p-10 min-h-[196px] h-full">
          <h5 class= "text-[#1DC884] text-[0.7em] mb-2">{{ item.job.title }}</h5>
          <p class="mb-4 text-[#00a89d] text-sm">{{ item.job.date }}</p>
          <p class="text-gray-400">{{ item.job.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>