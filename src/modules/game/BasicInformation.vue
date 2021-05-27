<template>
  <!-- Information -->
  <div class="basic-information">
    <div class="game-options -primary-font">
      <p class="-text1 -extra-bold -black">Información</p>
      <div class="-mt2">
        <div class="-flex -items-center">
          <i class="fi-sr-calendar -text1 -light-gray"></i>
          <p class="-text2 -gray -mld3">Creado 20/10/2021</p>
        </div>
        <!-- <div class="-mt1 -flex -items-center">
              <i class="fi-sr-playing-cards -text1 -light-gray"></i>
              <p class="-text2 -gray -mld3">60 Preguntas</p>
            </div> -->
        <div class="-mt1 -flex -items-center">
          <i class="fi-sr-play -text1 -blue"></i>
          <p class="-text2 -blue -mld3">19 Partidas</p>
        </div>
        <div class="-flex -items-center -mt1">
          <i class="fi-sr-user -text1 -light-gray"></i>
          <p class="-text2 -gray -mld3">+100 Personas</p>
        </div>
      </div>
      <div class="-mt3">
        <button class="btn primary-btn -wd100">
          <i class="fi-rr-play general-icon"></i>
          <p>Jugar</p>
        </button>
      </div>
    </div>

    <div class="delete -mt4 -primary-font">
      <p class="-text2 -gray -center-text">
        Eliminar este desafío será un acto permanente
      </p>
      <button class="btn outline-btn gray -mt2 -wd100">
        <p>Eliminar</p>
      </button>
    </div>
  </div>
  <!-- //Information -->
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameBasicInformation",
});
</script>
