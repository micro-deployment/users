import { User } from '../../model';

export const resolveUser = (root: any, args: User) => {
  if (JSON.stringify(args) === '{}') {
    return User.find();
  }

  return User.find(args);
};
