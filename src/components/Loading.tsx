import * as S from '@styles/LoadingStyle';
import Image1 from '@images/loading/1.png';
import Image2 from '@images/loading/2.png';
import Image3 from '@images/loading/3.png';
import Image4 from '@images/loading/4.png';
import Image5 from '@images/loading/5.png';
import Image6 from '@images/loading/6.png';
import Image7 from '@images/loading/7.png';
import Image8 from '@images/loading/8.png';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const Loading = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <S.Container>
      <img src={randomImage} width={150} height={150} />
      <h5>LOADING...</h5>
    </S.Container>
  );
};

export default Loading;
