<script setup>
import { computed, onMounted, ref } from "vue";
import router from "@/router";
import BaseCard from "@/components/BaseCard.vue";
import { fakePagesArray } from "@/data/fakeGamesList.js";

const gamesList = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);

const squareImageUrl = computed(() => {
  return (url) => {
    return url.replace("square_mini", "square_medium");
  };
});

const handleOpenDetails = (id) => {
  router.push(`/game-details/${id}`);
};

function getPage(page) {
  const { results, number_of_total_results, offset, limit } = fakePagesArray[page - 1] || {};
  const pages = number_of_total_results / limit || 0;
  gamesList.value = results || [];
  totalPages.value = Math.ceil(pages);
  currentPage.value = offset / limit + 1;
}

function handleFirstPage() {
  getPage(1);
}
function handlePrevPage() {
  if (currentPage.value > 1) {
    getPage(currentPage.value - 1);
  }
}
function handleSelectedPage(page) {
  if (currentPage.value !== page) {
    getPage(page);
  }
}
function handleNextPage() {
  if (currentPage.value < totalPages.value) {
    getPage(currentPage.value + 1);
  }
}
function handleLastPage() {
  getPage(totalPages.value);
}

onMounted(() => {
  getPage(currentPage.value);
});
</script>

<template>
  <div class="v-page-container">
    <div class="v-page-search-container"></div>
    <div class="v-page-content-wrapper">
      <aside class="v-page-sidebar">
        <BaseCard vShadow :vBorder="false"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id nam laboriosam cumque nisi distinctio
          nobis blanditiis ipsam veritatis repellendus odit doloremque, cum excepturi ducimus perferendis quia iure
          architecto impedit. Perferendis minus nam consequuntur vero ut modi optio, laborum enim quod voluptatibus
          consequatur suscipit, eius quae pariatur vitae id praesentium natus veniam ex voluptates possimus. Tenetur
          quasi cumque sed adipisci! Saepe in quasi numquam repudiandae illum autem quas, architecto impedit,
          perferendis pariatur dolor doloremque aliquid iste sapiente officia corporis obcaecati maxime odio minima
          natus. Minus reiciendis consequuntur voluptatibus incidunt labore. Ipsa, soluta? Dolores vel excepturi
          possimus hic architecto minus ipsa minima deleniti rerum, nulla atque totam quos tenetur illo necessitatibus
          ipsum nobis quis vero quibusdam tempore aperiam sint quam placeat?</BaseCard
        >
      </aside>
      <div class="v-page-games-container">
        <div class="v-page-games-list">
          <BaseCard
            v-for="game in gamesList"
            :key="game.id"
            vOverflow="hidden"
            class="v-page-card"
            @click="handleOpenDetails(game.guid)"
          >
            <img :src="squareImageUrl(game.image.tiny_url)" alt="" />
            <div class="game-title">
              <h3>{{ game.name }}</h3>
            </div>
          </BaseCard>
        </div>
        <div class="v-page-pagination-container">
          <button class="v-pagination-button" :disabled="currentPage === 1" @click="handleFirstPage">&lt;&lt;</button>
          <button class="v-pagination-button v-button-prev" :disabled="currentPage <= 1" @click="handlePrevPage">
            &lt;
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            :disabled="page === currentPage"
            :class="{ 'v-pagination-button': true, 'v-pagination-button-current': currentPage === page }"
            @click="handleSelectedPage(page)"
          >
            {{ page }}
          </button>
          <button
            class="v-pagination-button v-button-next"
            :disabled="currentPage >= totalPages"
            @click="handleNextPage"
          >
            &gt;
          </button>
          <button
            class="v-pagination-button"
            :disabled="currentPage === totalPages || totalPages < 2"
            @click="handleLastPage"
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-page-content-wrapper {
  position: relative;
  display: flex;
  gap: 14px;
  min-height: calc(100dvh - 240px);
  height: 1px;
}

.v-page-sidebar {
  flex: 3;
}

.v-page-games-list {
  display: grid;
  grid-template-columns: repeat(4, 174px);
  grid-auto-rows: 224px;
  grid-gap: 16px;
  width: 100%;
  justify-content: space-evenly;
  align-items: start;
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
    padding: 2px 6px;
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
.v-page-games-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.v-page-pagination-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: end;
  gap: 2px;
}
.v-pagination-button-current {
  transform: translateY(-4px);
}
.v-button-prev {
  margin-right: 4px;
}
.v-button-next {
  margin-left: 4px;
}
</style>
