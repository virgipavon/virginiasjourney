<script setup>  
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const projects = getSectionById('projects')
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <h3
      class="filter-black overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#8c069e] to-[#fd8904]">
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
          <h5 class= "text-[#CE656C] mb-2 text-2xl">{{ item.project.title }}</h5>
          <p>{{ item.project.desc }}</p>
        </div>
      </a>
    </div>
  </div>
</template>