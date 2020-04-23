import { data } from "../db/memory";
import { ERROR_CODE } from "../const/Error";
import { ShouldHandleError } from "../helper/ShouldHandleError";
import { UID, AuthorizationType } from "../type";

export class ConfirmApiRepository {
  static of() {
    return new ConfirmApiRepository();
  }

  /** 審査キューへ積むAPIを叩く */
  enqueConfirmStore(content: string) {
    // no op
  }
}
