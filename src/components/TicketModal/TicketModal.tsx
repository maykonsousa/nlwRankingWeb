/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import { XCircle } from 'phosphor-react';
import { useState } from 'react';
import Modal from 'react-modal';
import {
  CloseButton,
  CustomStyles,
  ModalContainer,
  ModalContent,
  OpenButton
} from './styles';

interface ModalProps {
  username: string;
}
export function TicketModal({ username }: ModalProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}
  // references are now sync'd and can be accessed.

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <ModalContainer>
      <OpenButton type="button" onClick={openModal}>
        Ver Ticket
      </OpenButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={CustomStyles}
      >
        <CloseButton type="button" onClick={closeModal}>
          <XCircle width={36} height={36} />
        </CloseButton>
        <h2>Ticket</h2>

        <ModalContent>
          <iframe
            src={`https://nlw.rocketseat.com.br/obrigado/${username}`}
            title="Ticket"
            width="100%"
            height="100%"
          />
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
}
