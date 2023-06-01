import { defineStore } from 'pinia';

export const useIndexStore = defineStore('index', () => {
  const data = ref('');
  const getter = computed(() => data);
  function action(obj) {
    data.value = obj;
  }
  return { data, getter, action };
});
