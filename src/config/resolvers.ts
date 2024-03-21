const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title: "The Lord of the Rings",
    author: "Tolkien",
  },
];

const users = [
  {
    status: "active",
    name: {
      first: "Werner",
      middle: "Phoenix",
      last: "Braun",
    },
  },
  {
    status: "active",
    name: {
      first: "Garret",
      middle: "Rory",
      last: "Wunsch",
    },
  },
];

export const resolvers = {
  Query: {
    books: () => books,
    users: () => users,
  },
};
