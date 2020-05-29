import React from 'react';
import { addCollectionAndDocuments } from './firebase.utils';
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


class addDataToFirebase extends React.Component {
    componentDidMount() {
        const { collectionsArray } = this.props;
        addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
    }

    render() {
        console.log('This is addDataToFirebase')
        return (
            <div><h1>ADD DATA</h1></div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collectionsArray: selectCollectionsForPreview
})

export default connect(mapStateToProps)(addDataToFirebase);