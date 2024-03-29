import React from 'react'
import PropTypes from 'prop-types'
import FilterByCategory from './filters/FilterByCategory'
import { Box } from '@mui/material'
import FilterByPrice from './filters/FilterByPrice'

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
}

function ProductFilter({ filters, onChange }) {
    const filterCategoryChange = (newCategoryId) => {
        if (!onChange) return
        const newFilters = {
            ...filters,
            'category.id': newCategoryId,
        }
        onChange(newFilters)
    }
    const filterPriceChange = (values) => {
        if(onChange) onChange(values)
    }
    return (
        <div>
            <Box>
                <FilterByCategory onChange={filterCategoryChange} />
                <FilterByPrice onChange={filterPriceChange} />
            </Box>
        </div>
    )
}

export default ProductFilter
