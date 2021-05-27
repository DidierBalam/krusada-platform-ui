<template>
  <div v-if="!isLoading" class="game-access">
    <div class="-flex -items-center" style="margin-top: -1.5em">
      <i class="fi-rr-key -title -black -mtd3"></i>
      <p class="-title -black -extra-bold -mld3">Ingresa el código de acceso</p>
    </div>
    <div class="inp -mt2">
      <input type="text" placeholder="xxxxxxxxxx" />
    </div>
    <div class="-mt3 -flex-center">
      <button class="btn primary-btn -wd60" @click="create()">
        <p>Verificar</p>
      </button>
    </div>
  </div>

  <div v-else class="-flex-center -items-center" style="height: 17.2em">
    <LoadingBar :title="loadingTitle" style="margin-top: -2em" />
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, ref } from "vue";

//Store
import { useStore } from "../../../store/index";

//Types
import { ModalMutationOptions } from "../../types/enum/store-enum";

//Components
import LoadingBar from "../LoadingBar.vue";

export default defineComponent({
  name: "GameAccess",
  components: {
    LoadingBar,
  },
  setup() {
    //Data
    const store = useStore();

    const isLoading = ref<boolean>(false);

    const loadingTitle = ref<string>("");

    //Methods
    const create = () => {
      isLoading.value = true;
      loadingTitle.value = "Verificando";

      setTimeout(() => {
        loadingTitle.value = "Redirigiendo";

        setTimeout(() => {
          store.commit(ModalMutationOptions.closeModal);
        }, 1000);
      }, 1000);
    };

    return {
      //Data
      isLoading,
      loadingTitle,
      //Methods
      create,
    };
  },
});
</script>
