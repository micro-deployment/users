import { User } from '../../model';

export const updateUser = (root: any, args: updateUserArgs) => {
  return User.update({ id: args.id }, { firstName: 'Test' })
    .then(() => true)
    .catch(() => false);
};
