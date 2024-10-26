import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-bottom: 5px;
  padding-left: 20px;
  gap: 18px;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 80%;
  aspect-ratio: 1;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.05);

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  svg {
    cursor: pointer;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
