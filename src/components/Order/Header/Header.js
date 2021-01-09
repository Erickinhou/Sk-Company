import React from 'react'
import { Container, Details, DownArrow, Logo } from './Header.style'
import { connect } from 'react-redux'

const Header = (props)=> {
  return (
    <Container>
      <div>  
        <Logo/>
        <h2>Jouw bestelling</h2>
        <DownArrow/>
      </div>
      <div>
        <Details>
          <h4>
            Order
          </h4>
          <h4>
            {props.order.number}
          </h4>
        </Details>
        <Details>
          <h4>
            Jouw contact
          </h4>
          <h4>
            {props.order.created_by.name}
          </h4>
        </Details>
      </div>
    </Container>
  )
} 

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data,
  }
}
export default connect(mapStateToProps)(Header)