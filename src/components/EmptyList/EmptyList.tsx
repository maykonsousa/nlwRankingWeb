import { useContext } from 'react';
import { UserContext } from '../../context/Context';
import { EmptyListContainer } from './styles';

export function EmptyList() {
  const { listError } = useContext(UserContext);
  return (
    <EmptyListContainer>
      {listError ? (
        <h2>Falha ao recuperar lista de usuários</h2>
      ) : (
        <h1>
          {`Nenhum usuário adicionado. Adicione usuários a serem monitorados no campo
      "Insira um usuário"`}
        </h1>
      )}
    </EmptyListContainer>
  );
}
