import { Message } from './db.js';

function rejectIf(condition) {
  if (condition) {
    throw new Error('Unauthorized');
  }
}

export const resolvers = {
  Query: {
    messages: (_root, _args, { userId }) => {
      rejectIf(!userId);
      return Message.findAll();
    }
  },

  Mutation: {
    addMessage: (_root, { input }, { userId }) => {
      rejectIf(!userId);
      return Message.create({ from: userId, text: input.text });
    },  
  },
};
