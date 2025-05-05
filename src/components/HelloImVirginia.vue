<script setup>
  import Intro from './Intro.vue'
  import WorkExperience from './WorkExperience.vue'
  import Studies from './Studies.vue'
  import Languages from './Languages.vue'
  import SoftSkills from './SoftSkills.vue'
  import NextSteps from './NextSteps.vue'

  import gsap from "gsap";
  import { onMounted } from "vue";
  import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollSmoother } from "gsap/ScrollSmoother";

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrambleTextPlugin);

  onMounted(() => {

    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    const markers = [
      ".marker-exp",
      ".marker-stu",
      ".marker-lang",
      ".marker-skills",
      ".marker-next"
    ];

    for (let i = 0; i < markers.length - 1; i++) {
      const current = markers[i];
      const next = markers[i + 1];

      gsap.fromTo(
        current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: current,
            start: "center center",
            endTrigger: next,
            end: "center+=400 center",
            scrub: 0.3,
            pin: true,
            pinSpacing: false
          }
        }
      );

    }

    ScrollTrigger.create({
      trigger: markers[markers.length - 1],
      start: "center center",
      end: () => `${document.body.scrollHeight - window.innerHeight}px`,
      pin: true,
      pinSpacing: false
    });
     
    gsap.to("#heading", {
      duration: 1.5,
      scrambleText: {
        text: "Me llamo Virginia",
        chars: "lowercase",
        tweenLength: true
      }
    });

    gsap.fromTo(
    "#description",
    {
      opacity: 0,
      x: "-100%",
    },
    {
      duration: 1.5,
      opacity: 1,
      x: 0,
      ease: "power3.inOut",
      delay: 0.5,
    }
  );

  gsap.fromTo(
    ".main-btn",
    {
      opacity: 0,
      y: "100%",
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      delay: 1.3,
      ease: "power3.inOut",
      stagger: 0.1,
    }
  );

  gsap.fromTo(
    "#downArrow",
    {
      opacity: 0,
      y: "100%",
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      delay: 2,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.to("#downArrow", {
          y: 50,
          duration: 0.5,
          ease: "sine.easeInOut",
          repeat: -1,
          yoyo: true,
        });
      },
    }
  );

  ScrollTrigger.refresh()
  })
</script>

<template>
  <div id="smooth-wrapper" class="min-h-screen py-12 px-52">
    <div id="smooth-content">
      <div class="flex flex-col items-center justify-center min-h-screen">
        <h1>¡Hola!</h1>
        <h1
          class="overflow-hidden pb-5 font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]"
          id="heading">
          Me llamo Virginia
        </h1>
        <p class="mt-8 text-xl text-gray-400 text-center" id="description">
          Soy Frontend developer, con más de 10 años de experiencia escribiendo código para proyectos reales. De cuando testeábamos en internet explorer.
        </p>
        <div class="flex mt-16">
          <button
            class="main-btn w-48 p-4 text-white rounded-lg shadow-lg bg-gradient-to-br from-emerald-200 via-emerald-400 to-emerald-500 shadow-emerald-400/60"
          >
            <p class="text-lg font-semibold">Explore nature</p>
          </button>
          <button
            class="main-btn w-48 p-4 ml-4 text-green-500 border-2 border-green-400 rounded-lg shadow-lg shadow-emerald-400/60"
          >
            <p class="text-lg font-semibold">Learn more</p>
          </button>
        </div>
        <div class="mt-16">
          <div
            id="downArrow"
            class="flex items-center justify-center w-16 h-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-8 h-8 text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </div>
        </div>
      </div>

      <Intro/>

      <WorkExperience/>

      <Studies />

      <Languages />

      <SoftSkills />

      <NextSteps />

    </div>
  </div>
</template>