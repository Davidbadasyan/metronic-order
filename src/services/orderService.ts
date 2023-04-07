import { ref } from 'vue';
import { defineStore } from 'pinia';
import ApiService from '@/core/services/ApiService';

export const useOrderStore = defineStore('order', () => {
  const errors = ref({});

  function setError(error) {
    errors.value = { ...error };
  }

  function createOrder(body) {
    return ApiService.post('orders', body)
      .then(({ data }) => data)
      .catch(({ data }) => {
        setError(data?.errors);
      });
  }

  return {
    errors,
    createOrder,
  };
});
