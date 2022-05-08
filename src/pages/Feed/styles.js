import styled from "styled-components";

export const FeedContainer = styled.div`
  width: 872px;

  margin: 0 auto;
  margin: 28px 0;

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
  background-color: white;
  margin-top: 16px;
  border-radius: 8px;
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  margin: 8px 16px 24px 16px;
  background-color: var(--medium-gray);
`;
