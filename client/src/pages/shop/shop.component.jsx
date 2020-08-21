import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import './shop.styles.scss'
import Spinner from '../../components/spinner/spinner.component'


const CollectionOverviewContainer = lazy(() => import('../../components/collections-overview/collection-overview.container'))
const CollectionPageContainer = lazy(() => import('../collection/collection.container'))

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </Suspense>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage)