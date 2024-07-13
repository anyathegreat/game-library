<script setup></script>

<template>
  <footer class="v-footer">
    <div class="v-footer-privacy">
      <p>Game Library is a hobby project and is not affiliated with Game Bomb. All times on the site are UTC.</p>
      <p>All trademarks are property of their respective owners.</p>
    </div>
    <div class="v-footer-copyright">(c) 2024</div>
  </footer>
</template>

<style scoped lang="scss">
.v-footer {
  position: relative;
  padding: 8px;
  margin-top: auto;
  width: 100%;
  min-height: 80px;
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
}
.v-footer-privacy {
  width: 100%;

  p {
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
  }
}
.v-footer-copyright {
  width: 100%;
  text-align: center;
}
</style>
