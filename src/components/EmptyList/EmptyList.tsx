import { EmptyListContainer } from './styles';

export function EmptyList() {
  return (
    <EmptyListContainer>
      <h1>
        {`Nenhum usuário adicionado. Adicione usuários a serem monitorados no campo
      "Insira um usuário"`}
      </h1>
    </EmptyListContainer>
  );
}
