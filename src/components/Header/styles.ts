import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    color: var(--colors-nlw-cup-primary);
  }

  @media (max-width: 768px) {
    h1 {
      display: none;
    }
  }
`;
