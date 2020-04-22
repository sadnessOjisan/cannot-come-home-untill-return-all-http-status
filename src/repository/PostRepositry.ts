import { data } from "../db/memory";
import { PID } from "../type";

export class PostRepositry {
  constructor() {}

  static of() {
    return new PostRepositry();
  }

  getPost(id: PID) {
    return data.post.find((p) => p.id === id);
  }
}
