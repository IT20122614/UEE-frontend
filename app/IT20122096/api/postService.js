import http from "./httpService";
import * as SecureStore from "expo-secure-store";
const endpoint = "/post";

export async function savePost(data) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.post(endpoint + "/save", data, {
    headers: { Authorization: header },
  });
}
export async function getAllPosts() {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.get(endpoint + "/getAllPosts", {
    headers: { Authorization: header },
  });
}
export async function getAllPostsByUserId() {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;
  const userId = await SecureStore.getItemAsync("userId");
  console.log("userId", userId);

  return await http.get(endpoint + `/getAllPostsByUserId/${userId}`, {
    headers: { Authorization: header },
  });
}
export async function getPostsById(postId) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.get(endpoint + `/getPostsById/${postId}`, {
    headers: { Authorization: header },
  });
}
export async function deletePost(postId) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.delete(endpoint + `/deletePost/${postId}`, {
    headers: { Authorization: header },
  });
}
export async function addComment(data) {
  const token = await SecureStore.getItemAsync("secure_token");
  const header = "Bearer " + token;

  return await http.post(endpoint + "/addComment", data, {
    headers: { Authorization: header },
  });
}