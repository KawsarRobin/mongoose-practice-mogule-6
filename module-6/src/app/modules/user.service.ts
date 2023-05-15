import IUser from './user.interface';
import User from './user.model';

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //Creating New User
  const user = await new User(payload);
  await user.save(); // Inbuilt Instance Method
  console.log(user.fullName()); // Custom Instance Method
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, emergencyContactNo: 1, email: 1 }
  );
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
