import { UserRepository } from "../repository/UserRepository";

export class UserService {
  private constructor(private repository: UserRepository) {}

  static of(repository: UserRepository) {
    return new UserService(repository);
  }

  getUsers() {
    return this.repository.getUsers();
  }

  updateUserSequencialId() {
    this.repository.updateUserSequencialId();
  }

  createNewUser(name: string) {
    const user = this.repository.createNewUser(name);
    return user;
  }
}
