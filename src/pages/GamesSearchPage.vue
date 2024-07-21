<script setup>
import { ref } from "vue";
import BaseCard from "@/components/BaseCard.vue";
import { fakeGamesListResponse } from "@/data/fakeGamesList.js";

const gamesList = ref(fakeGamesListResponse?.results || []);
console.log(gamesList.value);
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
          <img :src="game.image.super_url" alt="" />
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
  height: 174px;
  background-color: #39393b;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  & img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
}
</style>
