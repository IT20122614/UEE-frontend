import http from "./httpService";
import * as SecureStore from "expo-secure-store";

const endpoint = "/user";

export async function saveUser(data) {
  return await http.post(endpoint + "/save", data, {
    headers: { Authorization: "" },
  });
}
