import { ref } from 'vue';

export default function() {
  const isLoading = ref<boolean>(true);

  const randomNumber = ref<number>(0);

  const runRandom = () => {
    isLoading.value = true;

    const interval = setInterval(() => {
      if (!isLoading.value) clearInterval(interval);
      else {
        randomNumber.value = Math.floor(Math.random() * 100 + 1);
      }
    }, 1);
  };

  const stopRandom = () => {
    isLoading.value = false;
  };

  return {
    //Data
    randomNumber,
    //Methods
    runRandom,
    stopRandom,
  };
}
