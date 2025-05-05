<script setup>
  import gsap from "gsap";
  import { onMounted } from "vue";
  import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

  gsap.registerPlugin(ScrambleTextPlugin)

  onMounted(() => {
     
    gsap.to("#heading", 3, {
      delay: 1.5,
      scrambleText: {
        text: "¡Hola! Me llamo Virginia",
        chars: "lowercase",
        tweenLength: true
      }
    });
    gsap.fromTo(
      "#heading",
      {
        opacity: 0,
        x: "-100%",
      },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
      }
    );

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
  })
</script>

<template>
  <div class="min-h-screen">
    <div>
      <div class="py-12 px-32 flex flex-col items-center justify-center min-h-screen">
        <h1
          class="overflow-hidden pb-5 font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]"
          id="heading">
          ¡Hola!
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

      <div class="py-12 px-32 flex flex-col items-center justify-center min-h-screen bg-emerald">
        <h3
          class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
          Trabajo en desarrollo web desde que las webs se veían en Internet Explorer… y sobreviví.
        </h3>
        <p class="mt-8 text-xl text-gray-400 text-center" id="description">
          Mi fuerte es el frontend moderno: Vue, Angular, Tailwind, Vite.
          Y también he tenido mis batallas con WordPress, Drupal o Typo3.
          Lo importante: sé adaptarme, sé leer código ajeno, y me importa que lo que entrego sea accesible, mantenible y limpio.
        </p>
      </div>

      <div class="py-12 px-32 flex flex-col items-center justify-center min-h-screen bg-emerald">
        <h3
          class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
          Estos son algunos de los sitios en los que han contando conmigo
        </h3>
        <div class="flex mb-6">
          <div class="w-1/2 mr-1">
            <h5>INECO (2023 – ahora)</h5>
            <p>Actualmente trabajo en INECO, desarrollando con Angular y Vue, y jugando con servicios de AWS: Cognito, Amplify, Lambda…
              También me encargo de automatizaciones con GitLab.
              Las reuniones son en GMT, pero yo sigo programando en CET con café.</p>
          </div>
          <div class="w-1/2 ml-1">
            <h5>UNIR (2020 – 2023)</h5>
            <p>Tres años manteniendo la web institucional de UNIR. WordPress, estructura heredada, plugins que no firmaría nadie.
              Aun así, metí mejoras donde se podía: accesibilidad, rendimiento, pequeños scripts.
              Fue duro, pero aprendí una barbaridad.</p>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/2 mr-1">
            <h5>ELEGRA / Ferrovial (2019 – 2020)</h5>
            <p>Aquí hice una de las cosas que más me enorgullece:
              la web corporativa de Ferrovial, que ganó premios internacionales.
              Yo me ocupé de gran parte de la accesibilidad AA (WCAG 2.1), algo que me tomé muy en serio.
              Usamos Vue, Sass, Pug y… Gulp. Sí, Gulp. Qué tiempos.</p>
          </div>
          <div class="w-1/2 ml-1">
            <h5>También trabajé en ARCMEDIA</h5>
            <p>donde empecé en serio con portales grandes, multilingües y bastante más exigentes de lo que esperaba.
              Ahí aprendí a optimizar, a trabajar en equipo, y a no subestimar el CSS de nadie.</p>
          </div>
        </div>
      </div>

      <div class="py-12 px-32 flex flex-col items-center justify-center min-h-screen bg-emerald">
        <h3
          class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
          Estudié desarrollo de aplicaciones informáticas
        </h3>
        <p class="mt-8 text-xl text-gray-400 text-center" id="description">
          Y luego me especialicé en diseño, desarrollo y comunicación digital.
          Aprendí tanto de diseño como de código. Y creo que se nota.
        </p>
      </div>

      <div class="py-12 px-32 flex flex-col items-center justify-center min-h-screen bg-emerald">
        <h3
          class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
          Y sí, hablo inglés
        </h3>
        <p class="mt-8 text-xl text-gray-400 text-center" id="description">
          Nivel C1. Me he acostumbrado a leer documentación en inglés, 
          trabajar con gente de otros países y discutir con APIs sin subtítulos.
        </p>
      </div>

      <div class="py-12 px-32 flex flex-col items-center justify-center min-h-screen bg-emerald">
        <h3
          class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
          ¿En qué soy buena?
        </h3>
        <ul class="mt-8 text-xl text-gray-400">
          <li>En escribir código limpio que se pueda mantener.</li>
          <li>En detectar lo que va a dar problemas antes de que lo dé.</li>
          <li>En accesibilidad, en pensar en usuarios reales.</li>
          <li>Y en no rendirme cuando algo se rompe, aunque el error empiece con “undefined is not a function”.</li>
        </ul>
      </div>

      <div class="py-12 px-32 flex flex-col items-center justify-center min-h-screen bg-emerald">
        <h3
          class="overflow-hidden pb-5 font-bold text-5xl text-transparent text-center bg-clip-text bg-gradient-to-br from-[#f1ffa0] to-[#00a89d]">
          ¿Y ahora qué?
        </h3>
        <p class="mt-8 text-xl text-gray-400 text-center" id="description">
          Ahora quiero seguir creciendo.
          Meterme más en backend, en IA aplicada, en proyectos donde se valore el cuidado del código.
          Y si puede ser, con un equipo humano y sentido del humor.
        </p>
      </div>

    </div>
  </div>
</template>