<template>
  <div class="module shop-module">
    <NavBar />

    <!-- Layout -->
    <div class="layout-module">
      <!-- Left Bar -->
      <div class="left-bar">
        <div class="left-bar-general-information -primary-font">
          <p class="-title -extra-bold -purple -center-text">Conecta con tus Amigos!</p>
          <p class="-text2 -gray -mt2 -center-text">
            Demuestra tus habilidades en diferentes temas, crea partidas e invita a tus amigos
            a unirse a ellas.
          </p>
        </div>
      </div>
      <!-- //Left Bar -->

      <!-- Main container -->
      <div class="main-container">
        <Filters @setFilter="setFilter" :isLoading="isLoading" :filters="filterOptions" />

        <!-- Search -->
        <div class="filter -mt2">
          <div class="inp button-inp">
            <input
              type="text"
              placeholder="Buscar"
              v-model="search"
              @keyup.enter="searchData"
            />
            <button @click="searchData" class="general-btn">
              <i class="fi-rr-search general-icon"></i>
            </button>
          </div>
        </div>
        <!-- //Search -->

        <!-- Games -->
        <div class="games -mt1" v-if="!isLoading">
          <ShopGame />
          <ShopGame />
          <ShopGame />
          <ShopGame />
        </div>
        <!-- //Games -->

        <div class="-flex-center" v-if="isLoading">
          <LoadingBar class="-mt5" :title="'Cargando'" />
        </div>
      </div>
      <!-- //Main container -->

      <!-- Right Bar -->
      <RightBar v-if="isPcScreen" />
      <!-- Right Bar -->
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { computed, defineComponent, onMounted, ref } from "vue";

//Types
import { TabOptionsConfig } from "@/shared/types/config/tab-options-config";

//Config
import { filters } from "./config/filters";

//Services
import { determinePcScreen } from "../../shared/services/screen-service";

//Components
import NavBar from "../../shared/components/Nav.vue";
import Filters from "../../shared/components/TabOptions.vue";
import ShopGame from "../../shared/components/game/ShopGame.vue";
import RightBar from "./RightBarContent.vue";
import LoadingBar from "../../shared/components/LoadingBar.vue";

export default defineComponent({
  name: "ShopModule",
  components: {
    NavBar,
    Filters,
    ShopGame,
    RightBar,
    LoadingBar,
  },
  setup() {
    //Data

    const filterOptions: TabOptionsConfig = filters;

    const isLoading = ref<boolean>(true);
    const isSearchFilter = ref<boolean>(false);

    const currentFilter = ref<string>(filters.currentOption.name);
    const search = ref<string>("");

    //Methods

    const getData = () => {
      isLoading.value = true;
      setData();
    };

    const searchData = () => {
      if (search.value != "") {
        isSearchFilter.value = true;
        isLoading.value = true;

        setData();
      }
    };

    const setData = () => {
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    };

    const setFilter = (value: string) => {
      currentFilter.value = value;
      isSearchFilter.value = false;
      search.value = "";

      getData();
    };

    //Computed

    const isPcScreen = computed<boolean>(() => {
      return determinePcScreen();
    });

    //Lifecycle Hooks

    window.scrollTo(0, 0);

    onMounted(() => {
      getData();
    });

    return {
      //Data
      isLoading,
      filterOptions,
      search,
      //methods
      setFilter,
      searchData,
      //Computed
      isPcScreen,
    };
  },
});
</script>

<style lang="scss" src="../../assets/scss/modules/shop.scss"></style>
