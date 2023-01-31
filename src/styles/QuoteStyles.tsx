import styled from "styled-components";

export const QuoteContainer = styled.blockquote`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 62.5rem) {
    padding-inline: 1rem;
  }
`;

export const QuoteWrapper = styled.div`
  max-width: 56.25rem;
  padding: 1.25rem 1.875rem;
  border-radius: 10px;
  background: #f8f9fa;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  p:nth-child(1) {
    font-size: 1.75rem;

    @media screen and (max-width: 62.5rem) {
      font-size: 2rem;
    }
  }

  p:nth-child(2) {
    margin-top: 0.938rem;
    font-size: 1.3rem;
    font-style: italic;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    font-size: 1.2rem;
    border: none;
    border-radius: 10px;
    color: #f8f9fa;
    background: #74c0fc;
    outline: none;
    padding: 0.5rem 1.8rem;
    box-shadow: 0 4.8px rgba(121, 121, 121, 0.25);

    @media screen and (max-width: 37.5rem) {
        margin-top: 1rem;
    }

    &:hover {
      filter: brightness(110%);
    }

    &:active {
      transform: translate(0, 4.8px);
      box-shadow: 0 1.6px rgba(255, 255, 255, 0.65);
    }
  }
`;
