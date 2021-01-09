import React from 'react'
import { Container, Logo } from './MobileHeader.style'
import PropTypes from 'prop-types';
export const MobileHeader = (props) => {
  const {name} = props;
  return (
    <Container>
      <Logo/>
        <h1> {`Hey ${name}`}, </h1>
        <h3>
          Rond snel je BestelVerzoek af!
        </h3>
    </Container>
  )
}

MobileHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

