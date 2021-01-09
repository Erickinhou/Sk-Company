import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  border-bottom: 1px solid #666;
`;

export const Middle = styled.div`
  flex-grow: 1;
  & > div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const End = styled.div`
  margin-left: auto;
  width: 33%;
  text-align: right;
`;

export const Start = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 33%;
  & > div {
    margin: 0 5px;
  }
`;

export const SvgWrapper = styled.div`
  display: relative;
  width: 30px;
  height: auto;
`;