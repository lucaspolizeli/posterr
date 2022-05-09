export const postsMock = [
  {
    id: 2,
    createdAt: "",
    author: {
      id: 2,
      user: "lucas",
    },
    type: "quote",
    text: `Hey, I'm testing it. How are you?`,
    createdBy: {
      id: 2,
      user: "lucas",
    },
    quote: {
      author: { id: 1, user: "arnold" },
      text: `Hey, I want to know if someone use this social network.`,
    },
  },
  {
    id: 1,
    createdAt: "",
    author: { id: 1, user: "arnold" },
    type: "post",
    text: `Hey, I want to know if someone use this social network.`,
    createdBy: {
      id: 1,
      user: "arnold",
    },
  },
];
