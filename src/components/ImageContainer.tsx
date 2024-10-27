import * as S from '@/styles/ImageContainerStyle';
import GithubIcon from '@assets/icons/github.svg?react';
import InstagramIcon from '@assets/icons/instagram.svg?react';
import DeveloperIcon from '@assets/icons/developer.svg?react';
import HeartIcon from '@assets/icons/heart.svg?react';
import DownloadIcon from '@assets/icons/download.svg?react';
import { TSelectedImage } from '@/types/ImageType';
import { ImageItem } from '@/constants/ImageItem';
import { useRef } from 'react';
import BodyImage from '@images/parts/Body.svg?react';
import { renderToStaticMarkup } from 'react-dom/server';

const ImageContainer = ({
  selectedImage,
  bodyColor,
}: {
  selectedImage: TSelectedImage;
  bodyColor: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const images = [
    ImageItem[0][selectedImage.eyes],
    ImageItem[2][selectedImage.faceDress],
    ImageItem[1][selectedImage.mouth],
    ImageItem[6][selectedImage.shoes],
    ImageItem[5][selectedImage.clothes],
    ImageItem[3][selectedImage.headDress],
    ImageItem[4][selectedImage.handDress],
  ];

  const background = ImageItem[7][selectedImage.background];

  const handleDownload = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1000;
    canvas.height = 1000;

    // svg 파일 data URI로 변환
    const bodySvgString = encodeURIComponent(
      renderToStaticMarkup(<BodyImage color={bodyColor} />),
    );
    const bodyDataUri = `data:image/svg+xml;charset=utf-8,${bodySvgString}`;

    const loadImages = [background, bodyDataUri, ...images].map(src => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    });

    try {
      const loadedImages = await Promise.all(loadImages);

      loadedImages.forEach(img => {
        if (ctx) ctx.drawImage(img, 0, 0);
      });

      const imageDataUrl = canvas.toDataURL('image/png');
      downloadImage(imageDataUrl);
    } catch (error) {
      console.error('이미지 로드에 실패했습니다.', error);
    }
  };

  const downloadImage = (dataUrl: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'doogi.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <S.Container>
      <S.ImageWrap>
        <img src={background} />
        <BodyImage color={bodyColor} />
        {images.map((data, index) => (
          <img src={data} key={index} />
        ))}
      </S.ImageWrap>
      <S.RightWrap>
        <S.IconWrap>
          <GithubIcon
            onClick={() => window.open('https://github.com/rlotr02')}
          />
          <InstagramIcon
            onClick={() =>
              window.open('https://www.instagram.com/doogi_official')
            }
          />
          <DeveloperIcon
            onClick={() => window.open('https://litt.ly/rlotr02')}
          />
          <HeartIcon
            onClick={() => window.open('https://litt.ly/doofficial')}
          />
        </S.IconWrap>
        <DownloadIcon
          style={{ marginBottom: 3, cursor: 'pointer' }}
          onClick={handleDownload}
        />
      </S.RightWrap>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </S.Container>
  );
};

export default ImageContainer;
