
  <template>
  <!-- component -->
  <div>
    <h2 class="text-3xl text-center">Edit Contact</h2>
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <form @click.prevent="sendData">
          <p v-if="error" class="text-red-500 capitalize">{{ error }}</p>
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              v-model="contactVal.name"
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
              v-model="contactVal.email"
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
              v-model="contactVal.designation"
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
              v-model="contactVal.contact_no"
              type="text"
              name="contact_no"
              id="contact_no"
              placeholder="22-333-555-66-777"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button
              @click="updateData"
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, ref } from "vue";
import fetchContact from "../composable/fetchContact";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const { getContact, updateContact } = fetchContact();
    const contactVal = ref("");
    const contact = ref();
    const updateVal = ref();
    const route = useRoute();
    const param = ref(route.params.id);
    const router = useRouter();

    console.log(route.params.id);
    onMounted(() => {
      getSingleContact();
    });

    async function getSingleContact() {
      try {
        contact.value = await getContact(
          `http://127.0.0.1:8000/api/get_contact/${param.value}`
        );
        console.log(contact.value);
        contactVal.value = contact.value;
      } catch (error) {
        console.log(error);
      }
    }
    //  console.log(contactVal.value), "mee";
    async function updateData() {
      try {
        updateVal.value = await updateContact(
          `http://127.0.0.1:8000/api/update_contact/${param.value}`,
          contactVal.value
        );
        router.push("/");
      } catch (error) {
        // console.log(error);
      }
    }

    return { contactVal, updateData };
  },
};
</script>

<style>
</style>