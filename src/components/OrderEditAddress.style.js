import {Form, FormControl, FormGroup, FormCheck} from 'react-bootstrap'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiPhone, FiUser} from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.div`
  & > h2{
    color: #000;
    font-size: 24px;
    margin-bottom: 20px;
  }
`

export const LocationIcon = styled(HiOutlineLocationMarker)`
  position: absolute;
  color: rgba(0,0,0,0.5);
`
export const PhoneIcon = styled(FiPhone)`
  position: absolute;
  color: rgba(0,0,0,0.5);
`
export const UserIcon = styled(FiUser)`
  position: absolute;
  color: rgba(0,0,0,0.5);
`

export const ReactForm = styled(Form)`
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
  & > h4{
    color: #666;
    font-size: 18px;
  }
`
export const ReactGroup = styled(FormGroup)`
  padding-left: 20px;
`

export const ReactControl = styled(FormControl).attrs(props =>{ 
    return {
        style: {
            border: "none",
            borderBottom: props.disabled ? "1px solid rgba(0,0,0,0.3)": "1px solid rgba(0,0,0,0.6)",
        }
}})`
  font-weight: 400;
  border-radius: 0;
  margin-left: 10px;
  background: transparent !important;
  &::placeholder{ 
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: rgba(0,0,0,0.5);
    opacity: 1; 
  }
  &:focus{ 
    box-shadow: none;
    border-color: #00a3e2 !important;
  }
`

export const ReactCheck = styled(FormCheck)`
  & > label{
    font-size: 14px;
    font-weight: 400;
  }
`