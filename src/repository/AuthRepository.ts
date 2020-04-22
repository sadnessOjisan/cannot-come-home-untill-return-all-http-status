import { data } from "../db/memory";
import { ERROR_CODE } from "../const/Error";
import { ShouldHandleError } from "../helper/ShouldHandleError";

export class AuthRepository {
  static of() {
    return new AuthRepository();
  }

  getLoginTargetUserByUid(id: number) {
    const selectedPost = data.authorization.find(
      (record) => record.user_id === id
    );
    if (!selectedPost) {
      throw new ShouldHandleError(ERROR_CODE.AUTH_RESOURCE_NOTFOUND);
    }
    return selectedPost;
  }

  registerAuthInfo(id: number, password: string) {
    data.authorization.push({ user_id: id, password: password });
  }
}
