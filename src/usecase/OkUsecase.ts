import { PostService } from "../service/PostService";
import { IdService } from "../service/IdService";
import { UserService } from "../service/UserService";

export class OkUsecase {
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
    return new OkUsecase(idService, postService, userService);
  }

  getOkStatusCode() {
    return this.userService.getUsers();
  }
}
