import React from 'react'
import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import { Box, Typography } from '@mui/material'
import { IMAGE_PLACEHOLDER } from 'constants'
import { HOST_URL } from 'constants'

ProductItem.propTypes = {
    product: PropTypes.object,
}

ProductItem.defaultProps = {
    product: {},
}

function ProductItem({ product }) {
    const thumbnail = product.thumbnail ? `${HOST_URL}${product.thumbnail?.url}` : IMAGE_PLACEHOLDER
    const percent = product.promotionPercent > 0 ? '-' + product.promotionPercent + '%' : ''
    return (
        <Box padding={1}>
            <Stack>
                <Box padding={1} minHeight={200}>
                    <img
                        width='100%'
                        height='200px'
                        src={thumbnail}
                        alt={product.name}
                        style={{ objectFit: 'cover' }}
                    />
                </Box>
                <Typography variant='body1' color='initial'>
                    {product.name}
                </Typography>
                <Typography variant='body2' color='initial'>
                    <Box component='span' fontSize={16} fontWeight={700} mr={1}>
                        {new Intl.NumberFormat('vi-vn', { style: 'currency', currency: 'VND' }).format(
                            product.salePrice,
                        )}{' '}
                    </Box>
                    {percent}
                </Typography>
            </Stack>
        </Box>
    )
}

export default ProductItem
