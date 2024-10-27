import * as S from '@styles/HeaderStyle';

const Header = () => {
  return (
    <S.Container onClick={() => window.open('https://litt.ly/doofficial')}>
      DooGi.
    </S.Container>
  );
};

export default Header;
