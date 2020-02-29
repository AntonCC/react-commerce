// Unable to get this to work so far.

import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'

import CheckoutPage from './checkout.component'

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

const CheckoutPageContainer = connect(mapStateToProps)(CheckoutPage)

export default CheckoutPageContainer