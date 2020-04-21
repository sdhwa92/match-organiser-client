export interface UserModel {
  username: string; // Username is email address in my case
  password: string;
  attributes: {
    email: string,
    name: string
  };
}
