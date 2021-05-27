<template>
  <div class="game-social -flex">
    <div class="-flex -items-center">
      <button
        class="btn transparent-btn gray"
        style="padding-left: 0.5em; padding-right: 0.5em"
      >
        <i class="fi-rr-heart general-icon"></i>
      </button>
      <button
        class="btn transparent-btn gray -mrd5"
        style="padding-left: 0.5em; padding-right: 0.5em"
      >
        <p>150 Me gusta</p>
      </button>
    </div>
    <button class="btn transparent-btn gray">
      <i class="fi-rr-comment general-icon"></i>
      <p>150 comentarios</p>
    </button>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameSocial",
});
</script>
