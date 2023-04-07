<template>
  <!-- component -->
  <div class="bg-gray-50 min-h-screen">
    <div>
      <div class="p-4">
        <div class="bg-white p-4 rounded-md">
          <div>
            <h2 class="mb-4 text-xl font-bold text-gray-700">Admin & User</h2>
            <div>
              <div>
                <div
                  class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md"
                >
                  <div>
                    <span>Id</span>
                  </div>
                  <div>
                    <span>Name</span>
                  </div>
                  <div>
                    <span>Email</span>
                  </div>
                  <div>
                    <span>Designation</span>
                  </div>
                  <div>
                    <span>Contact-No</span>
                  </div>
                  <div>
                    <span>Edit</span>
                  </div>
                  <div>
                    <span>Action</span>
                  </div>
                </div>
                <div>
                  <div v-if="loading">fetching contact...</div>
                  <div
                    v-for="contact in contacts"
                    :key="contact.id"
                    class="flex justify-between border-t text-sm font-normal mt-4 space-x-4"
                  >
                    <div class="px-2 flex">
                      <span> {{ contact.id }} </span>
                    </div>
                    <div class="px-2 flex">
                      <span> {{ contact.name }} </span>
                    </div>
                    <div>
                      <span> {{ contact.email }} </span>
                    </div>
                    <div class="px-2">
                      <span> {{ contact.designation }} </span>
                    </div>
                    <div class="px-2">
                      <span>
                        {{ contact.contact_no }}
                      </span>
                    </div>
                    <router-link
                      :to="{ name: 'EditContact', params: { id: contact.id } }"
                      class="px-2 border border-green-400 cursor-pointer"
                    >
                      <span>Edit</span>
                    </router-link>
                    <div
                      class="px-2 border border-red-400 cursor-pointer"
                      @click="deleteContactClick(contact.id)"
                    >
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import fetchData from "../composable/fetchContact";
export default {
  name: "contactList",
  setup() {
    const { getContactList, deleteContact } = fetchData();
    const contacts = ref([]);
    const delCont = ref("");
    const loading = ref(false);

    onMounted(() => {
      getAllContactList();
    });

    async function getAllContactList() {
      loading.value = true;
      try {
        contacts.value = await getContactList(
          "http://127.0.0.1:8000/api/contact"
        );
        console.log(contacts.value, "me");
      } catch (error) {
      } finally {
        loading.value = false;
      }
    }

    async function deleteContactClick(id) {
      try {
        delCont.value = await deleteContact(
          `http://127.0.0.1:8000/api/delete_contact/${id}`
        );
        console.log(delCont);
        getAllContactList();
      } catch (error) {
        console.log(error);
      }
    }

    return { contacts, deleteContactClick, loading };
  },
};
</script>

<style>
</style>