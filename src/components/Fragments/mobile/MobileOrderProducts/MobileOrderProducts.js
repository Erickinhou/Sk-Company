import React from 'react'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import { Container, ItemsWraper } from './MobileOrderProducts.style'
import OrderProducts from '../../OrderProducts/OrderProducts'

export const MobileOrderProducts = (props) => {
  const showItems = props.showItems
  const fadeItemsVariance = {
    hidden: {
      y: '-100%',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    },
    exit: {
      opacity: 0,
      y: '-100%', 
    }
  }
  return (
       <AnimatePresence>
        {showItems && (
        <ItemsWraper>
          <motion.div initial="hidden" animate="visible" exit="exit" variants={fadeItemsVariance} >
            <Container>
              <OrderProducts isMobile = {true}/>
            </Container>
          </motion.div>
        </ItemsWraper>
        )}
      </AnimatePresence>
    
  )
}

MobileOrderProducts.propTypes = {
  showItems: PropTypes.bool
};