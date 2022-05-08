import styled from "styled-components";

export const PostCardContainer = styled.div`
  padding: 16px;
`;

export const UserNameText = styled.h3`
  margin-bottom: 16px;
  color: var(--dark-gray);
`;

export const PostText = styled.p``;

export const RepostText = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  padding-bottom: 8px;
  color: var(--dark-gray);

  span {
    color: var(--twitter);
  }
`;

export const IconButton = styled.button`
  width: 16px;
  height: 16px;

  border: none;

  background: url(${({ image }) => image}) no-repeat transparent;

  @media (max-width: 890px) {
    width: 20px;
    height: 20px;
  }
`;

export const IconButtonsContainer = styled.div`
  gap: 8px;
  margin-top: 16px;

  display: flex;
`;
