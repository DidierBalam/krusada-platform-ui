<template>
  <header class="nav-bar" id="nav-bar" :class="isFixedNav ? 'fixed-nav' : ''">
    <!-- Logo -->
    <div class="app-logo">
      <div class="banner">
        <div class="line-banner"></div>
        <div class="box-banner"></div>
        <div class="circle-banner circle1"></div>
        <div class="circle-banner circle2"></div>
      </div>
      <h1>Krusada.games</h1>
    </div>
    <!-- //Logo -->
    <div class="nav-bar-child">
      <button id="menu-btn" class="btn transparent-btn gray">
        <i class="bx bx-menu general-icon"></i>
      </button>

      <div class="logo">
        <p class="-title -black -primary-font -extra-bold">
          Krusada<span class="-purple">.games</span>
        </p>
      </div>
      <!-- Options -->
      <div class="-flex">
        <div class="-flex nav-bar-child-options">
          <router-link to="/" class="link" exact>
            <button class="btn transparent-btn -mr1">
              <i class="fi-rr-home general-icon"></i>
              <p>Home</p>
            </button>
          </router-link>
          <router-link to="/shop" class="link">
            <button class="btn transparent-btn -mr1">
              <i class="fi-rr-shop general-icon"></i>
              <p>Tienda</p>
            </button>
          </router-link>
          <router-link to="/account" class="link" exact>
            <button class="btn transparent-btn -mr1">
              <img
                class="-circle-img"
                src="https://res.cloudinary.com/drab09by4/image/upload/v1620230738/KAHOOT/94378911_2049984248475802_5731342511700443136_n_uvmrpn.jpg"
                alt=""
              />
              <p>DidierBalam</p>
            </button>
          </router-link>

          <!-- Account DropDown -->
          <div class="dropdown" id="account-dropdown">
            <div
              class="dropdown-bg"
              @click="executeDropDown(false, 'account-dropdown')"
            ></div>
            <button
              class="btn transparent-btn tigger"
              @click="executeDropDown(true, 'account-dropdown')"
            >
              <p>Más</p>
              <i class="fi-rr-angle-small-down general-icon drop"></i>
            </button>

            <!-- Options -->
            <div class="dropdown-options -flex-end">
              <div class="dropdown-options-child">
                <button class="btn transparent-btn gray">
                  <i class="fi-rr-heart general-icon"></i>
                  <p>Planes y Precios</p>
                </button>
                <button class="btn transparent-btn gray">
                  <i class="fi-rr-copyright general-icon"></i>
                  <p>Acerda de</p>
                </button>
                <button class="btn transparent-btn gray">
                  <i class="fi-rr-sign-out general-icon" style="transform: scale(-1)"></i>
                  <p>Salir</p>
                </button>
              </div>
            </div>
            <!-- //Options -->
          </div>
          <!-- //Account DropDown -->
        </div>
        <!-- Notification Button -->
        <button
          class="btn second-btn circle-btn icon-btn -ml2"
          @click="activeNotificationBar"
        >
          <i class="fi-rr-bell general-icon"></i>
        </button>
        <!-- //Notification Button -->
      </div>
      <!-- //Options -->
    </div>
  </header>

  <NotificationBar v-if="isNotificationBarVisible" @hide="hideNotificationBar" />
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

//Services
import { runDropdown } from "../services/dom-service";

//Components
import NotificationBar from "./NotificationBar.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    NotificationBar,
  },
  setup() {
    //Data

    const isNotificationBarVisible = ref<boolean>(false);
    const isFixedNav = ref<boolean>(false);

    //Methods

    const executeDropDown = (isActive: boolean, dropdownId: string) => {
      runDropdown(isActive, dropdownId);
    };

    const activeNotificationBar = () => {
      isNotificationBarVisible.value = true;
    };

    const hideNotificationBar = () => {
      isNotificationBarVisible.value = false;
    };

    const fixNav = () => {
      const navHeight = document.getElementById("nav-bar")?.clientHeight;
      if (window.scrollY > (navHeight ? navHeight : 0) + 100) isFixedNav.value = true;
      else isFixedNav.value = false;
    };

    //Lifecycle Hooks

    onMounted(() => {
      window.addEventListener("scroll", () => {
        executeDropDown(false, "account-dropdown");
        fixNav();
      });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", () => {
        executeDropDown(false, "account-dropdown");
      });
    });

    return {
      //Data
      isFixedNav,
      isNotificationBarVisible,
      //Methods
      activeNotificationBar,
      hideNotificationBar,
      executeDropDown,
    };
  },
});
</script>
