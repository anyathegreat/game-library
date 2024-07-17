<script setup>
import { computed, onMounted, ref } from "vue";
import { CatsService } from "@/services";
import BaseButton from "@/components/BaseButton.vue";
import BaseSpinner from "@/components/BaseSpinner.vue";

const catImages = ref([]);
const loading = ref(false);

async function fetchCatFacts() {
  loading.value = true;
  const catFactsResponse = await CatsService.getCatImages();
  catImages.value = catFactsResponse.data;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}

const containerClasses = computed(() => {
  return {
    "v-container": true,
    "v-hidden": loading.value,
    "v-active": !loading.value,
  };
});

onMounted(async () => {
  await fetchCatFacts();
});
</script>

<template>
  <h1>Cats Gallery</h1>

  <h2>
    Cats
    <BaseButton vInline :vDisabled="loading" vVariant="solid" vType="secondary" vSize="sm" @click="fetchCatFacts">
      Refresh
    </BaseButton>
  </h2>
  <hr />
  <BaseSpinner v-if="loading" vSize="lg" vColor="light" />
  <div :class="containerClasses">
    <div v-for="catImage in catImages" :key="catImage.id" class="v-cat-image-container">
      <img :src="catImage.url" />
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

.v-cat-image-container {
  height: 300px;
  margin-bottom: 14px;

  & img {
    height: 100%;
  }
}
</style>
