import React from 'react';
import SHOP_DATA from './shop.data';
import Collection from '../../components/collection/collection.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                <h1>SHOP PAGE</h1>
                {collections.map(
                    ({id, ...otherProps}) => <Collection key={id} {...otherProps} />
                )}
            </div>
        )
    }
}

export default ShopPage;