import styled from 'styled-components';


export const Container = styled.div`
  color: #666;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 15px;
`;

export const Row = styled.div`
  display: flex;
  color: #666;
  margin: 10px 0;
  & > div{
    margin: 0 10px;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

