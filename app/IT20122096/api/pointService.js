import http from "./httpService";
import * as SecureStore from "expo-secure-store";
const endpoint = "/point";

export async function getAllPoints() {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.get(endpoint + "/getAllPoints", {
    headers: { Authorization: header },
  });
}
export async function getAllPointsByUserId() {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;
  const userId = await SecureStore.getItemAsync("userId");
  console.log("userId", userId);

  return await http.get(endpoint + `/getAllPointsByUserId/${userId}`, {
    headers: { Authorization: header },
  });
}
export async function getPointByUserId() {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;
  const userId = await SecureStore.getItemAsync("userId");
  console.log("userId", userId);

  return await http.get(endpoint + `/getPointByUserId/${userId}`, {
    headers: { Authorization: header },
  });
}