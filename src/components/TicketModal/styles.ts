import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: var(---colors-color-background);
  overflow: hidden;
  position: relative;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  color: var(--colors-text-base);
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

export const CustomStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    overflow: 'hidden',
  },
  content: {
    backgroundColor: 'var(--colors-color-background)',
    border: '0',
    overflow: 'hidden',
  },
};

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50rem;
  overflow: hidden;
  iframe {
    border: 0;
  }
`;

export const OpenButton = styled.button`
  background-color: var(--colors-nlw-cup-primary);
  border: 0;
  outline: 0;
  padding: 0.5rem;
  color: var(--colors-nlw-cup-secondary);
  font-weight: bold;
  border-radius: 0.25rem;
  transition: 0.2s;

  &:hover {
    background-color: var(--colors-explorer-lab-primary-dark);
  }
`;
