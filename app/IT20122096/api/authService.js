import http from "./httpService";
import * as SecureStore from "expo-secure-store";
import JWT from "expo-jwt";
import jwtDecode from "jwt-decode";
const endPoint = "/auth";

export async function loginUser(data) {
  const user = { username: data.email, password: data.password };

  const response = await http.post(endPoint, user, {
    headers: { Authorization: "" },
  });
  await SecureStore.setItemAsync("locale", "en");
  await SecureStore.setItemAsync("secure_token", response.data.jwtToken);
  return response;
}
export async function logout() {
  await SecureStore.deleteItemAsync("secure_token");
  await SecureStore.deleteItemAsync("userId");
  await SecureStore.deleteItemAsync("locale");
}

export async function getCurrentUser() {
  try {
    const token = await SecureStore.getItemAsync("secure_token");
    const userData = jwtDecode(token);

    await SecureStore.setItemAsync("userId", userData.userId);
    return userData;
  } catch (error) {
    return null;
  }
}
