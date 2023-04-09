import { ref } from 'vue';
import { defineStore } from 'pinia';
import ApiService from '@/core/services/ApiService';

export const useOrderStore = defineStore('order', () => {
  const errors = ref({});

  function setError(error) {
    errors.value = { ...error };
  }

  function getOrder(orderId) {
    return ApiService.get(`orders/${orderId}`)
      .then(({ data }) => data)
  }

  function getOrders() {
    return ApiService.get('orders')
      .then(({ data }) => data)
  }

  function createOrder(body) {
    return ApiService.post('orders', body)
      .then(({ data }) => data)
      .catch(({ data }) => {
        setError(data?.errors);
      });
  }

  function updateOrder(order, orderId){
    return ApiService.put(`orders/${orderId}`, order)
  }

  return {
    errors,
    createOrder,
    getOrder,
    getOrders,
    updateOrder,
  };
});
