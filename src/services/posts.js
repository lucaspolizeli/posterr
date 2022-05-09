import { localStorageKeys } from "../constants/local-storage-keys";
import { v4 as uuidv4 } from "uuid";
import { postsMock } from "../__mocks__/posts";
import { userService } from "./user";
import { postType } from "../constants/post-type";

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

  async addQuotePost({ postId, userId, text }) {
    return new Promise(async (resolve, reject) => {
      try {
        const allPosts = await postsService.getAllPosts();
        const user = await userService.getUserById({ id: userId });

        const postToQuote = allPosts.find((post) => post.id === postId);

        const postsWithNewPost = allPosts.unshift({
          text,
          id: uuidv4(),
          author: user,
          createdBy: user,
          type: postType.QUOTE,
          createdAt: new Date().getTime(),
          quote: {
            text: postToQuote.text,
            author: postToQuote.createdBy,
          },
        });

        localStorage.setItem(
          localStorageKeys.POSTS,
          JSON.stringify(postsWithNewPost)
        );

        resolve();
      } catch (error) {
        reject({ error: "Error to add post, try again later." });
      }
    });
  },

  async repost({ postId, userId }) {
    return new Promise(async (resolve, reject) => {
      try {
        const allPosts = await postsService.getAllPosts();
        const user = await userService.getUserById({ id: userId });

        const postToRepost = allPosts.find((post) => post.id === postId);

        const postsWithNewPost = allPosts.unshift({
          id: uuidv4(),
          createdBy: user,
          type: postType.REPOST,
          text: postToRepost.text,
          author: postToRepost.createdBy,
          createdAt: new Date().getTime(),
        });

        localStorage.setItem(
          localStorageKeys.POSTS,
          JSON.stringify(postsWithNewPost)
        );

        resolve();
      } catch (error) {
        reject({ error: "Error to add post, try again later." });
      }
    });
  },

  async addNewPost({ userId, postText }) {
    return new Promise(async (resolve, reject) => {
      try {
        const allPosts = await postsService.getAllPosts();
        const user = await userService.getUserById({ id: userId });

        const postsWithNewPost = allPosts.unshift({
          id: uuidv4(),
          type: "post",
          author: user,
          text: postText,
          createdBy: user,
          createdAt: new Date().getTime(),
        });

        localStorage.setItem(
          localStorageKeys.POSTS,
          JSON.stringify(postsWithNewPost)
        );

        resolve();
      } catch (error) {
        reject({ error: "Error to add post, try again later." });
      }
    });
  },
};
