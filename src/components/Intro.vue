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
            class="text-xl uppercase filter-black overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#8c069e] to-[#00a89d]">
            {{ summary.title }}
          </h3>
          <p class="filter-black mt-8 text-lg text-gray-400 text-center" id="description">
            {{ summary.content }}
          </p>
        </div>
        <section class="absolute top-0 bottom-0 w-screen -left-52 -z-1">
          <div class="logo top-6 right-18 h-27" data-speed="1.5">
            <img src="../assets/logos/js.svg" alt="js" />
          </div>
          <div class="logo top-2 left-5 h-24" data-speed="1.2">
            <img src="../assets/logos/json.svg" alt="json" />
          </div>
          <div class="logo top-12 left-50 h-12" data-speed="1.8">
            <img src="../assets/logos/tailwind.svg" alt="tailwind" />
          </div>
          <div class="logo top-63 right-0 h-15" data-speed="1.1">
            <img src="../assets/logos/vue.svg" alt="vue" />
          </div>
          <div class="logo top-35 -right-50 h-3" data-speed="1.8">
            <img src="../assets/logos/vite.svg" alt="vite" />
          </div>
          <div class="logo top-75 left-78 h-2" data-speed="1.5">
            <img src="../assets/logos/python.svg" alt="python" />
          </div>
          <div class="logo top-1 -left-40 h-1" data-speed="1.6">
            <img src="../assets/logos/cypress.svg" alt="cypress" />
          </div>
          <div class="logo top-26 right-28 h-17" data-speed="1.1">
            <img src="../assets/logos/aws.svg" alt="aws" />
          </div>
          <div class="logo top-62 left-75 h-4" data-speed="1.2">
            <img src="../assets/logos/gitlab.svg" alt="gitlab" />
          </div>
          <div class="logo top-1 left-50 h-2" data-speed="1.8">
            <img src="../assets/logos/github.svg" alt="github" />
          </div>
          <div class="logo top-83 -left-27 h-5" data-speed="1.3">
            <img src="../assets/logos/wordpress.svg" alt="wordpress" />
          </div>
          <div class="logo top-5 -right-30 h-13" data-speed="1.2">
            <img src="../assets/logos/drupal.svg" alt="drupal" />
          </div>
          <div class="logo top-17 left-98 h-2" data-speed="1.5">
            <img src="../assets/logos/html.svg" alt="html" />
          </div>
          <div class="logo top-12 -left-30" data-speed="1.6">
            <img src="../assets/logos/css.svg" alt="css" />
          </div>
          <div class="logo top-1 right-46 h-1" data-speed="1.5">
            <img src="../assets/logos/scss.svg" alt="scss" />
          </div>
          <div class="logo top-43 left-40 h-4" data-speed="1.2">
            <img src="../assets/logos/angular.svg" alt="angular" />
          </div>
          <div class="logo top-15 left-20 h-2" data-speed="1.8">
            <img src="../assets/logos/huggingface.svg" alt="huggingface" />
          </div>
          <div class="logo top-51 right-62 h-5" data-speed="1.1">
            <img src="../assets/logos/greensock.svg" alt="greensock" />
          </div>
          <div class="logo top-21 -right-10 h-1" data-speed="1.2">
            <img src="../assets/logos/lambda.svg" alt="lambda" />
          </div>
          <div class="logo top-67 left-1 h-2" data-speed="1.5">
            <img src="../assets/logos/cognito.svg" alt="cognito" />
          </div>
          <div class="logo top-46 -left-40 h-1" data-speed="1.6">
            <img src="../assets/logos/chrome.svg" alt="chrome" />
          </div>
          <div class="logo top-46 -left-10 h-2" data-speed="1.8">
            <img src="../assets/logos/firefox.svg" alt="firefox" />
          </div>
          <div class="logo top-46 -right-10 h-2" data-speed="1.7">
            <img src="../assets/logos/edge.svg" alt="edge" />
          </div>
          <div class="logo top-80 right-25 h-2" data-speed="1.2">
            <img src="../assets/logos/brave.svg" alt="brave" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
  .gradient-bits {
    position: fixed;
    width: 0.3rem;
    min-height: 12px;
    background: linear-gradient(to bottom right, #fd8904, transparent);
    border-radius: 2rem;
    filter: drop-shadow(0 0 1em #05f4a8) drop-shadow(0 0 2em #8c069e);
  }

  .gradient-bits:nth-of-type(even) {
    width: 0.5rem;
    background: linear-gradient(to bottom right, #00a89d, transparent);
  }

  .logo {
    position: fixed;
    max-width: 1.1rem;
    filter: drop-shadow(0 0 1em #05f4a8) drop-shadow(0 0 2em #8c069e);
  }

  .logo:nth-of-type(even) {
    max-width: 1.5rem;
  }

  .filter-black {
    filter: drop-shadow(0 0 1em #000000) drop-shadow(0 0 2em #000000);
  }
</style>