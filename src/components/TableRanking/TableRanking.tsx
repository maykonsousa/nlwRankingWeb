/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { UserContext } from '../../context/Context';
import { EmptyList } from '../EmptyList';
import { TicketModal } from '../TicketModal';
import { TableContainer } from './styles';

export function TableRanking() {
  const { users } = useContext(UserContext);
  return (
    <TableContainer>
      {users?.length ? (
        <table>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Usuário</th>
              <th>Indicações</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id}>
                <td>{`${index + 1}º`}</td>
                <td>{user.username}</td>
                <td>{user.count}</td>
                <td>
                  <a href="#">
                    <TicketModal username={user.username} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <EmptyList />
      )}
    </TableContainer>
  );
}
