import React from 'react'
import { connect } from 'react-redux'
import { Container, Total } from './OrderProducts.style'
import { ItemOrder } from './ItemOrder/ItemOrder'
import { getAddressFromOrder } from '../../../utility/address';

const OrderProducts  = (props) => {
  console.log(props);
  const {order_items: items, order_taxes: taxes, value_wt, value} = props.order
  const { city } = getAddressFromOrder(props.order, true); //isBilling to true
  //percent
  const getPercent = ()=> ((value/value_wt*100*-1)+100).toFixed(2);
  return (
    <Container>
      {items.map((item)=>(<ItemOrder item ={item} shipment={false}/>))}
      {taxes.map((tax)=>(<ItemOrder item={{...tax, city}} shipment={true}/>))}
      <Total bold>
        <div>
          Totaal(Incl.BTW)
        </div>
        <div>
          €{value_wt}
        </div>
      </Total>
      <Total>
        <div>
          BTW({getPercent()}%)
        </div>
        <div>
          €{value}
        </div>
      </Total>
    </Container>
  )
}
const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data,
  }
}
export default connect(mapStateToProps)(OrderProducts)