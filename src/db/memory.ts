import { DBType } from "../type";

export const data: DBType = {
  user: [],
  /** id採番ロジックをEntityに押し付けないことで、on memoryなDBをSQLに移行しやすくなると信じてるフィールド */
  userSequentialId: 1,
  post: [],
  authorization: [],
};
