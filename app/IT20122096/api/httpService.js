import axios from "axios";
axios.defaults.baseURL = "http://192.168.8.157:8080/api/v1";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  header:axios.defaults.headers.common
};
