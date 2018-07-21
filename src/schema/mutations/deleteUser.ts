import { User } from '../../model';

export const deleteUser = (root: any, args: deleteUserArgs) => {
  return User.delete({ id: args.id });
};
