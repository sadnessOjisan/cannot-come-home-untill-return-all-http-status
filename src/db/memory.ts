import { DBType } from "../type";

export const data: DBType = {
  user: [],
  /** id発番ロジックをEntityに押し付けないことでon memoryをSQLに移行しやすくなるはず */
  userSequentialId: 1,
  post: [],
  authorization: [],
};
