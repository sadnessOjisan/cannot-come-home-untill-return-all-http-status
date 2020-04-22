import { PostService } from "../service/PostService";
import { IdService } from "../service/IdService";
import { UserService } from "../service/UserService";
import { Request } from "express";
import { ShouldHandleError } from "../helper/ShouldHandleError";
import { ERROR_CODE } from "../const/Error";

export class UserGetUsecase {
  private constructor(
    private idService: IdService,
    private postService: PostService,
    private userService: UserService
  ) {}

  static of(
    idService: IdService,
    postService: PostService,
    userService: UserService
  ) {
    return new UserGetUsecase(idService, postService, userService);
  }

  getUsers() {
    return this.userService.getUsers();
  }

  getMe(request: Request) {
    const cookies = request.cookies as Record<string, any>;
    const token = cookies.httpstatuszenbukaesuzo;
    if (!token) {
      throw new ShouldHandleError(ERROR_CODE.UNAUTH);
    }
    const user = this.userService.getUserByToken(token);
    return user;
  }
}
