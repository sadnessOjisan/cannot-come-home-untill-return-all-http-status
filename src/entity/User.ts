import { UID } from "../type";

export class User {
  private constructor(private id: UID, private name: string) {}

  static of(id: number, name: string) {
    const { validatedId, validatedName } = _validation(id, name);
    return new User(validatedId, validatedName);
  }
}

const _validation = (id: number, name: string) => {
  return { validatedId: (id as any) as UID, validatedName: name };
};
