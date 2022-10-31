import { useContext } from 'react';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { TableRanking } from './components/TableRanking';
import { UserContext } from './context/Context';
import { AppContainer } from './styles';

function App() {
  const { loading } = useContext(UserContext);
  return (
    <AppContainer>
      <Header />
      {loading ? <Loading /> : <TableRanking />}
      <p>
        <span>Obs:</span> A NLW Ranking não é aplicação oficial da Rocketseat e
        reúne dados apenas dos usuários cadastrados aqui. <br /> Para
        informações oficiais acompanhe os canais oficiais da Rocketseat na{' '}
        <a href="http://app.rocketseat.com.br">Plataforma Oficial</a>, no{' '}
        <a href="https://www.instagram.com/rocketseat_oficial/">Instagram</a> ou
        no <a href="https://discord.gg/rocketseat">Discord</a>.
      </p>
    </AppContainer>
  );
}

export default App;
