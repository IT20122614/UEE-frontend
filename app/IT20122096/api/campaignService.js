import http from "./httpService";
import * as SecureStore from "expo-secure-store";
const endpoint = "/campaign";

export async function saveCampaign(data) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.post(endpoint + "/save", data, {
    headers: { Authorization: header },
  });
}

export async function getAllCampaign() {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.get(endpoint + "/getAllCampaigns", {
    headers: { Authorization: header },
  });
}
export async function getAllCampaignsByUserId() {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;
  const userId = await SecureStore.getItemAsync("userId");
  console.log("userId",userId)

  return await http.get(endpoint + `/getAllCampaignsByUser/${userId}`, {
    headers: { Authorization: header },
  });
}