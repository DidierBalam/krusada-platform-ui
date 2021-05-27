<template>
  <div class="notification-bar">
    <!-- Background -->
    <div class="notification-bar-bg" @click="$emit('hide')"></div>
    <!-- //Background -->

    <!-- Body -->
    <div class="notification-bar-body" id="notificationbar-body">
      <div class="-flex-between -items-center">
        <p class="-text1 -ml1 -extra-bold -black -primary-font">Notificaciones</p>
        <button class="btn transparent-btn gray">
          <p>Todas</p>
          <i class="fi-rr-angle-small-right general-icon"></i>
        </button>
      </div>
      <div class="notification-bar-body-child -mtd5">
        <div>
          <button class="notification-item -primary-font general-btn">
            <i class="fi-sr-trophy -blue -mrd5 -text1 general-icon"></i>
            <div>
              <p class="-text3 -black -extra-bold">
                Sumaste <span class="-blue">+150 puntos</span> en
                <span> Álgebra Básica</span>
              </p>
              <p class="-text3 -gray">Ayer 7:30 pm</p>
            </div>
          </button>
          <button class="notification-item -primary-font general-btn">
            <i class="fi-sr-users -yellow -mrd5 -text1 general-icon"></i>
            <div>
              <p class="-text3 -black -extra-bold">
                Jehieli Tamayo <span class="-yellow">Te ha invitado a unirte</span>
                <span> a su desafío: Segunda Guerra Mundial</span>
              </p>
              <p class="-text3 -gray">Ayer 7:30 pm</p>
            </div>
          </button>
          <button class="notification-item -primary-font general-btn">
            <i class="fi-sr-badge -purple -mrd5 -text1 general-icon"></i>
            <div>
              <p class="-text3 -black -extra-bold">
                Conseguiste <span class="-purple">La Insignia Profesional</span>
                <span> ¡Felicitaciones!</span>
              </p>
              <p class="-text3 -gray">Ayer 7:30 pm</p>
            </div>
          </button>
          <button class="notification-item -primary-font general-btn">
            <i class="fi-sr-trophy -blue -mrd5 -text1 general-icon"></i>
            <div>
              <p class="-text3 -black -extra-bold">
                Sumaste <span class="-blue">+150 puntos</span> en
                <span> Álgebra Básica</span>
              </p>
              <p class="-text3 -gray">Ayer 7:30 pm</p>
            </div>
          </button>
          <button class="notification-item -primary-font general-btn">
            <i class="fi-sr-play -yellow -mrd5 -text1 general-icon"></i>
            <div>
              <p class="-text3 -black -extra-bold">
                Jehieli Tamayo <span class="-yellow">Te ha invitado a jugar:</span>
                <span> Álgebra Básica</span>
              </p>
              <p class="-text3 -gray">Ayer 7:30 pm</p>
            </div>
          </button>
          <button class="notification-item -primary-font general-btn">
            <i class="fi-sr-trophy -blue -mrd5 -text1 general-icon"></i>
            <div>
              <p class="-text3 -black -extra-bold">
                Sumaste <span class="-blue">+150 puntos</span> en
                <span> Álgebra Básica</span>
              </p>
              <p class="-text3 -gray">Ayer 7:30 pm</p>
            </div>
          </button>
          <button class="notification-item -primary-font general-btn">
            <i class="fi-sr-users -yellow -mrd5 -text1 general-icon"></i>
            <div>
              <p class="-text3 -black -extra-bold">
                Jehieli Tamayo <span class="-yellow">Te ha invitado a jugar</span>
                <span> Álgebra Básica</span>
              </p>
              <p class="-text3 -gray">Ayer 7:30 pm</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- //Body -->
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, onUnmounted } from "vue";

//Services
import { manipulateScroll } from "../services/dom-service";

export default defineComponent({
  name: "NotificationBar",
  setup() {
    //Lifecycle Hooks

    setTimeout(() => {
      document.getElementById("notificationbar-body")?.classList.add("isActive");
    }, 50);

    onMounted(() => {
      manipulateScroll(false);
    });

    onUnmounted(() => {
      manipulateScroll(true);
    });
  },
});
</script>
