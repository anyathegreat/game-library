<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { GamesService } from "@/services";
import { notification } from "@/utils";
// import { fakeGameDetails } from "@/data/fakeGameDetails";
import BaseCarousel from "@/components/BaseCarousel.vue";
import BaseSpinner from "@/components/BaseSpinner.vue";

const navigation = useRoute();
const gameDetails = ref(null);
const loading = ref(true);

const gameDescription = computed(() => {
  return (
    gameDetails?.value?.description
      ?.replaceAll(`src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="`, "")
      ?.replaceAll(/style="width: \d*px"/gi, "")
      ?.replaceAll(/href="\S*"/gi, `href="#"`)
      ?.replaceAll("data-src", "src") || ""
  );
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

onMounted(async () => {
  if (navigation?.params?.id) {
    // gameDetails.value = fakeGameDetails.results;
    try {
      const response = await GamesService.getGameDetails(navigation.params.id);
      gameDetails.value = response?.data?.results || null;
      loading.value = false;
    } catch (error) {
      notification.error(error);
      console.log(error);
    }
  } else {
    notification.error(`Invalid game ID`);
  }
  loading.value = false;
});
</script>

<template>
  <template v-if="loading"><BaseSpinner vSize="lg" /></template>
  <template v-else>
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
            <span>{{ gameDetails?.original_release_date || "N/A" }}</span>
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
          <BaseCarousel v-model="gameImages" />
        </div>
      </div>
    </div>
    <div class="page-section game-description-container" v-html="gameDescription"></div>
  </template>
</template>

<style scoped lang="scss">
.page-section {
  margin-bottom: 20px;
}
.article-info {
  width: 100%;
  margin-bottom: 14px;
}

.game-basic-container {
  flex-grow: 1;
  /* width: 100%; */
}

.game-info-container {
  display: flex;
  gap: 14px;
  width: 100%;
}

.game-basic-info-row {
  word-wrap: break-word;
}

.game-img-container {
  background-color: var(--surfaceVariant);
  padding: 4px;
  border-radius: 4px;
  min-width: 300px;
  width: 300px;
  height: 372px;

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
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 280px;
  max-height: 300px;
}
</style>

<style lang="scss">
.game-description-container {
  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
    clear: both;
  }

  & h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    color: var(--onSurfaceVariant);
    clear: both;
  }

  & h4 {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    color: var(--onSurfaceVariant);
    clear: both;
  }

  & table {
    border: 1px solid var(--onSurfaceVariant);
    width: 100%;

    & td,
    & th {
      border: 1px solid var(--onSurfaceVariant);
      padding: 2px;
      position: relative;

      & figure {
        padding: 8px;
        position: relative;
        max-width: 100px;
        width: 100%;

        background-color: transparent !important;
        float: none !important;
        clear: none !important;
        margin: 0 !important;

        & a {
          padding: 0 !important;
        }

        & img {
          margin-left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 100%;
          max-width: 80px;
          max-height: 100px;
          border-radius: 4px;

          object-fit: scale-down;
        }

        & figcaption {
          margin-top: 0.5rem;
          text-align: center;
          color: var(--onSurfaceVariant);
        }
      }
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

  & p {
    margin-bottom: 1rem;
  }

  & p:has(+ figure[data-align="right"]) {
    clear: left;
  }

  & p:has(+ figure[data-align="left"]) {
    clear: right;
  }

  & figure[data-align="right"] + p {
    clear: left;
  }

  & figure[data-align="left"] + p {
    clear: right;
  }

  & figure {
    padding: 8px;
    position: relative;
    max-width: 500px;
    background-color: var(--surfaceContainer);

    margin: 0 0 1rem 0;

    &[data-align="right"] {
      float: right;
      clear: left;

      margin-left: 1rem;
    }

    &[data-align="left"] {
      float: left;
      clear: right;
      margin-right: 1rem;
    }

    & a {
      padding: 0 !important;
    }

    & img {
      margin-left: 50%;
      transform: translateX(-50%);
      max-height: 320px;
      max-width: 100%;
      border-radius: 4px;
      object-fit: scale-down;
    }

    & figcaption {
      margin-top: 0.5rem;
      text-align: center;
      color: var(--onSurfaceVariant);
    }
  }
}
</style>
