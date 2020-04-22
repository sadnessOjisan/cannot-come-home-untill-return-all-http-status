import { PostService } from "../service/PostService";
import { IdService } from "../service/IdService";
import { UserService } from "../service/UserService";

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

  getUser() {
    return this.userService.getUsers();
  }
}
