import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 15px;
`;

export const ImageWrap = styled.div<{ $selected: boolean }>`
  border: ${props =>
    props.$selected ? '2px solid var(--Icon)' : '1.5px solid var(--Default)'};
  border-radius: 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: ${props => (props.$selected ? '8px' : '8.5px')};
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
