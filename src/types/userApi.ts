export interface User {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type NewUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
export type LoginUser = Omit<NewUser, 'first_name' | 'last_name'>;
