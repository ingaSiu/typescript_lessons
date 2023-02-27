import { EntityMeta } from '../api/entity';

export type NewUser = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

// export type NewUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export type User = NewUser & EntityMeta;
export type LoginUser = Omit<NewUser, 'first_name' | 'last_name'>;
