import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'

import ProductItem from './ProductItem'

ProductList.propTypes = {
    data: PropTypes.array,
}

ProductList.defaultProps = {
    data: [],
}

function ProductList({ data }) {
    return (
        <Box>
            <Grid container>
                {data.map((product, index) => (
                    <Grid item key={index} xs={12} sm={6} lg={4} xl={3}>
                        <ProductItem product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ProductList
