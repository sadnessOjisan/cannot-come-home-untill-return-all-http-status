import { UID, PID } from "../type";

export class IdService {
  private constructor() {}

  static of() {
    return new IdService();
  }
  genUID = (id: number) => {
    return id as UID;
  };

  genPID = (id: number) => {
    return id as PID;
  };
}
