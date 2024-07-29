<script setup>
import { computed, ref } from "vue";
import { VueFlux, FluxCaption, FluxControls, FluxPagination, FluxPreloader, Img, Slide } from "vue-flux";
import "vue-flux/style.css";

function srcToImgArray(srcArr) {
  if (!Array.isArray(srcArr)) {
    return [];
  }

  return srcArr.map((item) => new Img(item, "", "fit"));
}

const $vueFlux = ref();

const vImages = defineModel();
const vfRscs = computed(() => {
  return srcToImgArray(vImages.value);
});

const vfOptions = ref({
  autoplay: true,
});

// const vfRscs = ref([]);
const vfTransitions = ref([Slide]);
</script>

<template>
  <div class="carousel-wrapper">
    <VueFlux :options="vfOptions" :rscs="vfRscs" :transitions="vfTransitions" ref="$vueFlux">
      <template #preloader="preloaderProps">
        <FluxPreloader v-bind="preloaderProps" />
      </template>

      <template #caption="captionProps">
        <FluxCaption v-bind="captionProps" />
      </template>

      <template #controls="controlsProps">
        <FluxControls v-bind="controlsProps" />
      </template>

      <template #pagination="paginationProps">
        <FluxPagination v-bind="paginationProps" />
      </template>
    </VueFlux>
  </div>
</template>

<style scoped lang="scss">
.carousel-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  & .vue-flux {
    width: 100%;
    /* height: 100%; */
  }
}
</style>
