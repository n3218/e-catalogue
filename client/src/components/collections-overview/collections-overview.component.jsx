import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCollectionsForPreview, selectIsCollectionFitching } from "../../redux/shop/shop.selectors"
import WithSpinner from "../with-spinner/with-spinner.component"
import CollectionPreview from "../collection-preview/collection-preview.component"
import "./collections-overview.styles.scss"

export const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFitching,
  collections: selectCollectionsForPreview
})

export default compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview)
