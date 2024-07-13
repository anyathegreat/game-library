<script setup>
import BaseCard from '@/components/BaseCard.vue'
</script>

<template>
  <div class="v-page-container">
    <aside class="v-page-sidebar">
      <BaseCard vShadow :vBorder="false">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, praesentium? Excepturi tempora nesciunt non minus
        laborum veniam temporibus, earum dignissimos voluptate fugit neque optio, pariatur ipsam harum aspernatur sunt
        animi! Quos sit dicta tenetur eligendi tempore, adipisci alias nesciunt rem voluptatem consectetur quae
        necessitatibus, dignissimos id quis quam sapiente libero minima atque enim voluptas, sint a. Error minima
      </BaseCard>
    </aside>
    <div class="v-page-content">
      <div class="v-page-ads">
        <BaseCard class="v-ads-card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, praesentium? Excepturi tempora nesciunt non minus
          laborum veniam temporibus, earum dignissimos voluptate fugit neque optio, pariatur ipsam harum aspernatur sunt
          animi! Quos sit dicta tenetur eligendi tempore, adipisci alias nesciunt rem voluptatem consectetur quae
          necessitatibus, dignissimos id quis quam sapiente libero minima atque enim voluptas, sint a. Error minima
        </BaseCard>
        <BaseCard class="v-ads-card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, praesentium? Excepturi tempora nesciunt non minus
          laborum veniam temporibus, earum dignissimos voluptate fugit neque optio, pariatur ipsam harum aspernatur sunt
          animi! Quos sit dicta tenetur eligendi tempore, adipisci alias nesciunt rem voluptatem consectetur quae
          necessitatibus, dignissimos id quis quam sapiente libero minima atque enim voluptas, sint a. Error minima
        </BaseCard>
        <BaseCard class="v-ads-card"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </BaseCard>
      </div>
      <div class="v-page-filters">
        <BaseCard>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, praesentium? Excepturi tempora nesciunt non minus
          laborum veniam temporibus, earum dignissimos voluptate fugit neque optio, pariatur ipsam harum aspernatur sunt
          animi! Quos sit dicta tenetur eligendi tempore, adipisci alias nesciunt rem voluptatem consectetur quae
          necessitatibus, dignissimos id quis quam sapiente libero minima atque enim voluptas, sint a. Error minima
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-page-container {
  display: flex;
  gap: 14px;
}

.v-page-sidebar {
  flex: 3;
}
.v-page-content {
  display: flex;
  flex-direction: column;
  flex: 9;
  gap: 20px;
}
.v-page-ads {
  display: flex;
  gap: 12px;
  height: 120px;

  & .v-ads-card {
    flex: 1;
  }
}
</style>
