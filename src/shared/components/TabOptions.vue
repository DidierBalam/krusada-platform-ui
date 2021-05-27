<template>
  <div class="tab-options">
    <button
      class="btn transparent-btn gray"
      v-for="item of filterOptions.options"
      :key="item.name"
      :class="{
        isActive: filterOptions.currentOption.name === item.name,
        left: filterOptions.currentOption.name === item.name && filterOptions.currentOption.isPrevious,
        right: filterOptions.currentOption.name === item.name && !filterOptions.currentOption.isPrevious,
      }"
      @click="setFilterOption(item.name)"
      :disabled="dataLoaded.isLoading"
    >
      <i v-if="item.icon" class="general-icon" :class="item.icon"></i>
      <p>{{ item.text }}</p>
      <div></div>
    </button>
  </div>
</template>

<script lang="ts">
//Libraries
import { defineComponent, reactive, ref } from "vue";

//Types
import { TabOptionsConfig } from "../types/config/tab-options-config";

export default defineComponent({
  name: "TabOptions",
  props: {
    isLoading: Boolean,
    filters: null,
  },
  emits: ["setFilter"],
  setup(props, { emit }) {
    //Data

    const dataLoaded = ref(props);

    const filterOptions = reactive<TabOptionsConfig>(props.filters);

    //Methods

    const setFilterOption = async (newOption: string) => {
      filterOptions.currentOption.isPrevious = await determineIsPrevious(newOption);
      filterOptions.currentOption.name = newOption;
      emit("setFilter", newOption);
    };

    const determineIsPrevious = async (nameOption: string): Promise<boolean> => {
      let currentIndex = await findIndex(filterOptions.currentOption.name);
      let newIndex = await findIndex(nameOption);

      if (currentIndex < newIndex) return true;
      else return false;
    };

    const findIndex = (nameOption: string) => {
      return new Promise<number>((resolve) => {
        resolve(filterOptions.options.findIndex((x) => x.name === nameOption));
      });
    };

    return {
      //Data
      dataLoaded,
      filterOptions,
      //Methods
      setFilterOption,
    };
  },
});
</script>
