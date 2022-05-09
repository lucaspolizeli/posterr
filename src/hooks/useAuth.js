import { useEffect, useState } from "react";
import { userService } from "../services/user";

export function useAuth() {
  const [userLoggedIn, setUserLoggedIn] = useState({});

  useEffect(() => {
    getUserLoggedInOnLoad();
  }, []);

  async function getUserLoggedInOnLoad() {
    const userLoggedIn = await userService.getUserLoggedIn();
    setUserLoggedIn(userLoggedIn);
  }

  return { userLoggedIn };
}
