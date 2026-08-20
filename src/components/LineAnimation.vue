<script setup>
  import Line from '../icons/line.vue'

  import gsap from "gsap";
  import { onMounted } from "vue";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    const path = document.querySelector("#line");
    const length = path.getTotalLength();

    // Inicializa la línea invisible
    gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
    });

    // Animaciones con flags para evitar repeticiones
    let visible = false;

    function dibujarLinea() {
        if (visible) return;
        visible = true;
        gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
        });
        gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power1.inOut"
        });
    }

    function borrarLinea() {
        if (!visible) return;
        visible = false;
        gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: 0
        });
        gsap.to(path, {
        strokeDasharray: length,
        strokeDashoffset: -length,
        duration: 1.5,
        ease: "power1.inOut"
        });
    }

    // Al cargar: dibujar la línea
    dibujarLinea();

    // Scroll: borrar al bajar, pintar al volver arriba
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 50) {
        borrarLinea();
        } else {
        dibujarLinea();
        }
    });

    ScrollTrigger.refresh()
  })

</script>

<template>
  <div id="smooth-wrapper" class="min-h-screen py-6 px-10 lg:px-52 absolute z-999">
    <div id="smooth-content">
      <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="absolute -right-52 -left-52 -z-1"><Line /></div>
      </div>
    </div>
  </div>
</template>