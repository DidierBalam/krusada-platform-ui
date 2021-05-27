<template>
  <!-- Games -->
  <div v-if="!isLoading" class="games">
    <UserGame v-for="item of games" :key="item.id" />
  </div>
  <!-- //Games -->

  <div class="-flex-center" v-if="isLoading">
    <LoadingBar class="-mt5" :title="'Cargando'" />
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, ref } from "vue";

//Components
import UserGame from "../../shared/components/game/UserGame.vue";
import LoadingBar from "../../shared/components/LoadingBar.vue";

export default defineComponent({
  name: "GamesContentAccountModule",
  components: {
    UserGame,
    LoadingBar,
  },
  setup() {
    //Data

    const isLoading = ref<boolean>(true);

    const games = ref<any>([]);

    //Methods

    const getData = async (): Promise<any> => {
      return true;
    };

    //Lifecycle Hooks

    onMounted(() => {
      getData().then(() => {
        games.value = [
          {
            id: "a",
          },
          {
            id: "b",
          },
          {
            id: "c",
          },
          {
            id: "d",
          },
        ];
        setTimeout(() => {
          isLoading.value = false;
        }, 600);
      });
    });

    return {
      //Data
      isLoading,
      games,
    };
  },
});
</script>
