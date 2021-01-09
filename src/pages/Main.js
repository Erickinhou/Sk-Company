import React, { Component } from 'react'
import { connect } from 'react-redux'
import webApi from '../utility/webApi.js'
import { ensurePaymentIsPaid } from '../utility/payment'

import { Alert } from 'react-bootstrap'
import { Container, MobileContainer } from './Main.style'
import { BrowserView, MobileView } from 'react-device-detect'
import ThankYou from '../components/Fragments/ThankYou/ThankYou'
import MobileThankYou from '../components/Fragments/mobile/MobileThankYou/MobileThankYou'
import Create from '../components/Create'
import Order from '../components/Fragments/Order/Order'
import MobileCreate from '../components/Fragments/mobile/MobileCreate/MobileCreate'
import NotFound from '../components/NotFound'
import Header from '../components/Header'
import CheckingPayment from '../components/CheckingPayment'
import Loader from '../components/Loader'
import { FormattedMessage } from 'react-intl'

class Main extends Component {
  state = {
    error: false,
    checkingPayment: false,
  }
  
  async componentDidMount () {
    const urlParams = new URLSearchParams(window.location.search)
    const transaction = urlParams.get('sk_trx')
    const { dispatch } = this.props
    
    const checkingPayment = checkingPayment => this.setState({ checkingPayment })
  
  
    try {
      if (!!transaction) {
        checkingPayment(true)
        await ensurePaymentIsPaid(dispatch, transaction);
        checkingPayment(false);
        await dispatch(webApi.actions.getOrder());
      } else {
        await dispatch(webApi.actions.getOrder())
      }
    } catch ( err ) {
      this.setState({ error:err.message })
    }
  }
  
  render () {
    const { order, hasOrder, isLoading } = this.props
    const { error, checkingPayment } = this.state
    
    /** Check if there are any errors */
    if (!!error) {
      return (
        <div>
          <Header/>
          <Container className='pt-4'>
            <Alert variant='danger'>
              <Alert.Heading>
                <FormattedMessage id='Main.Error' defaultMessage='Payment failed.'/>
              </Alert.Heading>
              <p>
                <FormattedMessage id='Main.ContactUs' defaultMessage='We where unable to check if the payment was successful, reload the page to try again.'/>
              </p>
            </Alert>
          </Container>
        </div>
      )
    }
    
    /** We are validating the payment */
    if (checkingPayment) {
      return (
          <Container>
            <Header/>
            <CheckingPayment/>
          </Container>
      )
    }
    
    /** Check if there is anything being fetched */
    if (isLoading) {
      return (
          <Container>
            <Loader/>
          </Container>
      )
    }
    
    /** Check if there is any order that is paid */
    if (hasOrder) {
      return (
        <>
          <BrowserView>
            <Container>
              <ThankYou rounded={true} />             
              <Order address={true}/>
            </Container>
          </BrowserView>   
          <MobileView>
            <MobileContainer>
              <MobileThankYou/>
            </MobileContainer>
          </MobileView>
        </>
      )
    }
    
    /** Show order creation */
    if (hasOrder && order.is_paid) {
      return (
        <>
          <BrowserView>
            <Container>
              <Create/>
              <Order address={false} rounded={true}/>
            </Container>
          </BrowserView>

          <MobileView>
            <MobileContainer>
              <MobileCreate/>
            </MobileContainer>
          </MobileView>
        </>
      )
    }
    
    /** Nothing found */
    return ( 
        <Container>
          <Header/>
          <NotFound/>
        </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasOrder: !!state.getOrder.sync,
    isLoading: !!state.getOrder.loading,
    order: state.getOrder.data,
  }
}

export default connect(mapStateToProps)(Main)
