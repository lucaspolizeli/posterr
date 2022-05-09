export const postsMock = [
  {
    id: "33f6f7d7-d52b-436f-9dc3-4a603abeeee6",
    createdAt: 1652064984400,
    author: {
      id: "797f6ce2-9f14-4c46-bf5e-05d446b34c84",
      user: "lucas",
    },
    type: "quote",
    text: `Hey, I'm testing it. How are you?`,
    createdBy: {
      id: "797f6ce2-9f14-4c46-bf5e-05d446b34c84",
      user: "lucas",
    },
    quote: {
      author: { id: "6b25eda9-14e7-4874-b1fd-9b3c093a26b4", user: "arnold" },
      text: `Hey, I want to know if someone use this social network.`,
    },
  },
  {
    id: "33f6f7d7-d52b-436f-9dc3-4a603abeeee6",
    createdAt: 1652064995173,
    author: { id: "6b25eda9-14e7-4874-b1fd-9b3c093a26b4", user: "arnold" },
    type: "post",
    text: `Hey, I want to know if someone use this social network.`,
    createdBy: {
      id: "6b25eda9-14e7-4874-b1fd-9b3c093a26b4",
      user: "arnold",
    },
  },
];
