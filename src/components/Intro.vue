<script setup>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollSmoother } from "gsap/ScrollSmoother";
  import { onMounted } from "vue";

  import { useCV } from '../composables/useCV'

  const { sections, getSectionById } = useCV()
  const summary = getSectionById('summary')

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  onMounted(() => {
    ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1.5,
      effects: true
    });
  })
</script>

<template>
  <div v-if="summary" class="flex flex-col items-center justify-center min-h-screen bg-emerald relative">
    <div class="smooth-wrapper min-h-screen">
      <div class="smooth-content will-change-transform h-full">
        <div>
          <h3
            class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
            {{ summary.title }}
          </h3>
          <p class="mt-8 text-xl text-gray-400 text-center" id="description">
            {{ summary.content }}
          </p>
        </div>
        <section class="absolute top-0 bottom-0 w-screen -left-52 -z-1">
          <div class="gradient-bits top-6 right-18 h-27" data-speed="1.5"></div>
          <div class="gradient-bits top-2 left-5 h-24" data-speed="1.2"></div>
          <div class="gradient-bits top-12 left-50 h-12" data-speed="1.8"></div>
          <div class="gradient-bits top-53 -right-37 h-15" data-speed="1.1"></div>
          <div class="gradient-bits top-35 -right-50 h-3" data-speed="1.2"></div>
          <div class="gradient-bits top-67 left-78 h-2" data-speed="1.5"></div>
          <div class="gradient-bits top-1 -left-40" data-speed="1.6"></div>
          <div class="gradient-bits top-16 right-28 h-17" data-speed="1.5"></div>
          <div class="gradient-bits top-62 left-75 h-4" data-speed="1.2"></div>
          <div class="gradient-bits top-1 left-50 h-2" data-speed="1.8"></div>
          <div class="gradient-bits top-83 -left-27 h-5" data-speed="1.1"></div>
          <div class="gradient-bits top-5 -right-30 h-13" data-speed="1.2"></div>
          <div class="gradient-bits top-17 left-98 h-2" data-speed="1.5"></div>
          <div class="gradient-bits top-12 -left-30" data-speed="1.6"></div>
          <div class="gradient-bits top-1 right-46 h-1" data-speed="1.5"></div>
          <div class="gradient-bits top-43 left-12 h-4" data-speed="1.2"></div>
          <div class="gradient-bits top-15 left-20 h-2" data-speed="1.8"></div>
          <div class="gradient-bits top-51 -left-34 h-5" data-speed="1.1"></div>
          <div class="gradient-bits top-21 -right-10 h-1" data-speed="1.2"></div>
          <div class="gradient-bits top-67 left-1 h-2" data-speed="1.5"></div>
          <div class="gradient-bits top-46 -left-40 h-1" data-speed="1.6"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
  .gradient-bits {
    position: fixed;
    width: 0.1rem;
    min-height: 12px;
    background: linear-gradient(to bottom right, #f1ffa0, #00a89d);
  }
</style>