<template>
  <!-- Games -->
  <div v-if="!isLoading" class="games">
    <UserGame v-for="item of games" :key="item.id" />
  </div>
  <!-- //Games -->
  <div class="-mt4 -flex-center" v-if="games.length > 2 && !isLoading">
    <router-link to="/account" class="link -wd50" exact>
      <button class="btn outline-btn gray -wd100">
        <p>Ver Todos</p>
        <i class="fi-rr-angle-small-right general-icon"></i>
      </button>
    </router-link>
  </div>
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
  name: "GamesContentHomeModule",
  components: {
    LoadingBar,
    UserGame,
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

          setTimeout(() => {
            isLoading.value = false;
          }, 600);
        }, 500);
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
