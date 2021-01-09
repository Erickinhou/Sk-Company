import React from 'react'
import PropTypes from 'prop-types';
import { FiBox, FiTruck} from 'react-icons/fi'
import { Container, Start, Middle, End, SvgWrapper } from './ItemOrder.style'

export const ItemOrder = (props) => {
  const {item, shipment} = props;
  console.log(item);
  if (shipment){
    return(
      <Container>
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
    <Container>
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
};