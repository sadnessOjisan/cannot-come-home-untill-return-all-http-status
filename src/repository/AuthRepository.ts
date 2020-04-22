import { data } from "../db/memory";
import { ERROR_CODE } from "../const/Error";
import { ShouldHandleError } from "../helper/ShouldHandleError";
import { UID, AuthorizationType } from "../type";

export class AuthRepository {
  static of() {
    return new AuthRepository();
  }

  getLoginTargetUserByUid(id: number) {
    const selectedAuthInfo = data.authorization.find(
      (record) => record.user_id === id
    );
    if (!selectedAuthInfo) {
      throw new ShouldHandleError(ERROR_CODE.AUTH_RESOURCE_NOTFOUND);
    }
    return selectedAuthInfo;
  }

  getUserIdByToken(token: string) {
    const selectedAuthInfo = data.authorization.find(
      (record) => record.token === token
    );
    if (!selectedAuthInfo) {
      throw new ShouldHandleError(ERROR_CODE.AUTH_RESOURCE_NOTFOUND);
    }
    return selectedAuthInfo.user_id;
  }

  registerToken(uid: UID) {
    const nuid = Number(uid);
    data.authorization.map((record) => {
      let recordAttachedToken: AuthorizationType;
      if (record.user_id === nuid) {
        const token = Math.random().toString(36).slice(-10);
        recordAttachedToken = { ...record, token: token };
      } else {
        recordAttachedToken = record;
      }
      return recordAttachedToken;
    });
  }

  registerAuthInfo(id: number, password: string) {
    const token = Math.random().toString(36).slice(-10);
    data.authorization.push({ user_id: id, password: password, token: token });
    return token;
  }
}
