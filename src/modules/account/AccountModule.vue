<template>
  <div class="module account-module">
    <NavBar />

    <!-- Layout -->
    <div class="layout-module">
      <!-- Main container -->
      <div class="main-container">
        <div class="profile -primary-font">
          <div class="-flex-center">
            <div class="user-picture">
              <img
                v-if="!isLoading"
                src="https://res.cloudinary.com/drab09by4/image/upload/v1620230738/KAHOOT/94378911_2049984248475802_5731342511700443136_n_uvmrpn.jpg"
                alt=""
              />
              <div v-else></div>
            </div>
          </div>

          <div v-if="!isLoading" class="-mt1 -center-text">
            <p class="-title -extra-bold">Didier José Balam</p>
            <div class="-flex-center -items-center">
              <i class="fi-sr-user -text2 -mtd3 -light-gray"></i>
              <p class="-text2 -gray -mld3 -bold">DidierBalam</p>
            </div>
          </div>

          <div v-else class="-mt1">
            <div class="-flex-center">
              <div class="loading-text -wd35"></div>
            </div>
            <div class="-flex-center">
              <div class="loading-text -wd20 -mt1"></div>
            </div>
          </div>
        </div>

        <div class="status-options-content">
          <UserStatus />

          <div class="options">
            <TabBar
              @setFilter="setTab"
              :isLoading="isLoading"
              :filters="tabsOptions"
              class="-mt5"
            />

            <GamesContent />
          </div>
        </div>
      </div>
      <!-- //Main container -->
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, ref } from "vue";

//Types
import { TabOptionsConfig } from "@/shared/types/config/tab-options-config";

//Config
import { tabs } from "./config/tabs";

//Components
import NavBar from "../../shared/components/Nav.vue";
import TabBar from "../../shared/components/TabOptions.vue";
import UserStatus from "./UserStatus.vue";
import GamesContent from "./GamesContent.vue";

export default defineComponent({
  name: "ShopModule",
  components: {
    NavBar,
    TabBar,
    UserStatus,
    GamesContent,
  },
  setup() {
    //Data

    const tabsOptions: TabOptionsConfig = tabs;

    const isLoading = ref<boolean>(true);

    const currentTab = ref<string>(tabs.currentOption.name);

    //Methods

    const getData = () => {
      setTimeout(() => {
        isLoading.value = false;
      }, 600);
    };

    const setTab = (value: string) => {
      currentTab.value = value;
    };

    //Lifecycle Hooks

    window.scrollTo(0, 0);

    onMounted(() => {
      getData();
    });

    return {
      //Data
      isLoading,
      tabsOptions,
      //Methods
      setTab,
    };
  },
});
</script>

<style lang="scss" src="../../assets/scss/modules/account.scss"></style>
