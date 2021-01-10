import React from 'react'
import PropTypes from 'prop-types'
import {Container, Title, Text, Flex, OutsideLink} from './MobileFooter.style'
import StoreKeeper from '../../../images/StoreKeeper'

export const MobileFooter = (props)=> {
  const {number} = props;
  return (
    <Container>
      <Title>
        <Flex>
          <div>
            Bestelnummer:
          </div>
          <div>
            {number}
          </div>
        </Flex>
      </Title>
      <Text>
        <div>
          Dit BestelVerzoek is gestuurd door SK Fashion.
          Deze email is verstuurd om je bestelling af te
          ronden op jouw eigen verzoek
        </div>
        <div>
          <b>Vragen over je bestelling?</b><br/>
          Neem contact op met <b>SK Fashion</b><br/>
          info@skfashion.nl / +31 (0)548-514843 
        </div>
      </Text>
      <Title>
        <div>
          BestelVerzoek is een dienst van:
        <StoreKeeper/>
        </div>
        <OutsideLink>
         www.storekeeper.nl
        </OutsideLink>
      </Title>
    </Container>
  )
}

MobileFooter.propTypes = {
  OrderNumber: PropTypes.number,
};