<template>
  <div class="account-data -primary-font">
    <div class="-flex -items-center">
      <p class="-text1 -black -extra-bold">Mi Progreso</p>
    </div>

    <div class="-mt2" v-if="!isLoading">
      <div class="-flex-between -items-center">
        <div class="-flex -items-center">
          <i class="fi-rr-glasses -text3 -gray general-icon"></i>
          <p class="-text3 -gray -mld3">Principiante</p>
        </div>
        <i class="fi-sr-badge -text2 -yellow general-icon"></i>
      </div>
      <div class="progress-bar -mtd5">
        <div class="progress-bar-line blue" style="width: 80%"></div>
      </div>

      <div class="-mt2">
        <p class="-text2 -gray">
          <span class="-extra-bold -purple">1500 Puntos</span> obtenidos
        </p>
      </div>
      <div class="-mt2">
        <p class="-text2 -gray">
          <span class="-extra-bold -yellow">8 desafíos</span> jugados
        </p>
      </div>

      <div class="-mt2 -flex">
        <div>
          <i class="fi-sr-badge general-icon -text1 -light-gray -mtd1"></i>
        </div>
        <div class="-mld3">
          <p class="-text3 -gray">Obtén la Insignia Experto por 10,000 puntos</p>
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="-wd100 -mt2">
      <div class="loading-text -wd100"></div>
      <div class="loading-text -wd50 -mt1"></div>
      <div class="loading-text -wd75 -mt2"></div>
      <div class="loading-text -wd60 -mt1"></div>
      <div class="loading-text -wd30 -mt1"></div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "AccountData",
  setup() {
    //Data

    const isLoading = ref<boolean>(true);

    //Methods

    const getData = async (): Promise<any> => {
      return true;
    };

    //Lifecycle Hooks

    onMounted(() => {
      getData().then(() => {
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      });
    });

    return {
      //Data
      isLoading,
    };
  },
});
</script>
