import React from 'react'
import PropTypes from 'prop-types'
import {Container, ArrowDown} from './YourShipping.style'
import {motion} from 'framer-motion'

export const YourShipping = (props) => {
  const {hideItems, showItems} = props;
  const arrowVariants = {
    down: {
      rotate: 0,
    },
    up: {
      rotate: 180,
    }
  }
  const handleClick = (e)=>{
    hideItems();
    console.log(showItems);
  }

  return(
    <Container>
      <h2>Jouw bestelling</h2>
      <motion.div animate={showItems ? 'down' : 'up'}  variants= {arrowVariants} onClick={handleClick}>
        <ArrowDown/>
      </motion.div>
    </Container>
  )
}

YourShipping.propTypes = {
  hideItems: PropTypes.func,
  showItems: PropTypes.bool,
};