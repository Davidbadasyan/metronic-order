import { ref } from 'vue';
import { defineStore } from 'pinia';
import ApiService from '@/core/services/ApiService';
import orderService from "@/core/services/orderService";


export const useOrderStore = defineStore('order', () => {
  const errors = ref({});

  function setError(error) {
    errors.value = { ...error };
  }

  function getOrder(orderId) {
    return orderService()
      .get(`orders/${orderId}`)
      .then(({ data }) => data)
  }

    function getOrders() {
        return orderService()
        .get('orders')
        .then(({ data }) => data)
        .catch(() => { });
    }

  function createOrder(body) {
    return orderService()
      .post('orders', body)
      .then(({ data }) => data)
      .catch(() => { });
 
  }

  function updateOrder(order, orderId){
    return orderService()
        .put(`orders/${orderId}`, order)
  }

  return {
    errors,
    createOrder,
    getOrder,
    getOrders,
    updateOrder,
  };
});
