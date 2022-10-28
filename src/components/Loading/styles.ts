import styled from 'styled-components';
import LoadingImg from '../../assets/Spinner.svg';

export const LoadingContainer = styled.div`
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${LoadingImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10rem;
  img {
    width: 20rem;
    height: 20rem;
  }
`;
