import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from '@mui/material/Skeleton'

CategorySkeletonList.propTypes = {
    length: PropTypes.number,
}

CategorySkeletonList.defaultProps = {
    length: 6,
}

function CategorySkeletonList({ length }) {
    return (
        <React.Fragment>
            {Array.from(new Array(length)).map((item, index) => (
                <Skeleton variant='text' item key={index} />
            ))}
        </React.Fragment>
    )
}

export default CategorySkeletonList
