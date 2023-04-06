import { ref } from 'vue';
import { defineStore } from 'pinia';
import ApiService from '@/core/services/ApiService';

export const useOrderStore = defineStore('order', () => {
  const errors = ref({});

  function setError(error) {
    errors.value = { ...error };
  }

  function createOrder(body) {
    console.log(body);
    return ApiService.post('asdasd', body)
      .then(({ data }) => data)
      .catch(({ data }) => {
        setError(data.errors);
      });
  }

  return {
    errors,
    createOrder,
  };
});
