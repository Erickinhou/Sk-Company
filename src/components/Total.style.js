import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  & > h3 {
	  font-weight: 500;
  }
  & > span {
		font-weight: 600;
  }
`;