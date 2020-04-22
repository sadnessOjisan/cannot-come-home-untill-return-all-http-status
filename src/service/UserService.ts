import { UserRepository } from "../repository/UserRepository";
import { AuthRepository } from "../repository/AuthRepository";
import { UID } from "../type";

export class UserService {
  private constructor(
    private userRepository: UserRepository,
    private authRepository: AuthRepository
  ) {}

  static of(userRepository: UserRepository, authRepository: AuthRepository) {
    return new UserService(userRepository, authRepository);
  }

  getUsers() {
    return this.userRepository.getUsers();
  }

  getUserById(id: UID) {
    return this.userRepository.getUser(id);
  }

  updateUserSequencialId() {
    this.userRepository.updateUserSequencialId();
  }

  createNewUser(name: string) {
    const user = this.userRepository.createNewUser(name);
    return user;
  }

  getUserByToken(token: string) {
    const userId = this.authRepository.getUserIdByToken(token) as UID;
    const user = this.getUserById(userId);
    return user;
  }
}
