import { HydratedDocument, Model } from 'mongoose';

export default interface IUser {
  id: string;
  role: 'student';
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: 'male' | 'female';
  email?: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}
// for custom instance method
export interface IUserMethods {
  fullName(): string;
}
// for custom instance method and statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
