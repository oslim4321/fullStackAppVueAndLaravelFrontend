import { createRouter, createWebHistory } from "vue-router";
import ContactList from "../component/ContactList.vue";
import AddContact from "../component/AddContact.vue";
import EditContact from "../component/EditContact.vue";

const routes = [
  {
    path: "/",
    name: "contactList",
    component: ContactList,
  },
  {
    path: "/AddContact",
    name: "AddContact",
    component: AddContact,
  },
  {
    path: "/edit_contact/:id",
    name: "EditContact",
    component: EditContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
