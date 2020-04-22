import { data } from "../db/memory";
import { UID, UserType } from "../type";
import { User } from "../entity/User";
import { ShouldHandleError } from "../helper/ShouldHandleError";
import { ERROR_CODE } from "../const/Error";

export class UserRepository {
  constructor() {}

  static of() {
    return new UserRepository();
  }

  getUser(id: UID) {
    const nid = Number(id);
    const selectedData = data.user.find((user) => user.id === nid);
    if (!selectedData) {
      throw new ShouldHandleError(ERROR_CODE.USER_RESOURCE_NOTFOUND);
    }
    return User.of(selectedData.id, selectedData.name);
  }

  getUserByName(name: string) {
    const selectedData = data.user.find((user) => user.name === name);
    if (!selectedData) {
      throw new ShouldHandleError(ERROR_CODE.USER_RESOURCE_NOTFOUND);
    }
    return User.of(selectedData.id, selectedData.name);
  }

  getUsers() {
    return data.user.map((user) => this.convertEntity(user));
  }

  createNewUser(name: string) {
    const newId = data.userSequentialId;
    data.user.push({ id: newId, name: name });
    const selectedData = data.user.find((user) => user.id === newId);
    if (!selectedData) {
      throw new ShouldHandleError(ERROR_CODE.USER_RESOURCE_NOTFOUND);
    }
    return User.of(selectedData.id, selectedData.name);
  }

  getUpdateUserSequencialId() {
    return data.userSequentialId;
  }

  updateUserSequencialId() {
    data.userSequentialId = data.userSequentialId + 1;
  }

  private convertEntity = (data: UserType) => {
    return User.of(data.id, data.name);
  };
}
