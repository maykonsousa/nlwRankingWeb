import { useContext, useState } from 'react';
import { UserContext } from '../../context/Context';
import { FormContainer } from './styles';

export function FormAdd() {
  const { createNewUser, userError } = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createNewUser(username);
    setUsername('');
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Insira um usuário"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </div>
      <p>{userError}</p>
    </FormContainer>
  );
}
