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

  return await http.get(endpoint + `/getAllCampaignsByUser/${userId}`, {
    headers: { Authorization: header },
  });
}
export async function getCampaignById(campaignId) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;
  const userId = await SecureStore.getItemAsync("userId");

  return await http.get(endpoint + `/getCampaignById/${campaignId}`, {
    headers: { Authorization: header },
  });
}
export async function getAllContributors(campaignId) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.get(endpoint + `/getAllContributors/${campaignId}`, {
    headers: { Authorization: header },
  });
}
export async function saveContribution(data) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.post(endpoint + "/addContribution", data, {
    headers: { Authorization: header },
  });
}
export async function markAttendance(data) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.post(endpoint + "/markAttendance", data, {
    headers: { Authorization: header },
  });
}
export async function updateCampaign(data) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.post(endpoint + "/updateCampaign", data, {
    headers: { Authorization: header },
  });
}