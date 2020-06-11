import React from 'react'
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles'


class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }
    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/ke17ZwdGBToddI8pDm48kEj8h6tFfEHTeCG-xJISxCF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQNtHfWuxJOqPNnonx2vPn19YmYaYuKXkbKFz0xx0uTakvjJh3JJWsjdMZ66YIxKAg/image-asset.jpeg?format=750w' />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children
    }
}


export default ErrorBoundary