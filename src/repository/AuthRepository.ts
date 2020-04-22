import { data } from "../db/memory";
import { PID, PostType } from "../type";
import { Post } from "../entity/Post";

export class AuthRepository {
  constructor() {}

  static of() {
    return new AuthRepository();
  }

  getWillLoginUserRecord(id: number) {
    const selectedPost = data.authorization.find(
      (record) => record.user_id === id
    );
    if (!selectedPost) {
      throw new Error("not found");
    }
    return selectedPost;
  }
}
