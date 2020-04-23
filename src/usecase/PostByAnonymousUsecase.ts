import { PostService } from "../service/PostService";
import { Request } from "express";
import { ShouldHandleError } from "../helper/ShouldHandleError";
import { ERROR_CODE } from "../const/Error";

export class PostByAnonymousUsecase {
  private constructor(private postService: PostService) {}

  static of(postService: PostService) {
    return new PostByAnonymousUsecase(postService);
  }

  postByAnonymous(request: Request) {
    const { content } = request.body;
    const { validcontent } = this._validation(content);
    return this.postService.postByAnonymous(validcontent);
  }

  _validation(content: any) {
    if (!content) {
      throw new ShouldHandleError(ERROR_CODE.MISSING_CONTENT);
    }
    if (typeof content !== "string") {
      throw new ShouldHandleError(ERROR_CODE.INVALID_CONTENT);
    }
    return { validcontent: content };
  }
}
