/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChair = /* GraphQL */ `
  query GetChair($id: ID!) {
    getChair(id: $id) {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const listChairs = /* GraphQL */ `
  query ListChairs(
    $filter: ModelChairFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChairs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFlower = /* GraphQL */ `
  query GetFlower($id: ID!) {
    getFlower(id: $id) {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const listFlowers = /* GraphQL */ `
  query ListFlowers(
    $filter: ModelFlowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTable = /* GraphQL */ `
  query GetTable($id: ID!) {
    getTable(id: $id) {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTables = /* GraphQL */ `
  query ListTables(
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
