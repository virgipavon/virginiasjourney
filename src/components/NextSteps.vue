<script setup>  
  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const next = getSectionById('next')
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <p class="text-[0.7em] marker marker-next uppercase text-fuchsia-700 font-bold absolute top-0 -right-[17em]">¿y ahora qué?</p>
    <h3
      class="text-xl uppercase overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#8c069e] to-[#00a89d]">
      {{ next.title }}
    </h3>
    <p class="mt-8 text-lg text-gray-400 text-center">
      {{ next.content }}
    </p>
  </div>
</template>