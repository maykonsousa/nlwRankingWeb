import styled from 'styled-components';

export const TableContainer = styled.div`
  margin-top: 6rem;
  overflow: auto;
  max-height: 30rem;
  min-height: 20rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    min-width: 35rem;

    th {
      color: var(--colors-text-title);
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--colors-shape-primary);
      color: var(--colors-text-base);
      border-radius: 0.25rem;
      a {
        color: var(--colors-nlw-cup-secondary);
        text-decoration: none;
        transition: filter 0.2s;
        &:hover {
          color: var(--colors-nlw-cup-secondary-light);
        }
      }
    }
  }
`;
