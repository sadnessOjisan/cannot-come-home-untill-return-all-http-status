import { ErrorMessageType } from "../type";

export class ShouldHandleError extends Error {
  constructor(private errorInfo: ErrorMessageType, e?: string) {
    super(e);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON() {
    return { errorInfo: this.errorInfo };
  }
}
