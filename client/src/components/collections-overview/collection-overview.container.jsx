import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFitching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFitching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
    (CollectionsOverview)


export default CollectionOverviewContainer;