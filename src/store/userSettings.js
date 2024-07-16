import { defineStore } from "pinia";

import { getObjectFromLocalStorage } from "@/utils";

const savedUserSettings = getObjectFromLocalStorage("userSettings");

const initValues = {
  theme: "light",
  language: "en",
  fontSize: "md",
  defaultListSortOrder: "",
  defaultListFilterSettings: [],
  hideEmptyLists: false,
  ...savedUserSettings,
};

export const useUserSettingsStore = defineStore("userSettings", {
  state: () => ({
    /**@type {'light' | 'dark'}*/
    theme: initValues.theme,
    /**@type {'en' | 'ru'}*/
    language: initValues.language,
    /**@type {'sm' | 'md' | 'lg'}*/
    fontSize: initValues.fontSize,
    /**@type {'alphabetical' | 'date_added'}*/
    defaultListSortOrder: initValues.defaultListSortOrder,
    /**@type {( 'is_completed' | 'is_favourite' )[]}*/
    defaultListFilterSettings: initValues.defaultListFilterSettings,
    /**@type {true | false}*/
    hideEmptyLists: initValues.hideEmptyLists,
  }),
  getters: {
    userSettings(state) {
      return {
        theme: state.theme,
        language: state.language,
        fontSize: state.fontSize,
        defaultListSortOrder: state.defaultListSortOrder,
        defaultListFilterSettings: state.defaultListFilterSettings,
        hideEmptyLists: state.hideEmptyLists,
      };
    },
  },
  actions: {
    saveToLocalStorage() {
      localStorage.setItem("userSettings", JSON.stringify(this.userSettings));
    },
    changeLanguage(value) {
      this.language = value;
    },
    changeTheme(value) {
      this.theme = value;
      document.body.setAttribute("data-theme", value);
      this.saveToLocalStorage();
    },
    changeFontSize(value) {
      this.fontSize = value;
      document.documentElement.classList.remove("font-size-sm", "font-size-md", "font-size-lg");
      document.documentElement.classList.add("font-size-" + value);
      this.saveToLocalStorage();
    },
    changeHideEmptyLists(value) {
      this.hideEmptyLists = value;
    },
    changeDefaultListSortOrder(value) {
      this.defaultListSortOrder = value;
    },
    changeDefaultListFilterSettings(values) {
      this.defaultListFilterSettings = [...values];
    },
  },
});
