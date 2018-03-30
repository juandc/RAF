import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const USERS_QUERY = gql`
  query {
    users: allUsers(count: 10) {
      id
      firstName
      lastName
    }
  }
`;

export default () => (
  <Query query={USERS_QUERY}>
    {({ error, loading, data }) => {
      if (error) return "error...";
      if (loading) return "loading...";
      return data.users.map(u => (
        <li key={u.id}>
          {u.firstName} {u.lastName}
        </li>
      ));
    }}
  </Query>
);
