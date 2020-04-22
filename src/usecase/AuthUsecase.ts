import { IdService } from "../service/IdService";
import { UserService } from "../service/UserService";
import { AuthService } from "../service/AuthService";

export class AuthUsecase {
  private constructor(private service: AuthService) {}

  static of(service: AuthService) {
    return new AuthUsecase(service);
  }

  signIn(id: number | undefined, passWord: string | undefined) {
    const { validId, validPassWord } = this._validation(id, passWord);
    this.service.getWillLoginUser(validId, validPassWord);
  }

  _validation(id: number | undefined, passWord: string | undefined) {
    if (!id || !passWord) {
      // 入力チェック
      throw new Error("missing params");
    }
    return { validId: id, validPassWord: passWord };
  }
}
