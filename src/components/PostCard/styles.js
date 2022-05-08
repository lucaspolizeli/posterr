import styled from "styled-components";

export const PostCardContainer = styled.div`
  padding: 16px;
`;

export const UserNameText = styled.button`
  font-size: 18px;
  font-weight: 700;

  background-color: transparent;
  border: none;

  color: var(--dark-gray);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const PostText = styled.p`
  margin-top: 16px;
`;

export const RepostText = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  padding-bottom: 8px;
  color: var(--dark-gray);

  a {
    color: var(--twitter);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const QuoteContainer = styled.div`
  padding-left: 16px;
  margin-top: 16px;

  border-left: 2px solid var(--medium-gray);
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
