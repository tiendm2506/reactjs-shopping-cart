import React from 'react'
import PropTypes from 'prop-types'

import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { Box, Grid } from '@mui/material'

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
}

ProductSkeletonList.defaultProps = {
    length: 6,
}

function ProductSkeletonList({ length }) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} lg={4} xl={3}>
                        <Box padding={1}>
                            <Stack>
                                <Skeleton variant='rectangular' width='100%' height={120} />
                                <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
                                <Skeleton variant='text' width='60%' sx={{ fontSize: '1rem' }} />
                            </Stack>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ProductSkeletonList
