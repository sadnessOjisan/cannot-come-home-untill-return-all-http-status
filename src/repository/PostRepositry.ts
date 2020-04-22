import { data } from "../db/memory";
import { PID, PostType } from "../type";
import { Post } from "../entity/Post";

export class PostRepositry {
  constructor() {}

  static of() {
    return new PostRepositry();
  }

  getPost(id: PID) {
    const selectedPost = data.post.find((p) => p.id === id);
    if (!selectedPost) {
      throw new Error("not found");
    }
    return this.convertEntity(selectedPost);
  }

  private convertEntity = (data: PostType) => {
    return Post.of(data.id, data.content);
  };
}
