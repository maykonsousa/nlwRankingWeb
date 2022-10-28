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
    </AppContainer>
  );
}

export default App;
