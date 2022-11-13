import http from "./httpService";
import * as SecureStore from "expo-secure-store";

const endpoint = "/user";

export async function saveUser(data) {
  return await http.post(endpoint + "/save", data, {
    headers: { Authorization: "" },
  });
}
export async function getUser() {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;
  const id = await SecureStore.getItemAsync("userId");
  return await http.get(endpoint + `/${id}`, {
    headers: { Authorization: header },
  });
}