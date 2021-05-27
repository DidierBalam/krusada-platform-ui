<template>
  <div class="questions">
    <p class="-title -extra-bold -black">Preguntas</p>
    <div class="question -mt5">
      <div class="-flex-between -tems-center">
        <div class="number">
          <p class="-text1 -yellow -extra-bold">1</p>
        </div>
        <div class="-flex -items-center">
          <button class="btn transparent-btn circle-btn gray">
            <i class="fi-rr-angle-small-up general-icon"></i>
          </button>
          <button class="btn transparent-btn circle-btn gray">
            <i class="fi-rr-angle-small-down general-icon"></i>
          </button>
          <button class="btn transparent-btn circle-btn gray">
            <i class="fi-rr-trash general-icon"></i>
          </button>
        </div>
      </div>
      <div class="-mt2">
        <div class="inp">
          <input type="text" placeholder="Pregunta" />
        </div>
      </div>
    </div>

    <div class="question -mt5">
      <div class="-flex-between -tems-center">
        <div class="number">
          <p class="-text1 -yellow -extra-bold">1</p>
        </div>
        <div class="-flex -items-center">
          <button class="btn transparent-btn circle-btn gray">
            <i class="fi-rr-angle-small-up general-icon"></i>
          </button>
          <button class="btn transparent-btn circle-btn gray">
            <i class="fi-rr-angle-small-down general-icon"></i>
          </button>
          <button class="btn transparent-btn circle-btn gray">
            <i class="fi-rr-trash general-icon"></i>
          </button>
        </div>
      </div>
      <div class="-mt2">
        <div class="inp">
          <input type="text" placeholder="Pregunta" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

export default defineComponent({
  name: "Questions",
  setup() {
    //Lifecycle Hooks
  },
});
</script>
