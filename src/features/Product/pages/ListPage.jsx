import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Container, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import productApi from 'api/productApi'
import ProductSkeletonList from '../components/ProductSkeletonList'
import ProductList from '../components/ProductList'

ListPage.propTypes = {}

const useStyles = makeStyles({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
})

function ListPage(props) {
    const classes = useStyles()

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            ;(async () => {
                const response = await productApi.getAll({ _page: 1, _limit: 10 })
                const { data } = response
                setProductList(data)
                console.log({ response })
            })()
        } catch (error) {
            console.log('Error: ', error)
        }
        setLoading(false)
    }, [])
    return (
        <Box pt={4}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left content</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ListPage
