import { data } from "../db/memory";

export const injectInitData = () => {
  data.user.push({ id: 1, name: "taro" });
  data.authorization.push({
    user_id: 1,
    token: "initialToken",
    password: "pass",
  });
  data.post.push({ id: 1, content: "I am Taro", user_id: 1 });
  data.userSequentialId = 1;
};
