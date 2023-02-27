import axios from 'axios';
import { User } from '../types/userApi';

// task: visus any sukeisti realiomis reiksmemis

const USERS_API_URL = 'https://testapi.io/api/rokasandreikenas/resource/user';

export const fetchUsers = (): Promise<User[]> => {
  return axios.get(USERS_API_URL).then((response) => response.data.data);
};

// Aprasyti kurimui skirta tipa
// pvz interface = user
// interface = createUser
// Omit <User, "laukas"> =>

type CreateUserTypes = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export const createUser = (user: CreateUserTypes): Promise<User[]> => {
  return axios.post(USERS_API_URL, user).then((response) => response.data);
};

export const loginUser = async (loggingUser: User): Promise<User> => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loggingUser;
    const userChecker = (user: User) => user.email === email && user.password === password;
    const existingUser = users.find(userChecker);
    existingUser ? resolve(existingUser) : reject('Invalid credentials');
  });
};
