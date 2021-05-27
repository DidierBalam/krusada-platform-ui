<template>
  <div class="right-bar">
    <div class="app-status">
      <div>
        <p class="-yellow -extra-bold -primary-font count">
          +{{ isLoading ? randomNumber : gamesCount }}
        </p>
        <p class="-text1 -extra-bold -primary-font -black">desafíos disponibles</p>
      </div>
    </div>

    <div class="feature -flex-center">
      <img
        src="https://res.cloudinary.com/drab09by4/image/upload/v1620230485/KAHOOT/bolsa-para-la-escuela_mcx5ma.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, ref } from "vue";

//Composables
import useRandom from "../../shared/composables/useRandom";

export default defineComponent({
  name: "RightBarContentShopModule",
  setup() {
    //Data

    const isLoading = ref<boolean>(true);

    const gamesCount = ref<number>(0);

    //Use
    const { randomNumber, runRandom, stopRandom } = useRandom();

    //Methods

    const getAppData = async (): Promise<any> => {
      return true;
    };

    //Lifecycle Hooks

    onMounted(() => {
      runRandom();
      getAppData().then(() => {
        setTimeout(() => {
          stopRandom();
          gamesCount.value = 200; //data;
          isLoading.value = false;
        }, 1000);
      });
    });

    return {
      //Data
      isLoading,
      randomNumber,
      gamesCount,
    };
  },
});
</script>
