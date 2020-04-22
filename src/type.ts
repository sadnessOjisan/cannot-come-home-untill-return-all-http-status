export type UID = number & {};

export type PID = number & {};

export type UserType = {
  id: UID;
  name: string;
};

export type PostType = {
  id: PID;
  content: string;
  user_id: UID;
};

export type DBType = {
  user: UserType[];
  post: PostType[];
};
