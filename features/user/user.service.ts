import { UserI } from "../../types/user";
import { User } from "./user.entity";

export const getAllUsers = async (): Promise<UserI[]> => {
  const users = await User.find<UserI>();
  return users;
};

export const getUserWithEmail = async (
  email: string
): Promise<UserI | null> => {
  const user = await User.findOne<UserI>({ email });
  return user;
};

export const getUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserI | null> => {
  const user = await User.findOne<UserI>({ email, password });
  return user;
};

export const createUser = async (user: UserI): Promise<UserI> => {
  const _user = new User(user);
  return await _user.save();
};
