import styled from 'styled-components';
import background from '../../assets/discord-background.svg';
import flagImg from '../../assets/flag-separator.svg';

export const ActionContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-color: var(--colors-nlw-cup-secondary-light);
  background-size: cover;
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    background: url(${flagImg}) no-repeat;
    top: -1rem;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    span {
      color: var(--colors-nlw-cup-primary);
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: var(--colors-text-base);
    font-weight: 600;
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    padding: 1rem 4rem;
    color: var(--colors-nlw-cup-secondary-light);
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    background: var(--colors-nlw-cup-primary);
    border-radius: 0.25rem;
    transition: 0.2s;

    @media (max-width: 768px) {
      padding: 1rem 2rem;
    }

    &:hover {
      color: var(--colors-nlw-cup-secondary-light);
      background: var(--colors-explorer-lab-primary-dark);
      text-decoration: underline;
    }
  }
`;
