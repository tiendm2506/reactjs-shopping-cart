import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { Box, Grid, Container, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import productApi from 'api/productApi'
import ProductSkeletonList from '../components/ProductSkeletonList'
import ProductList from '../components/ProductList'
import Pagination from '@mui/material/Pagination'
import ProductSort from '../components/ProductSort'
import ProductFilter from '../components/ProductFilter'

ListPage.propTypes = {}

const useStyles = makeStyles({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0 20px',
    },
})

function ListPage(props) {
    const classes = useStyles()

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({ _page: 1, _limit: 9, _sort: 'salePrice:ASC' })
    const [pagination, setPagination] = useState({ count: 1, page: 1 })

    useEffect(() => {
        try {
            ;(async () => {
                const response = await productApi.getAll(filters)
                const { data, pagination } = response
                setProductList(data)
                setPagination(pagination)
            })()
        } catch (error) {
            console.log('Error: ', error)
        }
        setLoading(false)
    }, [filters])

    const handleChangePage = (event, page) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page,
        }))
    }

    const handleSortChange = (newSortValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _sort: newSortValue,
        }))
    }

    const handleFilterChange = (newFilter) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilter,
        }))
    }

    return (
        <Box pt={4}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilter filters={filters} onChange={handleFilterChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort onChange={handleSortChange} currentSort={filters._sort} />
                            {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                            <Box className={classes.pagination}>
                                <Pagination
                                    count={Math.ceil(pagination.total / pagination.limit) || 1}
                                    color='primary'
                                    page={pagination.page}
                                    onChange={handleChangePage}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ListPage
