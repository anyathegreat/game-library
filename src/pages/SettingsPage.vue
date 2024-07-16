<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useUserSettingsStore } from "@/store/userSettings";

const userSettingsStore = useUserSettingsStore();
const { theme, language, fontSize } = storeToRefs(userSettingsStore);
const { changeTheme, changeLanguage, changeFontSize } = userSettingsStore;

const currentTheme = computed({
  get() {
    return theme.value;
  },
  set(value) {
    changeTheme(value);
  },
});
const currentLanguage = computed({
  get() {
    return language.value;
  },
  set(value) {
    changeLanguage(value);
  },
});
const currentFontSize = computed({
  get() {
    return fontSize.value;
  },
  set(value) {
    changeFontSize(value);
  },
});
</script>

<template>
  <div class="v-page-container">
    <h1>Settings</h1>
    <div class="v-settings-section">
      <h2 class="v-settings-section-title">Appearance Settings</h2>
      <div class="v-fields-group">
        <label for="settings-theme">Theme</label>
        <select id="settings-theme" name="theme" class="v-settings-input" v-model="currentTheme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div class="v-fields-group">
        <label for="settings-language">Language</label>
        <select id="settings-language" name="language" class="v-settings-input" v-model="currentLanguage">
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
      <div class="v-fields-group">
        <label for="settings-fontSize">Font Size</label>
        <select id="settings-fontSize" name="fontSize" class="v-settings-input" v-model="currentFontSize">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>
    </div>
    <hr />
    <div class="v-settings-section">
      <h2>Lists Settings</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-page-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.v-settings-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.v-settings-section-title {
  font-size: 1.6em;
  margin: 0.33em 0;
}
.v-fields-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.v-settings-input {
  max-width: 300px;
  height: 1.7rem;
}
</style>
