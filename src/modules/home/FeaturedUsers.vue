<template>
  <div class="featured-users">
    <p class="-text1 -extra-bold -black">Usuarios destacados</p>

    <div class="-mt2" v-if="!isLoading">
      <div class="featured-user" v-for="item of users" :key="item.id">
        <img
          src="https://i.pinimg.com/originals/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg"
          alt=""
        />
        <div class="-ml1">
          <div class="-flex">
            <p class="-text3 -extra-bold -black -thinking-text name">
              {{ item.name }}
            </p>
            <p class="-purple -text3 -extra-bold -mld3">+{{ item.points }}</p>
          </div>
          <div>
            <p class="-text3 -gray">{{ item.place }}</p>
          </div>
        </div>
      </div>

      <div class="-mt3">
        <button class="btn second-btn -wd100">
          <p>Ver más</p>
        </button>
      </div>
    </div>

    <div class="-mt2" v-else>
      <div class="loading-text -wd80 -mt3"></div>
      <div class="loading-text -wd35 -mt1"></div>
      <div class="loading-text -wd80 -mt2"></div>
      <div class="loading-text -wd50 -mt1"></div>
      <div class="loading-text -wd80 -mt2"></div>
      <div class="loading-text -wd30 -mt1"></div>

      <div class="loading-text -wd50 -mt3"></div>
    </div>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, onMounted, ref } from "vue";

//Types
import type { FeaturedUserType } from "../../shared/types/featured-user-type";

export default defineComponent({
  name: "FeaturedUsers",
  setup() {
    //Data

    const isLoading = ref<boolean>(true);
    
    const users = ref<FeaturedUserType[]>([]);

    //Methods

    const getData = async (): Promise<any> => {
      return true;
    };

    //Lifecycle Hooks

    onMounted(() => {
      getData().then(() => {
        users.value = [
          {
            id: "a",
            name: "Jehieli Tamayo",
            points: 150,
            place: "Motul - Yucatán",
          },
          {
            id: "a",
            name: "Didier Balam",
            points: 150,
            place: "Motul - Yucatán",
          },
          {
            id: "a",
            name: "Jehieli Tamayo",
            points: 150,
            place: "Motul - Yucatán",
          },
          {
            id: "a",
            name: "Didier Balam",
            points: 150,
            place: "Motul - Yucatán",
          },
          {
            id: "a",
            name: "Didier Balam",
            points: 150,
            place: "Motul - Yucatán",
          },
        ];
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      });
    });

    return {
      //Data
      isLoading,
      users,
    };
  },
});
</script>
