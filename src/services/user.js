import { localStorageKeys } from "../constants/local-storage-keys";
import { usersMock } from "../__mocks__/users";

export const userService = {
  populate() {
    const hasUsers = localStorage.getItem(localStorageKeys.USERS);
    if (hasUsers) return;

    localStorage.setItem(localStorageKeys.USERS, JSON.stringify(usersMock));
  },

  async getUserById({ id }) {
    return new Promise((resolve, reject) => {
      userService.populate();

      try {
        const responseFromAPI = localStorage.getItem(localStorageKeys.USERS);
        const userParsedToJSON = JSON.parse(responseFromAPI);

        const filteredUser = userParsedToJSON.find((user) => user.id === id);

        if (filteredUser) {
          resolve(filteredUser);
        } else {
          reject({ error: "User not found" });
        }
      } catch (error) {
        reject({ error: "Error to fetch data, try again later." });
      }
    });
  },
};

const followers = [{ followingUserId: 1, followerUserId: 2 }];
