import LoadingImg from '../../assets/Spinner.svg';
import { LoadingContainer } from './styles';

export function Loading() {
  return (
    <LoadingContainer>
      <img src={LoadingImg} alt="Carregando" />
    </LoadingContainer>
  );
}
