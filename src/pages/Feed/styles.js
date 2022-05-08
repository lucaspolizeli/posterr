import styled from "styled-components";

export const FeedContainer = styled.div`
  width: 872px;

  margin: 28px auto;

  @media (max-width: 890px) {
    width: 100%;
    padding: 0 16px 0 16px;
  }
`;

export const AddPostContainer = styled.div`
  background-color: white;

  padding: 16px;
  border-radius: 8px;
`;

export const PostsContainer = styled.div`
  margin-top: 16px;
  border-radius: 8px;
  background-color: white;
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  margin: 24px 16px;
  background-color: var(--medium-gray);
`;
