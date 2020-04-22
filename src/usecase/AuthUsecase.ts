import { AuthService } from "../service/AuthService";
import { ERROR_CODE } from "../const/Error";
import { ShouldHandleError } from "../helper/ShouldHandleError";
import { Request } from "express";

export class AuthUsecase {
  private constructor(private service: AuthService) {}

  static of(service: AuthService) {
    return new AuthUsecase(service);
  }

  signIn(request: Request) {
    const { id, password } = request.body;
    console.log(request.body);
    const { validId, validPassWord } = this._validation(id, password);
    this.service.getWillLoginUser(validId, validPassWord);
  }

  _validation(id: any, password: any) {
    if (!id || !password) {
      throw new ShouldHandleError(ERROR_CODE.MISSING_AUTH_PARAMS);
    }
    if (typeof id !== "number" || typeof password !== "string") {
      throw new ShouldHandleError(ERROR_CODE.INVALID_AUTH_PARAMS);
    }
    return { validId: id, validPassWord: password };
  }
}
