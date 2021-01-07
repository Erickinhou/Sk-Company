import React from 'react'
import { connect } from 'react-redux'
import {Container} from './Total.style'

const Total = (props)=> {
    return (
        <Container>
        <h3>
            Totaal
        </h3>
        <span>
            €{props.order.value}
        </span>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return {
      order: state.getOrder.data,
    }
  }
export default connect(mapStateToProps)(Total)