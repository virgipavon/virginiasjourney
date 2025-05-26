<script setup>  
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const projects = getSectionById('projects')
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <p class="text-[0.7em] marker marker-projects uppercase text-emerald-500 font-bold absolute top-0 -right-[17em]">P.Destacados</p>
    <h3
      class="text-base uppercase filter-black overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#8c069e] to-[#fd8904]">
      {{ projects.title }}
    </h3>
    <div class="flex mt-10 gap-5">
      <a
        v-for="(item, index) in projects.content"
        :href="item.project.url" target="_blank" rel="noopener"
        :key="index"
        :class= "[ index % 2 === 0
          ? 'bg-gradient-to-br from-[#161616] to-[#8c069e]'
          : 'bg-gradient-to-br from-[#161616] to-[#D26967]' ]"
        class="p-[2px] rounded-xl mb-10 min-h-[200px] w-[50%]">
        <div class="bg-[#242424] rounded-[10px] p-10 min-h-[196px] h-full">
          <h5 class= "text-[#B34D84] text-[0.7em] mb-2">{{ item.project.title }}</h5>
          <p class="text-gray-400">{{ item.project.desc }}</p>
        </div>
      </a>
    </div>
  </div>
</template>