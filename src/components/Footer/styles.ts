import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  max-width: 1120px;
  margin: 0 auto;
  font-size: 1.25rem;
  a {
    color: var(--colors-nlw-cup-primary);
    text-decoration: none;
    transition: filter 0.2s;
    &:hover {
      color: var(--colors-nlw-cup-secondary);
    }
  }
`;

export const NavIcons = styled.nav`
  margin-left: 5rem;
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
    transition: 0.2s;

    &:hover {
      background-color: var(--colors-nlw-cup-primary);
      color: var(--colors-nlw-cup-secondary);
    }
  }
`;
