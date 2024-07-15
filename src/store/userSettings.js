import { defineStore } from "pinia";

export const useUserSettingsStore = defineStore("userSettings", {
  state: () => ({
    /**@type {'light' | 'dark'}*/
    theme: localStorage.getItem("theme") || "light",
    /**@type {'en' | 'ru'}*/
    language: "en",
    /**@type {'sm' | 'md' | 'lg'}*/
    fontSize: "md",
    /**@type {'alphabetical' | 'date_added'}*/
    defaultListSortOrder: "",
    /**@type {( 'is_completed' | 'is_favourite' )[]}*/
    defaultListFilterSettings: [],
    /**@type {true | false}*/
    hideEmptyLists: false,
  }),
  getters: {
    userSettings(state) {
      return {
        ...state,
      };
    },
  },
  actions: {
    changeLanguage(value) {
      this.language = value;
    },
    changeTheme(value) {
      this.theme = value;
      document.body.setAttribute("data-theme", value);
      localStorage.setItem("theme", value);
      console.log(value, this.theme);
    },
    changefontSize(value) {
      this.fontSize = value;
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
