import { localStorageKeys } from "../constants/local-storage-keys";
import { v4 as uuidv4 } from "uuid";
import { postsMock } from "../__mocks__/posts";
import { userService } from "./user";

export const postsService = {
  populate() {
    const hasPosts = localStorage.getItem(localStorageKeys.POSTS);
    if (hasPosts) return;

    localStorage.setItem(localStorageKeys.POSTS, JSON.stringify(postsMock));
  },

  async getAllPosts() {
    return new Promise((resolve, reject) => {
      postsService.populate();

      try {
        const responseFromAPI = localStorage.getItem(localStorageKeys.POSTS);
        const responseParsedToJSON = JSON.parse(responseFromAPI);

        resolve(responseParsedToJSON);
      } catch (error) {
        reject({ error: "Error to fetch data, try again later." });
      }
    });
  },

  async addNewPost({ userId, postText }) {
    return new Promise(async (resolve, reject) => {
      try {
        const allPosts = await postsService.getAllPosts();
        const user = await userService.getUserById({ id: userId });

        const postsWithNewPost = allPosts
          .push({
            id: uuidv4(),
            type: "post",
            author: user,
            text: postText,
            createdBy: user,
            createdAt: new Date().getTime(),
          })
          .reverse();

        localStorage.setItem(localStorageKeys.POSTS, postsWithNewPost);

        resolve();
      } catch (error) {
        reject({ error: "Error to fetch data, try again later." });
      }
    });
  },
};
