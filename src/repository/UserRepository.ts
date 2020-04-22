import { data } from "../db/memory";
import { UID } from "../type";

export class UserRepository {
  constructor() {}

  static of() {
    return new UserRepository();
  }

  getUser(id: UID) {
    return data.user.find((user) => user.id === id);
  }

  getUsers() {
    return data.user;
  }
}
