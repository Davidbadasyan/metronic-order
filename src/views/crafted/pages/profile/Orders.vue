<template>
  <div>
    <!-- style="margin-top: -50px" -->
    <div class="d-flex justify-content-end">
    <button
      class="btn btn-sm fw-bold btn-primary mb-3"
      @click="redirectToAddOrder"
    >
      Add Order
    </button>
  </div>
    <div
      class="card card-flush"
      :class="className"
    >
      <!--begin::Body-->
      <div class="card-body pt-6">
        <!--begin::Table container-->
        <div class="table-responsive">
          <!--begin::Table-->
          <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
            <!--begin::Table head-->
            <thead>
              <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                <th class="p-0 pb-3 min-w-175px text-start">
                  Number
                </th>
                <th class="p-0 pb-3 min-w-100px text-end">
                  Weight
                </th>
                <th class="p-0 pb-3 min-w-100px text-end">
                  Price
                </th>
                <th class="p-0 pb-3 min-w-175px text-end pe-12">
                  STATUS
                </th>
                <th class="p-0 pb-3 w-50px text-end">
                  Edit
                </th>
              </tr>
            </thead>
            <!--end::Table head-->

            <!--begin::Table body-->
            <tbody>
              <template
                v-for="(row, i) in table"
                :key="i"
              >
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column">
                        <span class="text-gray-400 fw-semibold d-block fs-7">
                          {{ row.number }}</span>
                      </div>
                    </div>
                  </td>

                  <td class="text-end pe-0">
                    <span
                      class="text-gray-600 fw-bold fs-6"
                    >$ {{ row.price }}</span>
                  </td>

                  <td class="text-end pe-0">
                    <!--begin::Label-->
                    <span
                      v-if="row.icon"
                      class="badge badge-light-success fs-base"
                    >
                      <KTIcon
                        icon-name="arrow-up"
                        icon-class="fs-5 text-success ms-n1"
                      />
                      {{ row.statistics }} %
                    </span>
                    <!--end::Label-->
                    <!--begin::Label-->
                    <span
                      v-else
                      class="badge badge-light-danger fs-base"
                    >
                      <KTIcon
                        icon-name="arrow-down"
                        icon-class="fs-5 text-danger ms-n1"
                      />
                      {{ row.statistics }}
                    </span>
                    <!--end::Label-->
                  </td>

                  <td class="text-end pe-12">
                    <span
                      :class="`badge py-3 px-4 fs-7 badge-light-${row.status.state}`"
                    >{{ row.status.label }}</span>
                  </td>

                  <td class="text-end">
                    <button
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                      @click="redirectToUpdateOrder(i)"
                    >
                      <KTIcon
                        icon-name="black-right"
                        icon-class="fs-5 text-gray-700"
                      />
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
            <!--end::Table body-->
          </table>
        </div>
        <!--end::Table-->
      </div>
      <!--end: Card Body-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { getAssetPath } from '@/core/helpers/assets';

export default defineComponent({
  name: 'DefaultDashboardWidget10',
  components: {},
  props: {
    className: { type: String, required: false },
  },
  setup() {
    const router = useRouter();

    const table = [
      {
        number: 5464564,
        title: 'Mivy App',
        name: 'Jane Cooper',
        price: '32,400',
        statistics: '9.2',
        icon: true,
        chartColor: 'success',
        status: {
          label: 'In Process',
          state: 'primary',
        },
      },
      {
        number: 5464564,
        title: 'Avionica',
        name: 'Esther Howard',
        price: '256,910',
        statistics: '0.4',
        icon: false,
        chartColor: 'danger',
        status: {
          label: 'On Hold',
          state: 'warning',
        },
      },
      {
        number: 5464564,
        title: 'Charto CRM',
        name: 'Jenny Wilson',
        price: '8,220',
        statistics: '9.2',
        icon: true,
        chartColor: 'success',
        status: {
          label: 'In Process',
          state: 'primary',
        },
      },
      {
        number: 5464564,
        title: 'Tower Hill',
        name: 'Cody Fisher',
        price: '74,000',
        statistics: '9.2',
        icon: true,
        chartColor: 'success',
        status: {
          label: 'Completed',
          state: 'success',
        },
      },
      {
        number: 5464564,
        title: '9 Degree',
        name: 'Savannah Nguyen',
        price: '183,300',
        statistics: '0.4',
        icon: false,
        chartColor: 'danger',
        status: {
          label: 'In Process',
          state: 'primary',
        },
      },
    ];

    const redirectToUpdateOrder = (id: number) => {
      router.push({
        name: 'Edit Order',
        params: { orderId: id },
      });
    };

    const redirectToAddOrder = () => {
      router.push({ name: 'Add Order' });
    };

    return {
      table,
      getAssetPath,
      redirectToUpdateOrder,
      redirectToAddOrder,
    };
  },
});
</script>
