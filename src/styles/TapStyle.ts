import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

export const NavigationText = styled.div<{ $selected: boolean }>`
  user-select: none;
  white-space: nowrap;
  padding: 11px 20px 10px;
  font: var(--H5);
  color: ${props => (props.$selected ? 'var(--Text)' : 'var(--Default)')};
  border-bottom: ${props =>
    props.$selected ? '2px solid var(--Text)' : '2px solid transparent'};
  cursor: pointer;
`;
