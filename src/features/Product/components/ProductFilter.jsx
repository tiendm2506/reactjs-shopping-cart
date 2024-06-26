import React from 'react'
import PropTypes from 'prop-types'
import FilterByCategory from './filters/FilterByCategory'
import { Box } from '@mui/material'
import FilterByPrice from './filters/FilterByPrice'
import FilterByService from './filters/FilterByService'

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
    const filterChange = (values) => {
        if(onChange) onChange(values)
    }
    return (
        <div>
            <Box>
                <FilterByCategory onChange={filterCategoryChange} />
                <FilterByPrice onChange={filterChange} />
                <FilterByService onChange={filterChange} filters={filters} />
            </Box>
        </div>
    )
}

export default ProductFilter
