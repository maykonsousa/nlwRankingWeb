import { GithubLogo, Globe, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { FooterContainer, FooterText, NavIcons } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        <p>
          Desenvolvido por{' '}
          <a href="http://maykonsousa.github.io">Maykon Sousa</a>
        </p>
      </FooterText>
      <NavIcons>
        <a href="http://github.com/maykonsousa">
          <GithubLogo size={32} />
        </a>
        <a href="http://www.linkedin.com/in/maykonsousa">
          <LinkedinLogo size={32} />
        </a>
        <a href="https://www.instagram.com/mykesousa/">
          <InstagramLogo size={32} />
        </a>
        <a href="http://maykonsousa.github.io">
          <Globe size={32} />
        </a>
      </NavIcons>
    </FooterContainer>
  );
}
