import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
    showSidebar: false,
  }),
});
