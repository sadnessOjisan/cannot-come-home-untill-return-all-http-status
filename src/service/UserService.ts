import { UserRepository } from "../repository/UserRepository";

export class UserService {
  private constructor(private repository: UserRepository) {}

  static of(repository: UserRepository) {
    return new UserService(repository);
  }

  getUsers() {
    return this.repository.getUsers();
  }
}
