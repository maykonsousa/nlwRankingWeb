import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    gap: 1rem;
    input {
      flex: 1;
      height: 4rem;
      padding: 0 1.5rem;
      border: 1px solid var(--colors-border-color);
      border-radius: 0.25rem;
      color: var(--colors-text-base);
      font-size: 1.25rem;
      font-weight: bold;
      background: var(--colors-shape-primary);
      ::placeholder {
        color: var(--colors-placeholder);
        font-weight: 400;
      }
    }

    button {
      width: 8rem;
      height: 4rem;
      border: 0;
      border-radius: 0.25rem;
      color: var(--colors-nlw-cup-secondary);
      font-weight: bold;
      background: var(--colors-nlw-cup-primary);
      font-size: 1.25rem;
      transition: 0.2s;
      :hover {
        background-color: var(--colors-explorer-lab-primary-dark);
        color: var(--colors-nlw-cup-secondary-light);
      }
    }
  }

  p {
    color: var(--colors-danger-base);
    font-weight: bold;
  }
`;
