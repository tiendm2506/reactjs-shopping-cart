import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

ProductSort.propTypes = {
    onChange: PropTypes.func,
    currentSort: PropTypes.string.isRequired,
}

function ProductSort({ onChange, currentSort }) {
    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue)
    }
    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            aria-label='wrapped label tabs example'
            indicatorColor='primary'
            textColor='primary'
        >
            <Tab value='salePrice:ASC' label='Giá từ thấp đến cao' />
            <Tab value='salePrice:DESC' label='Giá từ cao xuống thấp' />
        </Tabs>
    )
}

export default ProductSort
