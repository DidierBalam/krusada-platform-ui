<template>
  <div class="game-item">
    <div v-if="!isLoading">
      <div class="-flex -items-center">
        <i class="fi-rr-trophy -text1 -black -mtd1"></i>
        <p class="-text1 -black -extra-bold -mld3">Álgebra II</p>
      </div>
      <p class="-text3 -black -bold">Mide tus conocimientos en álgebra</p>

      <div class="-mt3">
        <div class="-flex -items-center">
          <i class="fi-sr-playing-cards -text1 -light-gray"></i>
          <p class="-text2 -gray -mld3">60 Preguntas</p>
        </div>
        <div class="-mt1 -flex -items-center">
          <i class="fi-sr-alarm-clock -text1 -light-gray"></i>
          <p class="-text2 -gray -mld3">30seg por pregunta</p>
        </div>
        <div class="-mt1 -flex -items-center">
          <i class="fi-sr-flame -text1 -yellow"></i>
          <p class="-text2 -yellow -mld3">Nivel Básico</p>
        </div>
      </div>

      <div class="-mt3">
        <button class="btn primary-btn -wd100">
          <i class="fi-rr-play general-icon"></i>
          <p>Jugar</p>
        </button>
      </div>
    </div>
    <!-- loading Game -->
    <div class="-wd100" v-else>
      <div class="-flex -items-center">
        <div class="loading-text -wd50"></div>
      </div>
      <div class="loading-text -wd70 -mt1"></div>

      <div class="-mt3 -wd100">
        <div class="loading-text -wd80 -mt1"></div>
        <div class="loading-text -wd50 -mt1"></div>
        <div class="loading-text -wd70 -mt1"></div>
        <div class="loading-text -wd30 -mt1"></div>
      </div>

      <div class="-mt3">
        <div class="loading-text -wd100 -mt1"></div>
      </div>
    </div>
    <!-- //loading Game -->
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ShopGame",
  setup() {
    //Data
    const isLoading = ref<boolean>(true);

    //Lifecycle Hooks

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 600);
    });

    return {
      isLoading,
    };
  },
});
</script>
