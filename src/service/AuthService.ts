import { AuthRepository } from "../repository/AuthRepository";

export class AuthService {
  private constructor(private repository: AuthRepository) {}

  static of(repository: AuthRepository) {
    return new AuthService(repository);
  }

  getWillLoginUser(id: number, password: string) {
    const selectedUSer = this.repository.getWillLoginUserRecord(id);
    if (password === selectedUSer.password) {
    } else {
      throw new Error("invalid password");
    }
  }
}
