import { EntityMeta } from '../api/entity';
import { User } from './userApi';

export type JobType = 'freelance' | 'partTime' | 'fullTime';

export type NewJob = {
  title: string;
  description: string;
  price: number;
  type: JobType;
  starting_from: string;
  has_drivers_license: boolean;
  user_id: User['id'];
};

export type Job = NewJob & EntityMeta;
