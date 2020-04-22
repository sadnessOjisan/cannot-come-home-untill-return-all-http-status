import { AuthRepository } from "../repository/AuthRepository";
import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";
import { UserService } from "./UserService";
import { ShouldHandleError } from "../helper/ShouldHandleError";
import { ERROR_CODE } from "../const/Error";

export class AuthService {
  private constructor(
    private authRepository: AuthRepository,
    private userRepository: UserRepository,
    private userService: UserService
  ) {}

  static of(
    authRepository: AuthRepository,
    userRepository: UserRepository,
    userService: UserService
  ) {
    return new AuthService(authRepository, userRepository, userService);
  }

  checkPassword(name: string, password: string) {
    const user = this.userRepository.getUserByName(name);
    const loginTargetUser = this.authRepository.getLoginTargetUserByUid(
      user.id
    );
    if (password !== loginTargetUser.password) {
      throw new ShouldHandleError(ERROR_CODE.INVALID_PASSWORD);
    }
  }

  signUp(name: string, password: string) {
    const hashedPassword = password;
    this.userService.updateUserSequencialId();
    const user = this.userService.createNewUser(name);
    this.authRepository.registerAuthInfo(user.id, hashedPassword);
  }
}
