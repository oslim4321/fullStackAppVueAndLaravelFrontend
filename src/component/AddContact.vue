<template>
  <!-- component -->
  <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="mx-auto w-full max-w-[550px]">
      <form @click.prevent="sendData">
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Name
          </label>
          <input
            v-model="name"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email
          </label>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="subject"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Designation
          </label>
          <input
            v-model="designation"
            type="text"
            name="designation"
            id="designation"
            placeholder="Enter Designation"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="subject"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            contact No
          </label>
          <input
            v-model="contact_no"
            type="text"
            name="contact_no"
            id="contact_no"
            placeholder="22-333-555-66-777"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div>
          <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import fetchData from "../composable/fetchContact";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { sendContact } = fetchData();
    const name = ref(null);
    const email = ref(null);
    const designation = ref(null);
    const contact_no = ref(null);
    const router = useRouter();

    async function sendData(e) {
      const data = {
        name: name.value,
        email: email.value,
        designation: designation.value,
        contact_no: contact_no.value,
      };
      if (data.name && data.email && data.designation && data.contact_no) {
        const res = await sendContact(
          "http://127.0.0.1:8000/api/save_contact",
          data
        );
        router.push("/");
        console.log(res);
      }
    }

    return { name, email, designation, contact_no, sendData };
  },
};
</script>

<style>
</style>