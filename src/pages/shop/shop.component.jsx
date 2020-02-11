import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectShopData } from '../../redux/shop/shop.selectors'

import PreviewCollection from '../../components/preview-collection/preview-collection.component'

const ShopPage = ({ collections }) => (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})


export default connect(mapStateToProps)(ShopPage)
