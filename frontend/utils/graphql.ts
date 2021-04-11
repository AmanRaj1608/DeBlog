import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { MUMBAI_SUBGRAPH_URL } from "./constants";

export const client = new ApolloClient({
  uri: MUMBAI_SUBGRAPH_URL,
  cache: new InMemoryCache(),
});

/**
 * Load the first 100 posts
 * Adding replyTo loads the first 100 replies
 * @param replyTo
 * @returns
 */
export const GET_FIRST_100_POSTS_QUERY = gql`
  query posts($replyTo: String!) {
    posts(
      orderBy: publishedAtBlock
      orderDirection: desc
      where: { replyTo: $replyTo }
    ) {
      id
      publishedAtBlock
      author
      content
      replyTo
      likes
      dislikes
    }
  }
`;

/**
 * Given a postId load the post
 */
export const GET_POST_QUERY = gql`
  query posts($postId: String!) {
    posts(
      orderBy: publishedAtBlock
      orderDirection: desc
      where: { id: $postId }
    ) {
      id
      publishedAtBlock
      author
      content
      replyTo
      likes
      dislikes
    }
  }
`;
