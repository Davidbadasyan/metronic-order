<template>
  <div class="row g-9">
    <div class="col-md-6 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Number</span>
      </label>
      <el-form-item prop="number">
        <el-input v-model="orderData.number" placeholder="Enter Target Title" name="number" />
      </el-form-item>
    </div>
    <div class="col-md-6 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Weight</span>
      </label>
      <el-form-item prop="weight">
        <el-input v-model="orderData.weight" placeholder="Weight" name="weight" />
      </el-form-item>
    </div>
  </div>
  <div class="d-flex flex-column mb-8">
    <label class="fs-6 fw-semobold mb-2">Description</label>

    <el-form-item prop="description">
      <el-input v-model="orderData.description" type="textarea" rows="3" name="description"
        placeholder="Type Description" />
    </el-form-item>
  </div>
  <div class="row g-9">
    <h3>Address</h3>
    <div class="col-md-2 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Street</span>
      </label>
      <el-form-item prop="street">
        <el-input v-model="orderData.address.street" placeholder="Enter Street" name="Street" />
      </el-form-item>
    </div>
    <div class="col-md-2 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">City</span>
      </label>
      <el-form-item prop="city">
        <el-input v-model="orderData.address.city" placeholder="city" name="city" />
      </el-form-item>
    </div>
    <div class="col-md-2 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">State</span>
      </label>
      <el-form-item prop="state">
        <el-input v-model="orderData.address.state" placeholder="state" name="state" />
      </el-form-item>
    </div>
    <div class="col-md-2 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Country</span>
      </label>
      <el-form-item prop="country">
        <el-input v-model="orderData.address.country" placeholder="Country" name="country" />
      </el-form-item>
    </div>
    <div class="col-md-2 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Zip Code</span>
      </label>
      <el-form-item prop="zipCode">
        <el-input v-model="orderData.address.zipCode" placeholder="zipCode" name="zipCode" />
      </el-form-item>
    </div>
  </div>

  <h3 v-if="orderData.items.length">Items</h3>
  <div class="row g-9" v-for="(item, index) in orderData.items" :key="index">
    <div class="col-md-3 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Product Name</span>
      </label>
      <el-form-item prop="productName">
        <el-input v-model="item.productName" placeholder="Product Name" name="productName" />
      </el-form-item>
    </div>
    <div class="col-md-3 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Unit Price</span>
      </label>
      <el-form-item prop="unitPrice">
        <el-input v-model="item.unitPrice" placeholder="Unit Price" name="unitPrice" />
      </el-form-item>
    </div>
    <div class="col-md-3 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Dis Count</span>
      </label>
      <el-form-item prop="discount">
        <el-input v-model="item.discount" placeholder="Dis Count" name="discount" />
      </el-form-item>
    </div>
    <div class="col-md-2 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">Units</span>
      </label>
      <el-form-item prop="weight">
        <el-input v-model="item.units" placeholder="Units" name="units" />
      </el-form-item>
    </div>
    <div v-if="orderData.items.length > 1" class="col-md-1 flex-column mb-8 fv-row">
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span>Delete Item</span>
      </label>
      <button class="btn btn-sm fw-bold btn-primary mb-3" @click="deleteItem(index)">
        Delete
      </button>
    </div>
  </div>
  <button type="button" class="btn btn-primary" @click="addItem">
    Add Item
  </button>
  <div class="d-flex text-center justify-content-end">
    <button id="kt_modal_new_target_cancel" type="reset" class="btn btn-light me-3" @click='redirectToOrdersList'>
      Cancel
    </button>
    <button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg btn-primary" @click="submit()">
      <span v-if="!loading" class="indicator-label">
        Save
      </span>
      <span v-if="loading" class="indicator-progress">
        Please wait...
        <span class="spinner-border spinner-border-sm align-middle ms-2" />
      </span>
    </button>
    <!--end::Button-->
  </div>
  <!--end::Actions-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { getAssetPath } from '@/core/helpers/assets';
import { useOrderStore } from '@/stores/order';
import { useRouter, useRoute } from "vue-router";
import { OrderFactory } from '@/models/orders/OrderFactory';


export default defineComponent({
  name: 'NewTargetModal',
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const orderId = ref<string>('')
    const store = useOrderStore();
    const router = useRouter();
    const route = useRoute();

    let orderData = ref<IOrderRequest>(OrderFactory.createDefaultOrder());
    // let orderData = ref<NewOrderData>({
    //   id: 0,
    //   number: '',
    //   weight: 0,
    //   paymentMethodId: 1,
    //   shippingMethodId: 1,
    //   weightUnitId: 1,
    //   description: '',
    //   items: [{productName: '', unitPrice: 0, discount: 0, units: 0}],
    //   address: {
    //     street: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     zipCode: 0,
    //   },
    // });
    onMounted(async () => {
      orderId.value = route.params.orderId as string;
      if (orderId.value) {
        const order = await store.getOrder(orderId.value)
        orderData.value = { ...order }
      }
    })
    const rules = ref({
      number: [
        {
          // required: true,
          message: 'Please input Name',
          trigger: 'blur',
        },
      ],
      targetTitle: [
        {
          // required: true,
          message: 'Please input Activity name',
          trigger: 'blur',
        },
      ],
      assign: [
        {
          // required: true,
          message: 'Please select Activity zone',
          trigger: 'change',
        },
      ],
      dueDate: [
        {
          // required: true,
          message: 'Please select Activity zone',
          trigger: 'change',
        },
      ],
      tags: [
        {
          // required: true,
          message: 'Please select Activity zone',
          trigger: 'change',
        },
      ],
    });

    const submit = async () => {
      loading.value = true;
      if (orderId.value) {
        const res = await store.updateOrder(orderData.value, orderId.value)
        if (res) {
          loading.value = false;
          return router.push({ name: 'orders' });
        }
      }
      const res = await store.createOrder(orderData.value);
      if (res) {
        loading.value = false;
        router.push({ name: 'orders' })
      }
    };

    const redirectToOrdersList = () => {
      router.push({ name: 'orders' })
    }

    const addItem = () => {
      orderData.value.items.push(OrderFactory.createDefaultOrderItem())
    }
    const deleteItem = (index: number) => {
      orderData.value.items = orderData.value.items.filter((el, i) => index !== i)
    }

    return {
      orderData,
      submit,
      loading,
      formRef,
      rules,
      newTargetModalRef,
      getAssetPath,
      redirectToOrdersList,
      addItem,
      deleteItem,
    };
  },
});
</script>