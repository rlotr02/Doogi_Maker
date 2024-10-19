import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90dvh;

  > h5 {
    font: var(--H4);
    color: var(--Default);
    padding-left: 5px;
  }
`;
