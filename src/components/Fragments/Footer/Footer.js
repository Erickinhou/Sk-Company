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
          Dit BestelVerzoek is gestuurd door SK Fashion.
          Deze email is verstuurd om je bestelling af te
          ronden op jouw eigen verzoek
          </Text> 
          <Text>
            Vragen over je bestelling?
            Neem contact op met SK Fashion
            info@skfashion.nl / +31 (0)548-514843  
          </Text>
        </Flex>
        <Flex>
          <div>
            <h4>BestelVerzoek is een dienst van:</h4>
            <div>www.storekeeper.nl</div>
          </div>  
          <LogoWrapper>
            <StoreKeeper width = {'100%'}/>
          </LogoWrapper>
        </Flex> 
    </Container>
  )
}