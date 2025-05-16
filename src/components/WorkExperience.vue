<script setup>
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const jobs = getSectionById('experience')
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <p class="marker marker-exp uppercase text-emerald-500 font-bold absolute top-0 -right-[12em]">Experiencia</p>
    <h3
      class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
      {{ jobs.title }}
    </h3>
    <div class="flex flex-col mt-10">
      <div
        v-for="(item, index) in jobs.content"
        :key="index"
        class="p-[2px] rounded-xl bg-gradient-to-br from-[#f1ffa0] to-[#00a89d] mb-10 min-h-[200px]"
      >
        <div class="bg-[#242424] rounded-[10px] p-10 min-h-[196px]">
          <h5>{{ item.job.title }}</h5>
          <p>{{ item.job.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>