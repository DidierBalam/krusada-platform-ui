<template>
  <div class="module game-module">
    <NavBar />

    <!-- Layout -->
    <div class="layout-module">
      <!-- Main container -->
      <div class="main-container -primary-font">

        <!-- Header -->
        <div class="game-header">
          <div>
            <button class="btn transparent-btn gray back">
              <i class="fi-rr-angle-small-left general-icon"></i>
              <p>Regresar</p>
            </button>
          </div>
        </div>
        <!-- //Header -->

        <div class="options-information">
          <BasicOptions />

          <BasicInformation />
        </div>

        <Questions />
      </div>
      <!-- //Main container -->
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

//Components
import NavBar from "../../shared/components/Nav.vue";
import BasicOptions from "./BasicOptions.vue";
import BasicInformation from "./BasicInformation.vue";
import Questions from "./Questions.vue";

export default defineComponent({
  name: "CreateModule",
  components: {
    NavBar,
    BasicOptions,
    BasicInformation,
    Questions
  },
  setup() {
    //Lifecycle Hooks

    window.scrollTo(0, 0);
  },
});
</script>

<style lang="scss" src="../../assets/scss/modules/game.scss"></style>
