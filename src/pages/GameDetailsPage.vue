<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
// import { GamesService } from "@/services";
import { notification } from "@/utils";
import { fakeGameDetails } from "@/data/fakeGameDetails";
import BaseCarousel from "@/components/BaseCarousel.vue";

const navigation = useRoute();
const gameDetails = ref(null);

const gameDescription = computed(() => {
  return gameDetails?.value?.description || "";
});
const gameImages = computed(() => {
  return gameDetails?.value?.images?.map((item) => item?.medium_url) || [];
});
function arrayToSeparateString(list, field, separator = " \\ ") {
  if (!Array.isArray(list) || !field) {
    return "N/A";
  }

  return list.map((item) => item?.[field] || "").join(separator);
}

onMounted(() => {
  if (navigation?.params?.id) {
    gameDetails.value = fakeGameDetails.results;
    // GamesService.getGameDetails(navigation.params.id);
  } else {
    notification.error(`Invalid game ID`);
  }
});
</script>

<template>
  <h1>{{ gameDetails?.name }}</h1>
  <div class="page-section article-info">
    <span>🕓 Обновлено: {{ gameDetails?.date_last_updated }}</span>
  </div>
  <div class="page-section game-info-container">
    <div class="game-img-container">
      <img :src="gameDetails?.image?.medium_url" alt="" />
    </div>
    <div class="game-basic-container">
      <div class="game-basic-info">
        <div class="game-basic-info-row">
          <span>Год выпуска: </span>
          <span>{{ gameDetails?.original_release_date }}</span>
        </div>
        <div class="game-basic-info-row">
          <span>Жанр: </span>
          <span>{{ arrayToSeparateString(gameDetails?.genres, "name") }}</span>
        </div>
        <div class="game-basic-info-row">
          <span>Разработчик: </span>
          <span>{{ arrayToSeparateString(gameDetails?.developers, "name") }}</span>
        </div>
        <div class="game-basic-info-row">
          <span>Издательство: </span>
          <span>{{ arrayToSeparateString(gameDetails?.publishers, "name") }}</span>
        </div>
        <div class="game-basic-info-row">
          <span>Платформа: </span>
          <span>{{ arrayToSeparateString(gameDetails?.platforms, "name") }}</span>
        </div>
      </div>
      <div class="game-basic-gallery">
        <BaseCarousel :vImages="gameImages" />
      </div>
    </div>
  </div>
  <div class="page-section game-description-container" v-html="gameDescription"></div>
</template>

<style scoped lang="scss">
.page-section {
  margin-bottom: 20px;
}
.article-info {
  width: 100%;
  margin-bottom: 14px;
}
.game-info-container {
  display: flex;
  gap: 14px;
  width: 100%;
}
.game-img-container {
  width: 300px;
  height: 300px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
}
.game-basic-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.game-basic-gallery {
  width: 100%;
  height: 240px;
}
</style>

<style lang="scss">
.game-description-container {
  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  & h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    color: var(--onSurfaceVariant);
  }

  & h4 {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    color: var(--onSurfaceVariant);
  }
  & p {
    margin-bottom: 1rem;
  }

  & table {
    border: 1px solid var(--onSurfaceVariant);
    width: 100%;

    & td,
    & th {
      border: 1px solid var(--onSurfaceVariant);
      padding: 2px;
    }
  }

  & ul {
    margin: 4px 0;
    padding: 0 0 0 12px;
    list-style: disc;
    list-style-position: inside;
  }

  & a {
    color: var(--tertiary);

    &:visited {
      color: var(--onTertiaryContainer);
    }
  }
}
</style>
