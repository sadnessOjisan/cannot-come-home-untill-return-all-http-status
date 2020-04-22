export type UID = number & { __UID: undefined };

export type PID = number & { __PID: undefined };

export type UserType = {
  id: number;
  name: string;
};

export type PostType = {
  id: number;
  content: string;
  user_id: number;
};

export type AuthorizationType = {
  user_id: number;
  password: string;
};

export type DBType = {
  user: UserType[];
  post: PostType[];
  authorization: AuthorizationType[];
};
