import axios from 'axios';

// task: visus any sukeisti realiomis reiksmemis

const USERS_API_URL = 'https://testapi.io/api/rokasandreikenas/resource/user';

export const fetchUsers = (): Promise<any> => {
  return axios.get(USERS_API_URL).then((response) => response.data.data);
};

// Aprasyti kurimui skirta tipa
// pvz interface = user
// interface = createUser
// Omit <User, "laukas"> =>
export const createUser = (user: any): Promise<any> => {
  return axios.post(USERS_API_URL, user).then((response) => response.data);
};

export const loginUser = async (loggingUser: any): Promise<any> => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loggingUser;
    const userChecker = (user: any) => user.email === email && user.password === password;
    const existingUser = users.find(userChecker);
    existingUser ? resolve(existingUser) : reject('Invalid credentials');
  });
};
