<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { GamesService } from "@/services";
import { notification } from "@/utils";

const navigation = useRoute();

onMounted(() => {
  if (navigation?.params?.id) {
    GamesService.getGameDetails(navigation.params.id);
  } else {
    notification.error(`Invalid game ID`);
  }
});
</script>

<template>
  <h1>Game</h1>
</template>

<style scoped></style>
