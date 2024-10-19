import * as S from '@styles/TapStyle';
import { useEffect, useRef } from 'react';
import { NavigationBarItem } from '@constants/NavigationBarItem';

const Tap = ({
  selectedBar,
  setSelectedBar,
}: {
  selectedBar: number;
  setSelectedBar: (id: number) => void;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  //선택된 네비게이션 항목을 컨테이너의 중앙으로 스크롤
  const scrollToCenter = (index: number) => {
    const container = containerRef.current;
    const item = itemRefs.current[index];

    if (container && item) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      //스크롤 최대 위치
      const maxScrollLeft = container.scrollWidth - container.offsetWidth;

      //스크롤 위치 계산
      const scrollPosition =
        itemRect.left -
        containerRect.left -
        containerRect.width / 2 +
        itemRect.width / 2;

      //스크롤 위치 조정
      let newScrollPosition = container.scrollLeft + scrollPosition;
      newScrollPosition = Math.max(0, newScrollPosition);
      newScrollPosition = Math.min(newScrollPosition, maxScrollLeft);

      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  //selectedBar가 변경될 때 스크롤 이동
  useEffect(() => {
    const selectedIndex = NavigationBarItem.findIndex(
      item => item.id === selectedBar,
    );
    if (selectedIndex !== -1) {
      scrollToCenter(selectedIndex);
    }
  }, [selectedBar]);

  return (
    <S.Container ref={containerRef}>
      {NavigationBarItem.map((data, index) => {
        return (
          <S.NavigationText
            key={index}
            ref={el => (itemRefs.current[index] = el)}
            onClick={() => setSelectedBar(data.id)}
            $selected={selectedBar === data.id}
          >
            {data.text}
          </S.NavigationText>
        );
      })}
    </S.Container>
  );
};

export default Tap;
