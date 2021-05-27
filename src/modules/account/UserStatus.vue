<template>
  <div class="status -primary-font -mt3">
    <div class="-mt4 -primary-font">
      <div v-if="!isLoading">
        <div class="-flex -items-center">
          <i class="fi-sr-calendar -text2 -mtd3 -light-gray"></i>
          <p class="-text2 -gray -mld5">Te uniste el 20/10/2021</p>
        </div>
        <div class="-flex -items-center -mtd5">
          <i class="fi-sr-envelope -text2 -mtd3 -light-gray"></i>
          <p class="-text2 -gray -mld5">didierjose62@gmail.com</p>
        </div>
      </div>
      <!-- Loading Text -->
      <div v-else class="-wd50">
        <div class="loading-text -wd70"></div>
        <div class="loading-text -wd90 -mt1"></div>
      </div>
      <!-- //Loading Text -->
    </div>
    <div class="summary -mt2">
      <div class="summary-child">
        <div>
          <p class="-text1 -extra-bold -black">Puntaje</p>
        </div>
        <p v-if="!isLoading" class="-text2 -gray -mt1">
          <span class="-extra-bold -purple">1500 Puntos</span> obtenidos
        </p>
        <!-- Loading Text -->
        <div v-else class="loading-text -wd50 -mt1"></div>
        <!-- //Loading Text -->
      </div>

      <div class="summary-child -mt2">
        <div>
          <p class="-text1 -extra-bold -black">Jugados</p>
        </div>
        <p v-if="!isLoading" class="-text2 -gray -mt1">
          <span class="-extra-bold -yellow">8 desafíos</span> jugados
        </p>
        <!-- Loading Text -->
        <div v-else class="loading-text -wd90 -mt1"></div>
        <!-- //Loading Text -->
      </div>
    </div>
    <div class="level -mt2">
      <div>
        <p class="-text1 -extra-bold -black">Nivel</p>
      </div>
      <div v-if="!isLoading">
        <div class="-flex-between -items-center -mt2">
          <div class="-flex -items-center">
            <i class="fi-rr-glasses -text3 -gray general-icon"></i>
            <p class="-text3 -gray -mld3">Principiante</p>
          </div>
          <i class="fi-sr-badge -text2 -yellow general-icon"></i>
        </div>
        <div class="progress-bar -mtd5">
          <div class="progress-bar-line blue" style="width: 80%"></div>
        </div>

        <div class="-mt2"></div>
        <div class="-mt2"></div>

        <div class="-mt2 -flex">
          <div>
            <i class="fi-sr-badge general-icon -text1 -light-gray -mtd1"></i>
          </div>
          <div class="-mld3">
            <p class="-text3 -gray">Obtén la Insignia Experto por 10,000 puntos</p>
          </div>
        </div>
      </div>
      <!-- Loading Text -->
      <div v-else class="-wd100 -mt1">
        <div class="loading-text -wd100"></div>
        <div class="loading-text -wd50 -mt1"></div>
        <div class="loading-text -wd75 -mt1"></div>
        <div class="loading-text -wd30 -mt1"></div>
      </div>
      <!-- //Loading Text -->
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "UserStatus",
  setup() {
    //Data

    const isLoading = ref<boolean>(true);

    //Methods

    const getData = () => {
      setTimeout(() => {
        isLoading.value = false;
      }, 600);
    };

    //Lifecycle Hooks

    onMounted(() => {
      getData();
    });

    return {
      //Data
      isLoading,
    };
  },
});
</script>
