import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { Box, Typography } from '@mui/material'

ProductItem.propTypes = {
    product: PropTypes.object,
}

ProductItem.defaultProps = {
    product: {},
}

function ProductItem({ product }) {
    return (
        <Box padding={1}>
            <Stack>
                <Skeleton variant='rectangular' width='100%' height={120} />
                <Typography variant='body1' color='initial'>
                    {product.name}
                </Typography>
                <Typography variant='body2' color='initial'>
                    {product.salePrice} - {product.promotionPercent}
                </Typography>
            </Stack>
        </Box>
    )
}

export default ProductItem
