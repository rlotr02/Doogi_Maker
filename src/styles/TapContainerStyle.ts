import styled from 'styled-components';

export const ScrollContainer = styled.div`
  overflow-y: auto;
  flex: 1;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 8px 15px 15px;
`;

export const ImageWrap = styled.div<{ $selected: boolean }>`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  border: ${props =>
    props.$selected ? '2px solid var(--Icon)' : '1.5px solid var(--Default)'};
  border-radius: 10px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
