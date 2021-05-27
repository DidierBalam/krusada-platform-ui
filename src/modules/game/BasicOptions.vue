<template>
  <!-- Options -->
  <div class="basic-options">
    <div>
      <div class="-flex-between -items-center">
        <p class="-extra-bold -purple welcome-start">Torneo de Inteligencia Artificial</p>
      </div>

      <!-- Social -->
      <GameSocial class="-mt1" />
      <!-- //Social -->
      
      <div class="inp -mt2 name-input">
        <input
          type="text"
          placeholder="Nombre del desafío"
          value="Torneo de Inteligencia Artificial"
        />
      </div>

      <div class="-mt3">
        <div>
          <p class="-text2 -gray -mld5">Descripción</p>
        </div>
        <div class="inp -mt1 description-input">
          <input
            type="text"
            placeholder="Nombre del desafío"
            value="Prueba tus conocimientos en la IA"
          />
        </div>
      </div>
    </div>

    <div class="-mt3 basic-config">
      <!-- Time -->
      <div>
        <p class="-text2 -gray -mld5">Tiempo de pregunta</p>
        <div class="inp number-inp -mt1">
          <div class="-flex -items-center">
            <p class="-text3 -gray">Segundos</p>
            <input class="-ml1" type="text" value="30" disabled />
          </div>
          <div class="tiggers">
            <button class="btn transparent-btn gray" style="align-items: flex-end">
              <i class="fi-rr-angle-small-up general-icon"></i>
            </button>
            <button class="btn transparent-btn gray" style="align-items: flex-start">
              <i class="fi-rr-angle-small-down general-icon"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- //Time -->
      <div>
        <p class="-text2 -gray -mld5">Nivel</p>
        <!-- Level DropDown -->
        <div class="dropdown -mt1" id="level-dropdown">
          <div
            class="dropdown-bg"
            @click="executeDropDown(false, 'level-dropdown')"
          ></div>
          <button
            class="btn outline-btn gray tigger -wd100"
            @click="executeDropDown(true, 'level-dropdown')"
          >
            <p class="-black">Básico</p>
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
        <!-- //Level DropDown -->
      </div>
    </div>
  </div>
  <!-- //Options -->
</template>

<script lang="ts">
//Libraries
import { defineComponent } from "vue";

//Services
import { runDropdown } from "../../shared/services/dom-service";

//Components
import GameSocial from "./GameSocial.vue";

export default defineComponent({
  name: "GameBasicOptions",
  components: {
    GameSocial,
  },
  setup() {
    //Methods
    const executeDropDown = (isActive: boolean, dropdownId: string) => {
      runDropdown(isActive, dropdownId);
    };

    return {
      //methods
      executeDropDown,
    };
  },
});
</script>
