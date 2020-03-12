import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart.selector'

import CartdropDown from './cart-dropdown.component'

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const CartDropdownContainer = withRouter(connect(mapStateToProps)(CartdropDown))

export default CartDropdownContainer