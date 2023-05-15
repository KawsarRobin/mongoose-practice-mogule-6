import { Schema, model } from 'mongoose';
import IUser, { IUserMethods, UserModel } from './user.interface';

// type UserModel = Model<IUser, {}, IUserMethods>;

// 2. Creating a Schema corresponding user interface.
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  email: {
    type: String,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

//Custom statics method
userSchema.static('getAdminUsers', async function getAdminUsers() {
  const admins = await this.find({ role: 'admin' });
  return admins;
});
//Custom instance method
userSchema.method('fullName', function fullName() {
  return this.name.firstName + ' ' + this.name.lastName;
});

//3 Creating Model with Schema and Interface of user
const User = model<IUser, UserModel>('User', userSchema);

export default User;
