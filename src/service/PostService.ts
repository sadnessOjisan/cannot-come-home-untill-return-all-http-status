import { PID } from "../type";
import { PostRepositry } from "../repository/PostRepositry";
import { ConfirmApiRepository } from "../repository/ConfirmApiRepository";

export class PostService {
  private constructor(
    private postRepository: PostRepositry,
    private confirmApiRepository: ConfirmApiRepository
  ) {}

  static of(
    postRepository: PostRepositry,
    confirmApiRepository: ConfirmApiRepository
  ) {
    return new PostService(postRepository, confirmApiRepository);
  }

  getPost(id: PID) {
    // TODO: 業務チェック
    return this.postRepository.getPost(id);
  }

  postByAnonymous(content: string) {
    this.confirmApiRepository.enqueConfirmStore(content);
  }
}
