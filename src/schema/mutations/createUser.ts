import { User } from '../../model';

export const createUser = (root: any, args: createUserArgs) => {
  const user = new User();
  user.firstName = args.firstName;
  user.lastName = args.lastName;

  return user.save();
};
