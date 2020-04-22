import { data } from "../db/memory";
import { UID, UserType } from "../type";
import { User } from "../entity/User";

export class UserRepository {
  constructor() {}

  static of() {
    return new UserRepository();
  }

  getUser(id: UID) {
    const nid = Number(id);
    const selectedData = data.user.find((user) => user.id === nid);
    if (!selectedData) {
      throw new Error("not found");
    }
    return User.of(selectedData.id, selectedData.name);
  }

  getUsers() {
    return data.user.map((user) => this.convertEntity(user));
  }

  private convertEntity = (data: UserType) => {
    return User.of(data.id, data.name);
  };
}
