<script setup>  
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const next = getSectionById('next')
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <p class="marker marker-next uppercase text-emerald-500 font-bold absolute top-0 -right-[12em]">¿y ahora qué?</p>
    <h3
      class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
      {{ next.title }}
    </h3>
    <p class="mt-8 text-xl text-gray-400 text-center" id="description">
      {{ next.content }}
    </p>
  </div>
</template>