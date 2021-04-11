import { useQuery } from "@apollo/client";
import { Post } from "../types";
import { GET_FIRST_100_POSTS_QUERY } from "../utils/graphql";

const useReplies = (postId: string): Post[] => {
  const { data } = useQuery(GET_FIRST_100_POSTS_QUERY, {
    variables: { replyTo: postId },
    pollInterval: 2000,
    fetchPolicy: "cache-and-network",
  });

  return data?.posts || [];
};

export default useReplies;
