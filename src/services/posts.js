import { localStorageKeys } from "../constants/local-storage-keys";
import { postsMock } from "../__mocks__/posts";

export const postsService = {
  populate() {
    const hasPosts = localStorage.getItem(localStorageKeys.POSTS);
    if (hasPosts) return;

    localStorage.setItem("posterr_posts", JSON.stringify(postsMock));
  },

  async getAllPosts() {
    return new Promise((resolve) => {
      postsService.populate();

      const responseFromAPI = localStorage.getItem(localStorageKeys.POSTS);
      const responseParsedToJSON = JSON.parse(responseFromAPI);

      resolve(responseParsedToJSON);
    });
  },
};
