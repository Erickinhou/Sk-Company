import React from 'react'
import PropTypes from 'prop-types';
import { FiBox, FiTruck} from 'react-icons/fi'
import { Container, Start, Middle, End, SvgWrapper } from './ItemOrder.style'

export const ItemOrder = (props) => {
  const {item, shipment, isMobile} = props;
  if (shipment){
    return(
      <Container isMobile = {isMobile}>
      <Start>
        <SvgWrapper>
          <FiTruck size={20}/> 
        </SvgWrapper>
        <div>{item.city}</div>
        <div>Nederland</div>
      </Start>
      <End>€{item.value}</End> 
    </Container>
    )
  }
  
  return(
    <Container isMobile = {isMobile}>
      <Start>
        <SvgWrapper>
          <FiBox size={20}/>
        </SvgWrapper>
        <div>
          {item.name}
        </div>
      </Start>
      <Middle>
        <div>
          {item.quantity}
        </div>
        </Middle>
      <End>
        €{item.price}
      </End> 
    </Container>
  )
}

ItemOrder.propTypes = {
  item: PropTypes.object.isRequired,
  shipment: PropTypes.bool,
  isMobile: PropTypes.bool,
};