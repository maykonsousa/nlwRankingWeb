import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75rem;
  margin: 0 auto;
  padding: 5rem 2rem;
  padding-bottom: 2rem;
  p {
    margin-top: 2rem;
    line-height: 1.6;
    font-size: 1.125rem;
    span {
      color: var(--colors-danger-base);
      font-weight: bold;
    }
    a {
      color: var(--colors-new-base);
      font-weight: bold;
      text-decoration: none;
      :hover {
        text-decoration: underline;
        color: var(--colors-nlw-cup-primary);
      }
    }
  }
`;
