import  { request, gql } from 'graphql-request'

const graphqlAPI = "https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master"

export const getPosts = async () => {
  const query = gql`
  query Assets {
    assets {
      createdAt
      id
      publishedAt
      fileName
      url
      updatedAt
    }
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
          }
          createdAt
          slug
          title
          excert
          featuredImage {
            url
          }
          catergories{
            
          }
        }
      }
    }
  }
  
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};