import React from 'react'
import {Container, Title, Text, Flex, LogoWrapper } from './Footer.style'
import StoreKeeper from '../../images/StoreKeeper'

export const Footer = ()=>{
  return (
    <Container>
        <Title>
          Vragen?
        </Title>
        <Flex>
          <Text>
            This OrderRequest was sent to you by SK Fashion. We’ve sent you this email to complete your order with us per your request.
          </Text> 
          <Text>
            Questions on your order?
            Please contact SK Fashion 
            info@skfashion.nl /+31(0)548-514843 
          </Text>
        </Flex>
        <Flex>
          <div>
            <h4>OrderRequest powered by:</h4>
            <div>www.storekeeper.nl</div>
          </div>  
          <LogoWrapper>
            <StoreKeeper width = {'100%'}/>
          </LogoWrapper>
        </Flex> 
    </Container>
  )
}