import { PID } from "../type";
import { PostRepositry } from "../repository/PostRepositry";

export class PostService {
  private constructor(private repository: PostRepositry) {}

  static of(repository: PostRepositry) {
    return new PostService(repository);
  }

  getPost(id: PID) {
    // TODO: 業務チェック
    return this.repository.getPost(id);
  }
}
