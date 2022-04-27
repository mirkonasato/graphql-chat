import { gql } from '@apollo/client';

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription MessageAddedSubscription {
    message: messageAdded {
      id
      from
      text
    }
  }
`;

export const MESSAGES_QUERY = gql`
  query MessagesQuery {
    messages {
      id
      from
      text
    }
  }
`;

export const ADD_MESSAGE_MUTATION = gql`
  mutation AddMessageMutation($input: MessageInput!) {
    message: addMessage(input: $input) {
      id
      from
      text
    }
  }
`;
