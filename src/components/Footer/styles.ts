import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  font-size: 1.25rem;
  gap: 5rem;
`;

export const FooterText = styled.div`
  a {
    color: var(--colors-nlw-cup-primary);
    text-decoration: none;
    transition: filter 0.2s;
    &:hover {
      color: var(--colors-nlw-cup-secondary);
    }
  }

  @media (max-width: 768px) {
    :first-child {
      display: none;
    }
  }
`;

export const NavIcons = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  a {
    border-radius: 0.25rem;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--colors-shape-primary);
    color: var(--colors-text-base);
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      background-color: var(--colors-nlw-cup-primary);
      color: var(--colors-nlw-cup-secondary);
    }
  }
`;
