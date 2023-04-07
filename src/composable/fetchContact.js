import axios from "axios";

export default function fetchData() {
  const getContactList = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.contact;
    } catch (error) {
      console.error(error);
    }
  };
  /* get single contact */
  const getContact = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  };
  const sendContact = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  /* update contsct */
  const updateContact = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const deleteContact = async (url) => {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return {
    getContactList,
    sendContact,
    deleteContact,
    getContact,
    updateContact,
  };
}
