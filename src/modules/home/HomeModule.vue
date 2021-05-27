<template>
  <div class="module home-module">
    <NavBar />

    <!-- Layout -->
    <div class="layout-module">
      <!-- Left Bar -->
      <div class="left-bar">
        <div class="app-status">
          <div>
            <p class="-yellow -extra-bold -primary-font count">
              +{{ isLoading ? randomNumber : gamesCount }}
            </p>
            <p class="-text1 -extra-bold -primary-font -black">desafíos jugados</p>
          </div>
          <div class="-mt3 -ml2">
            <p class="-purple -extra-bold -primary-font count">
              +{{ isLoading ? randomNumber : usersCount }}
            </p>
            <p class="-text1 -extra-bold -primary-font -black">Usuarios Registrados</p>
          </div>
        </div>

        <div class="left-bar-general-information -mt2 -primary-font">
          <p class="-title -extra-bold -purple -center-text">¿Sabías que?</p>
          <p class="-text2 -gray -mt2 -center-text">
            Krusada Games es un servicio creado para el entretenimiendo de niños y, no tan
            niños, atraves de juegos y tecnología.
          </p>
        </div>

        <div class="-mt5 -pb4">
          <GameRounds />
        </div>
      </div>
      <!-- //Left Bar -->

      <!-- Main container -->
      <div class="main-container">
        <div class="welcome-start -mt4">
          <div class="-flex-center -items-center">
            <h1 class="-purple primary-text">Bienvenido a</h1>
            <h1 class="-purple">Krusada</h1>
            <div class="name-box"><i class="fi-sr-play general-icon"></i></div>
          </div>
          <h2 class="-extra-bold">¿Con qué quieres iniciar?</h2>
        </div>
        <div class="start-call-action -mt4">
          <!-- Create -->
          <button class="btn light-btn gray" @click="createGame()">
            <i class="fi-rr-plus general-icon"></i>
            <p>Crear nuevo juego</p>
          </button>
          <!-- //Create -->
          <button class="btn primary-btn -ml2" @click="accessRound()">
            <i class="fi-rr-key general-icon"></i>
            <p>Acceder a partida</p>
          </button>
        </div>

        <!-- Games -->
        <div class="-mt5">
          <div class="-pt5">
            <p class="-text1 -extra-bold -gray -primary-font -ml1">Mis desafíos</p>
          </div>

          <GamesContent />
        </div>
        <!-- //Games -->
      </div>
      <!-- //Main container -->

      <!-- //Right Bar -->
      <div class="right-bar">
        <div class="feature -flex-center">
          <img
            src="https://res.cloudinary.com/drab09by4/image/upload/v1620230485/KAHOOT/bolsa-para-la-escuela_mcx5ma.svg"
            alt=""
          />
        </div>

        <AccountData class="-mt4" />

        <FeaturedUsers class="-mt5 -pb4" />
      </div>
      <!-- //Right Bar -->
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, ref } from "vue";

//Type
import { ModalMutationOptions } from "../../shared/types/enum/store-enum";

//Store
import { useStore } from "../../store/index";

//Composables
import useRandom from "../../shared/composables/useRandom";

//Components
import NavBar from "../../shared/components/Nav.vue";
import AccountData from "./AccountData.vue";
import FeaturedUsers from "./FeaturedUsers.vue";
import GamesContent from "./GamesContent.vue";
import GameRounds from "./GameRounds.vue";

export default defineComponent({
  name: "HomeModule",
  components: {
    NavBar,
    AccountData,
    FeaturedUsers,
    GamesContent,
    GameRounds,
  },
  setup() {
    //Data
    const store = useStore();

    const isLoading = ref<boolean>(true);

    const gamesCount = ref<number>(0);
    const usersCount = ref<number>(0);

    //Use

    const { randomNumber, runRandom, stopRandom } = useRandom();

    //Methods

    const getAppData = async (): Promise<boolean> => {
      return true;
    };

    const createGame = () => {
      store.commit(ModalMutationOptions.activateModal, {
        size: "min",
        title: "Creando Juego",
        component: () => import("../../shared/components/game/GameCreator.vue"),
      });
    };

    const accessRound = () => {
      store.commit(ModalMutationOptions.activateModal, {
        size: "min",
        title: "Acceder a Juego",
        component: () => import("../../shared/components/game/GameAccess.vue"),
      });
    };

    //Lifecycle Hooks

    window.scrollTo(0, 0);

    onMounted(() => {
      runRandom();
      getAppData().then(() => {
        setTimeout(() => {
          stopRandom();
          gamesCount.value = 100; //data;
          usersCount.value = 50; //data;
          isLoading.value = false;
        }, 1000);
      });
    });

    return {
      //Data
      isLoading,
      randomNumber,
      gamesCount,
      usersCount,
      //Methods
      createGame,
      accessRound,
    };
  },
});
</script>

<style lang="scss" src="../../assets/scss/modules/home.scss"></style>
