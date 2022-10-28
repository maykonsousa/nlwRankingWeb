import IgniteImg from '../../assets/ignite.svg';
import { FormAdd } from '../FormAdd';
import { Brand, HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Brand>
        <img src={IgniteImg} alt="Logo Ignite" />
        <h1>Ranking NLW COPA</h1>
      </Brand>
      <FormAdd />
    </HeaderContainer>
  );
}
