import { AuthService } from "../service/AuthService";
import { ERROR_CODE } from "../const/Error";
import { ShouldHandleError } from "../helper/ShouldHandleError";
import { Request } from "express";
import { User } from "../entity/User";

export class AuthUsecase {
  private constructor(private service: AuthService) {}

  static of(service: AuthService) {
    return new AuthUsecase(service);
  }

  signIn(request: Request) {
    const { name, password } = request.body;
    const { validName, validPassWord } = this._validation(name, password);
    const token = this.service.checkPassword(validName, validPassWord);
    return token;
  }

  signUp(request: Request) {
    const { name, password } = request.body;
    const { validName, validPassWord } = this._validation(name, password);
    const token = this.service.signUp(validName, validPassWord);
    return token;
  }

  _validation(name: any, password: any) {
    if (!name || !password) {
      throw new ShouldHandleError(ERROR_CODE.MISSING_AUTH_PARAMS);
    }
    if (typeof name !== "string" || typeof password !== "string") {
      throw new ShouldHandleError(ERROR_CODE.INVALID_AUTH_PARAMS);
    }
    return { validName: name, validPassWord: password };
  }
}
