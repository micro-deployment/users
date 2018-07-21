interface createUserArgs {
  firstName: string;
  lastName: string;
}

interface deleteUserArgs {
  id: number;
}

interface updateUserArgs {
  id: number;
  values: {
    firstName?: string;
    lastName?: string;
  };
}
