import { PID } from "../type";

export class Post {
  private constructor(private id: PID, private name: string) {}

  static of(id: number, name: string) {
    const { validatedId, validatedName } = _validation(id, name);
    return new Post(validatedId, validatedName);
  }
}

const _validation = (id: number, name: string) => {
  return { validatedId: (id as any) as PID, validatedName: name };
};
