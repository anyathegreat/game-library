<script setup>
import { computed, onMounted, ref } from "vue";
import { DogsService } from "@/services";
import BaseButton from "@/components/BaseButton.vue";
import BaseSpinner from "@/components/BaseSpinner.vue";
import { notification } from "@/utils";

const dogImages = ref([]);
const loading = ref(false);

async function fetchDogFacts() {
  try {
    loading.value = true;
    const dogFactsResponse = await DogsService.getDogsImages();
    dogImages.value = dogFactsResponse.data;
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  } catch (error) {
    loading.value = false;
    notification.error(`Something went wrong: ${error}`);
  }
}

const containerClasses = computed(() => {
  return {
    "v-container": true,
    "v-hidden": loading.value,
    "v-active": !loading.value,
  };
});

onMounted(async () => {
  await fetchDogFacts();
});
</script>

<template>
  <h1>Dogs Gallery</h1>

  <h2>
    Dogs
    <BaseButton vInline :vDisabled="loading" vVariant="solid" vType="secondary" vSize="sm" @click="fetchDogFacts">
      Refresh
    </BaseButton>
  </h2>
  <hr />
  <BaseSpinner v-if="loading" vSize="lg" vColor="light" />
  <div :class="containerClasses">
    <div v-for="dogImage in dogImages" :key="dogImage.id" class="v-dog-image-container">
      <img :src="dogImage.url" />
    </div>
  </div>
</template>

<style scoped>
.v-container {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  transition: opacity 0.5s ease;

  &.v-hidden {
    visibility: hidden;
    opacity: 0;
    height: 1px;
  }

  &.v-active {
    height: max-content;
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

.v-dog-image-container {
  height: 300px;
  margin-bottom: 14px;

  & img {
    height: 100%;
  }
}
</style>
