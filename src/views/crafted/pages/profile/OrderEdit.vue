<template>
     <el-form
            id="kt_modal_new_target_form"
            @submit.prevent="submit()"
            :model="targetData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
          {{ targetData }}
            <div class="mb-13">
              <h1 class="mb-3">Add Order</h1>
            </div>
            <div class="row g-9">
              <div class="col-md-2 flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Number</span>
              </label>
              <el-form-item prop="number">
                <el-input
                  v-model="targetData.number"
                  placeholder="Enter Target Title"
                  name="number"
                ></el-input>
              </el-form-item>
            </div>
            <div class="col-md-2 flex-column mb-8 fv-row">
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Description</span>
              </label>
              <el-form-item prop="description">
                <el-input
                  v-model="targetData.description"
                  placeholder="Description"
                  name="description"
                ></el-input>
              </el-form-item>
            </div>
            </div>
            <div class="row g-9 mb-8">
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">Assign</label>
                <el-form-item prop="assign">
                  <el-select
                    v-model="targetData.assign"
                    placeholder="Select a Team Member"
                    name="assign"
                    as="select"
                  >
                    <el-option value="">Select user...</el-option>
                    <el-option label="Karina Clark" value="1"
                      >Karina Clark</el-option
                    >
                    <el-option label="Robert Doe" value="2"
                      >Robert Doe</el-option
                    >
                    <el-option label="Niel Owen" value="3">Niel Owen</el-option>
                    <el-option label="Olivia Wild" value="4"
                      >Olivia Wild</el-option
                    >
                    <el-option label="Sean Bean" value="5">Sean Bean</el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">Due Date</label>

                <!--begin::Input-->
                <div class="position-relative align-items-center">
                  <!--begin::Datepicker-->
                  <el-form-item prop="dueDate">
                    <el-date-picker
                      v-model="targetData.dueDate"
                      type="date"
                      placeholder="Select a date"
                      :teleported="false"
                      popper-class="override-styles"
                      name="dueDate"
                    />
                  </el-form-item>
                  <!--end::Datepicker-->
                </div>
                <!--end::Input-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8">
              <label class="fs-6 fw-semobold mb-2">Target Details</label>

              <el-form-item prop="targetDetails">
                <el-input
                  v-model="targetData.targetDetails"
                  type="textarea"
                  rows="3"
                  name="targetDetails"
                  placeholder="Type Target Details"
                />
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">Tags</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a target priorty"
                ></i>
              </label>
              <!--end::Label-->

              <el-form-item prop="tags">
                <el-select
                  v-model="targetData.tags"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="Choose tags for your target"
                >
                  <el-option label="Important" value="important"> </el-option>
                  <el-option label="Urgent" value="urgent"> </el-option>
                  <el-option label="High" value="high"> </el-option>
                  <el-option label="Low" value="low"> </el-option>
                  <el-option label="Medium" value="medium"> </el-option>
                </el-select>
              </el-form-item>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-stack mb-8">
              <!--begin::Label-->
              <div class="me-5">
                <label class="fs-6 fw-semobold"
                  >Adding Users by Team Members</label
                >

                <div class="fs-7 fw-semobold text-gray-400">
                  If you need more info, please check budget planning
                </div>
              </div>
              <!--end::Label-->

              <!--begin::Switch-->
              <label
                class="form-check form-switch form-check-custom form-check-solid"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="1"
                  checked
                />
                <span class="form-check-label fw-semobold text-gray-400">
                  Allowed
                </span>
              </label>
              <!--end::Switch-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="mb-15 fv-row">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack">
                <!--begin::Label-->
                <div class="fw-semobold me-5">
                  <label class="fs-6">Notifications</label>

                  <div class="fs-7 text-gray-400">
                    Allow Notifications by Phone or Email
                  </div>
                </div>
                <!--end::Label-->

                <!--begin::Checkboxes-->
                <div class="d-flex align-items-center">
                  <!--begin::Checkbox-->
                  <label
                    class="form-check form-check-custom form-check-solid me-10"
                  >
                    <input
                      class="form-check-input h-20px w-20px"
                      type="checkbox"
                      name="communication[]"
                      value="email"
                      checked
                    />

                    <span class="form-check-label fw-semobold"> Email </span>
                  </label>
                  <!--end::Checkbox-->

                  <!--begin::Checkbox-->
                  <label class="form-check form-check-custom form-check-solid">
                    <input
                      class="form-check-input h-20px w-20px"
                      type="checkbox"
                      name="communication[]"
                      value="phone"
                    />

                    <span class="form-check-label fw-semobold"> Phone </span>
                  </label>
                  <!--end::Checkbox-->
                </div>
                <!--end::Checkboxes-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
              <button
                type="reset"
                id="kt_modal_new_target_cancel"
                class="btn btn-light me-3"
              >
                Cancel
              </button>

              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span v-if="!loading" class="indicator-label">
                  Create
                </span>
                <span v-if="loading" class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <!--end::Button-->
            </div>
            <!--end::Actions-->
          </el-form>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useOrderStore } from "@/stores/order";


interface NewAddressData {
  number: number,
  description: string;
  assign: string;
  dueDate: string;
  targetDetails: string;
  tags: Array<string>;
}

export default defineComponent({
  name: "new-target-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const store = useOrderStore();

    const targetData = ref<NewAddressData>({
      number: 0,
      description: '',
      assign: "",
      dueDate: "",
      targetDetails: "",
      tags: ["important", "urgent"],
    });

    const rules = ref({
      targetTitle: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      assign: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      dueDate: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      tags: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
    });

    const submit = async () => {
      if (!formRef.value) {
        return;
      }
      console.log(targetData.value);
      
      const res = await store.createOrder(targetData.value)
      console.log(res);

      formRef.value.validate((valid: boolean) => {
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              hideModal(newTargetModalRef.value);
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      targetData,
      submit,
      loading,
      formRef,
      rules,
      newTargetModalRef,
      getAssetPath,
    };
  },
});
</script>