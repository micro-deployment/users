export const UserType = `
  type User {
    id: String!             # A unique identifier
    firstName: String!      # First name
    lastName: String!       # Last name
  }
`;

export const UserInput = `
  input UserInput {
    firstName: String      # First name
    lastName: String       # Last name
  }
`;
