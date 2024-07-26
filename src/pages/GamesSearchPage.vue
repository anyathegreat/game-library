<script setup>
import { computed, ref } from "vue";
import BaseCard from "@/components/BaseCard.vue";
import { fakeGamesListResponse } from "@/data/fakeGamesList.js";

const gamesList = ref(fakeGamesListResponse?.results || []);

const squareImageUrl = computed(() => {
  return (url) => {
    return url.replace("square_mini", "square_medium");
  };
});
</script>

<template>
  <div class="v-page-container">
    <div class="v-page-search-container"></div>
    <div class="v-page-content-wrapper">
      <aside class="v-page-sidebar">
        <BaseCard vShadow :vBorder="false"></BaseCard>
      </aside>
      <div class="v-page-games-list">
        <BaseCard v-for="game in gamesList" :key="game.id" vOverflow="hidden" class="v-page-card">
          <img :src="squareImageUrl(game.image.tiny_url)" alt="" />
          <div class="game-title">
            <h3>{{ game.name }}</h3>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-page-content-wrapper {
  display: flex;
  gap: 14px;
}

.v-page-sidebar {
  flex: 3;
}

.v-page-games-list {
  display: grid;
  grid-template-columns: repeat(4, 174px);
  grid-gap: 16px;
  width: 100%;
  justify-content: space-evenly;
  flex: 9;
}

.v-page-card {
  display: flex;
  flex-direction: column;
  gap: 0;
  /* height: 258px; */
  background-color: #39393b;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(-4px);
  }

  & .game-title {
    border-top: 2px solid var(--game-title-border-color);
    padding: 0px 6px;
    font-size: 1rem;
    line-height: 1.1rem;
    width: 100%;
    height: calc(3.3rem + 4px);
    word-wrap: break-word;
    overflow: hidden;

    background-color: var(--game-title-bg-color);
    color: var(--game-title-text-color);

    & h3 {
      text-align: center;
      height: 100%;
      max-height: 100%;
    }
  }

  & img {
    width: 100%;
    /* height: calc(100% - 58px); */
    object-fit: fill;
    vertical-align: middle;
  }
}
</style>
